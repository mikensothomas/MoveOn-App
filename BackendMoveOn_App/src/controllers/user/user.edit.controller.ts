import type { Request, Response } from "express";
import { db } from "../../models/db/connection";
import { sql } from "@databases/pg";

class EditUsersControllers {
    async editUser(req: Request, res: Response): Promise<Response> {

        try {
            const { id } = req.params

            const { name, cpf, sex, email, phone } = req.body
            const userExists = await db.query(sql`
                SELECT * FROM users WHERE id = ${id}
            `)

            if (userExists.rowCount === 0) {
                return res.status(404).json({ message: "Usuário não encontrado" })
            }

            const result = await db.query(sql`
                UPDATE users
                SET name = ${name}, cpf = ${cpf}, email = ${email}, phone = ${phone}
                WHERE id = ${id}
                RETURNING
                    id,
                    name,
                    cpf,
                    sex,
                    email,
                    phone,
                    created_at
                `,
            );

            return res.status(200).json({
                message: "Usuário editado com sucesso",
                user: result[0]
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: "Erro ao editar o usuário" })
        }
    }
}

export const editUsersControllers = new EditUsersControllers()