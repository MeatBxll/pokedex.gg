import { Application } from "express";
import { login, register } from "../controllers/auth.controller";

const baseAuthUrl: string = "/api/auth";

const authRoutes = (app: Application) => {
  app.post(`${baseAuthUrl}/login`, login);
  app.post(`${baseAuthUrl}/register`, register);
};

export default authRoutes;
