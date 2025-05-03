export interface RegisterValidatorInput {
  username: string;
  firstName: string;
  email: string;
  password: string;
}

export interface RegisterErrors {
  errors: {
    username?: string;
    email?: string;
    password?: string;
    firstName?: string;
  };
}

export type RegisterValidatorReturn = RegisterErrors | null;

export interface LoginValidatorInput {
  email: string;
  password: string;
}

export type LoginValidatorReturn = any | null;