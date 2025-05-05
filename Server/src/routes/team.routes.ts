import { Application } from "express";
import { updateTeamPokemon } from "../controllers/team.controller";
import verifyJWT from "../middleware/verifyJWT.middleware";

const baseAuthUrl: string = "/api/team";

const teamRoutes = (app: Application) => {
  app.put(`${baseAuthUrl}/updatePokemon`, verifyJWT, updateTeamPokemon);
};

export default teamRoutes;
