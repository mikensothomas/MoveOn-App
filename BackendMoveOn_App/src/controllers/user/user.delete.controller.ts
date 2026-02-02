import type { Request, Response } from "express";
import { db } from "../../models/db/connection";
import { sql } from "@databases/pg";

class DeleteUserController {
    async deleteUser(req: Request, res: Response): Promise<Response> {

        try {
            const { id } = req.params
            
            const result = await db.query(sql`
                DELETE FROM users WHERE id = ${id} `
            )

            if (result.rowCount === 0) {
                return res.status(404).json({ message: "Usuário não encontrado" })
            }

            return res.status(200).json({
                message: "Usuário deletado com sucesso"
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao deletar o usuário", error
            })
        }
    }
}

export const deleteUserController = new DeleteUserController()