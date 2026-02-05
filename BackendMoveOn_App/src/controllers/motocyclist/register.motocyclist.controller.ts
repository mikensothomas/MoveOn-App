import type { Request, Response } from "express"
import { sql } from "@databases/pg";
import { db } from "../../models/db/connection";
import motocyclistSchema from "../../models/schema/motocyclistSchema";
import { passwordHash } from "../../utils/auth";

class RegisterMotocyclistCntroller {
    async registerMotocyclist(req: Request, res: Response): Promise<Response> {
        try {
            const data = {
                ...req.body,
                cnh_picture: req.file?.path,
                is_admin: false,
                type: "motocyclist",
            };

            const parsed = motocyclistSchema.parse(data);

            const hashedPassword = await passwordHash(parsed.password);

            await db.query(sql`
        INSERT INTO motocyclist(
          name,
          sex,
          email,
          phone,
          cpf,
          password,
          cnh,
          cnh_category,
          validate_cnh,
          cnh_picture,
          vehicle_license_plate,
          mark_vehicle,
          model_vehicle,
          year_vehicle,
          color_vehicle,
          renavam,
          bank,
          account_number,
          type_of_account,
          agency
        ) VALUES(
          ${parsed.name},
          ${parsed.sex},
          ${parsed.email},
          ${parsed.phone},
          ${parsed.cpf},
          ${hashedPassword},
          ${parsed.cnh},
          ${parsed.cnh_category},
          ${parsed.validate_cnh},
          ${parsed.cnh_picture},
          ${parsed.vehicle_license_plate},
          ${parsed.mark_vehicle},
          ${parsed.model_vehicle},
          ${parsed.year_vehicle},
          ${parsed.color_vehicle},
          ${parsed.renavam},
          ${parsed.bank},
          ${parsed.account_number},
          ${parsed.type_of_account},
          ${parsed.agency}
        )
      `);

            return res.status(201).json({
                message: "Motolista registrado com sucesso",
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                message: "Erro ao cadastrar Motolista",
                error,
            });
        }
    }
}

export const registerMotocyclistCntroller = new RegisterMotocyclistCntroller()