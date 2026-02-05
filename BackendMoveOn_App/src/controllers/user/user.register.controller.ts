import type { Request, Response } from "express";
import type { Users } from "../../types/typesData.js";
import { userSchema } from "../../models/schema/userSchema.js";
import { db } from "../../models/db/connection.js";
import sql from "@databases/sql";
import { passwordHash } from "../../utils/auth.js";

export async function insertDataUsersControllers(req: Request, res: Response) {
    try {
        const parsed: Users = userSchema.parse(req.body);

        const hash = await passwordHash(parsed.password)

        const userExisteEmail = await db.query(sql`
            SELECT email FROM users WHERE email = ${parsed.email}
            UNION
            SELECT email FROM motocyclist WHERE email = ${parsed.email}
        `)

        if (userExisteEmail.length > 0) {
            return res.status(404).json({
                message: "Email existe"
            })
        }

        const userExisteCPF = await db.query(sql`
            SELECT cpf FROM users WHERE cpf = ${parsed.cpf}
            UNION
            SELECT cpf FROM motocyclist WHERE cpf = ${parsed.cpf}
        `)

        if (userExisteCPF.length > 0) {
            return res.status(404).json({
                message: "CPF existe"
            })
        }

        const result = await db.query(sql`
            INSERT INTO users (
                name, 
                cpf, 
                sex, 
                email, 
                phone, 
                password
            )
            VALUES (
                ${parsed.name}, 
                ${parsed.cpf}, 
                ${parsed.sex}, 
                ${parsed.email}, 
                ${parsed.phone}, 
                ${hash}
            )
            RETURNING 
            id, 
            name, 
            email, 
            created_at
        `);

        return res.status(201).json({
            message: "Usuário criado com sucesso",
            data: result[0],
        });

    } catch (error: any) {
        console.error("ERRO NO CONTROLLER:", error);

        return res.status(500).json({
            error: "Erro interno",
            details: error?.message || error,
        });
    }
}