import { Application } from "express";
import { createTeam } from "../controllers/team.controller";

const baseAuthUrl: string = "/api/team";

const teamRoutes = (app: Application) => {
  app.post(`${baseAuthUrl}/create`, createTeam);
};

export default teamRoutes;
