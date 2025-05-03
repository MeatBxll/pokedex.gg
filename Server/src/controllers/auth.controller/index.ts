import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../../functions/generateToken";
import { PrismaClient } from "@prisma/client";
import { registerValidator } from "./validation";

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<any> => {
  const { username, firstName, email, password } = req.body;
  const errors = await registerValidator(req.body);
  if (errors) return res.status(400).json(errors);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserData = {
      username,
      email,
      password: hashedPassword,
      firstName: firstName,
    };

    const newUser = await prisma.user.create({ data: newUserData });

    const accessToken = await generateToken({ id: newUser.id }, "ACCESS");
    const refreshToken = await generateToken({ id: newUser.id }, "REFRESH");

    await prisma.user.update({
      where: {
        id: newUser.id,
      },
      data: {
        refreshToken: refreshToken,
      },
    });

    return res
      .cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true,
      })
      .json({
        id: newUser.id,
        username: newUser.username,
        token: accessToken,
      });
  } catch (err: any) {
    console.log(err);
    return res.sendStatus(400);
  }
};
