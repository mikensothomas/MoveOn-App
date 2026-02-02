import type { Request, Response } from "express";
import { getToken, verifyPassword } from "../../utils/auth";
import { sql } from "@databases/pg";
import { db } from "../../models/db/connection";

class LoginUserController {
    async loginUser(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                return res.status(400).json({
                    message: "Forneça o email e a senha"
                })
            }

            const result = await db.query(sql
                `
                SELECT id, password FROM users WHERE email = ${email}
                `, [email]
            )

            const user = result[0]

            const compareHash = await verifyPassword(password, user.password)

            if (!compareHash) {
                return res.status(400).json({
                    message: "Senha ou password inválido"
                })
            }

            const token = getToken(user.id)

            return res.status(200).json({
                message: "Login feito com sucesso",
                token
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao fazer Login", error
            })
        }
    }
}

export const loginUserController = new LoginUserController()