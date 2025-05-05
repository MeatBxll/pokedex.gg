import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addFavoritePokemon = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { userId, pokemonId } = req.body;

    await prisma.pokemon.upsert({
      where: { id: pokemonId },
      update: {},
      create: {
        id: pokemonId,
      },
    });

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        favoritePokemon: {
          connect: { id: pokemonId },
        },
      },
      select: {
        favoritePokemon: true,
      },
    });

    return res.json(updatedUser);
  } catch (err: any) {
    console.log(err);
    return res.sendStatus(400);
  }
};

export const removeFavoritePokemon = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { userId, pokemonId } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        favoritePokemon: {
          disconnect: { id: pokemonId },
        },
      },
      select: {
        favoritePokemon: true,
      },
    });

    return res.json(updatedUser);
  } catch (err: any) {
    console.error(err);
    return res.sendStatus(400);
  }
};

export const updateUserAbout = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { userId, about } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        about: about,
      },
      select: {
        about: true,
      },
    });
    return res.json(updatedUser);
  } catch (err: any) {
    console.log(err);
    return res.sendStatus(400);
  }
};