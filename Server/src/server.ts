import express, { Application } from "express";
import corsOptions from "./config/corsOptions.config";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";

const app: Application = express();
const PORT: Number = 8000;


dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

authRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
