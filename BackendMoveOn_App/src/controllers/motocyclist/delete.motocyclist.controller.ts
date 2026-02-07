import type { Request, Response } from "express";
import { db } from "../../models/db/connection";
import { sql } from "@databases/pg";

class DeleteMotocyclistController {
    async deleteMotocyclist(req: Request, res: Response): Promise<Response> {
        try {

            const { id } = req.params

            db.query(sql`
                DELETE FROM motocyclist WHERE id = ${id}
            `)

            return res.status(200).json({
                message: "Motolista deletado com sucesso"
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao deletar o motolista"
            })
        }
    }
}

export const deleteMotocyclistController = new DeleteMotocyclistController()