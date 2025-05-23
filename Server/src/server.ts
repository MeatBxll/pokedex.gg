import express, { Application } from "express";
import corsOptions from "./config/corsOptions.config";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import teamRoutes from "./routes/team.routes";
import userRoutes from "./routes/user.routes";

const app: Application = express();
const PORT: Number = 5000;

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

authRoutes(app);
teamRoutes(app);
userRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
