import {
  RegisterValidatorInput,
  RegisterErrors,
  RegisterValidatorReturn,
  LoginValidatorInput,
  LoginValidatorReturn
} from "./types";
import emailValidator from "../../functions/emailValidator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const registerValidator = async (
  data: RegisterValidatorInput
): Promise<RegisterValidatorReturn> => {
  const { username, password, firstName, email } = data;

  const errors: RegisterErrors = { errors: {} };

  if (!username) {
    errors.errors.username = "Username is required";
  } else if (username.length < 3) {
    errors.errors.username = "Username must be 3 chars";
  }

  if (!email) {
    errors.errors.email = "Email is required";
  } else if (!emailValidator(email)) {
    errors.errors.email = "Invalid Email";
  } else {
    const emailUsed = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailUsed) {
      errors.errors.email = "Email in use";
    }
  }

  if (!password) {
    errors.errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.errors.password = "Password must be 8 chars";
  }

  if (!firstName) {
    errors.errors.firstName = "First name is required";
  } else if (username.length < 3) {
    errors.errors.firstName = "First name must be 3 chars";
  }

  if (Object.keys(errors.errors).length > 0) return errors;

  return null;
};

export const loginValidator = async (
  data: LoginValidatorInput
): Promise<LoginValidatorReturn> => {
  const { email, password } = data;

  const foundUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!foundUser || !(await bcrypt.compare(password, foundUser.password)))
    return null;

  return foundUser;
};
