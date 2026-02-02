import type { Request, Response } from "express";
import { db } from "../../models/db/connection";
import { sql } from "@databases/pg";

class ListUserControllers {
    async userList(req: Request, res: Response): Promise<Response> {
        try {
            const result = await db.query(sql`
                SELECT * FROM users
            `)

            if (result.rowCount === 0) {
                return res.status(404).json({
                    message: "Sem usuários"
                })
            }

            return res.status(200).json({ result })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao listar usuários", error
            })
        }
    }
}

export const listUserControllers = new ListUserControllers()