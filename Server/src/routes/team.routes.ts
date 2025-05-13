import { Application } from "express";
import { updateTeamPokemon } from "../controllers/team.controller";

const baseAuthUrl: string = "/api/team";

const teamRoutes = (app: Application) => {
  app.post(`${baseAuthUrl}/updatePokemon`, updateTeamPokemon);
};

export default teamRoutes;
