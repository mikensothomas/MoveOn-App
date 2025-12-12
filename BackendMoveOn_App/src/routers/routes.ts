import type { Request, Response } from "express"
import { Router } from "express"
import { inserDataUsersControllers } from "../controllers/user.controllers.js"

export const router = Router()

router.get("/", (_: Request, res: Response) => {
    res.json({ message: "Hello App" })
})

router.post("/registerUser", inserDataUsersControllers)