import type { Request, Response } from "express";
import type { Users } from "../types/typesData.js";
import { userSchema } from "../models/schema/schemaData.js";
import { db } from "../models/db/connection.js";
import sql from "@databases/sql";

export async function inserDataUsersControllers(req: Request, res: Response) {
    try {
        const parsed: Users = userSchema.parse(req.body);

        const result = await db.query(sql`
            INSERT INTO users (name, cpf, sex, email, phone, password)
            VALUES (${parsed.name}, ${parsed.cpf}, ${parsed.sex}, ${parsed.email}, ${parsed.phone}, ${parsed.password})
            RETURNING id, name, email, created_at
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