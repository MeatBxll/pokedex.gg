import { Application } from "express";
import { register } from "../controllers/auth.controller";

const baseAuthUrl: string = "/api/auth";

const authRoutes = (app: Application) => {
  app.post(`${baseAuthUrl}/register`, register);
};

export default authRoutes;
