import type { Request, Response } from "express"
import { Router } from "express"

export const router = Router()

router.get("/", (_: Request, res: Response) => {
    res.json({ message: "Hello App" })
})