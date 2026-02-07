import type { Request, Response } from "express";
import { db } from "../../models/db/connection";
import { sql } from "@databases/pg";

class ListMotocyclistController {
    async listMotocyclits(req: Request, res: Response): Promise<Response> {
        try {

            const response = await db.query(sql`
                SELECT * FROM motocyclist
            `)

            return res.status(200).json({ response })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao listar usuários"
            })
        }
    }
}

export const listMotocyclistController = new ListMotocyclistController()