import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: Number = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
