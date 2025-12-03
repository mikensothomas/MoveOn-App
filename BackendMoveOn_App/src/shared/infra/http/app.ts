import type { Request, Response } from "express";
import express from "express"

export const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {

  res.json({ message: "Hello, world!" });
});