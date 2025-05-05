import { Application } from "express";
import {
  addFavoritePokemon,
  removeFavoritePokemon,
  updateUserAbout,
} from "../controllers/user.controller";
import verifyJWT from "../middleware/verifyJWT.middleware";

const baseAuthUrl: string = "/api/user";

const userRoutes = (app: Application) => {
  app.post(`${baseAuthUrl}/addFavoritePokemon`, verifyJWT, addFavoritePokemon);
  app.delete(`${baseAuthUrl}/removeFavoritePokemon`, verifyJWT, removeFavoritePokemon);
  app.put(`${baseAuthUrl}/updateAbout`, verifyJWT, updateUserAbout);
};

export default userRoutes;
