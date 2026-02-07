import type { Request, Response } from "express";
import { db } from "../../models/db/connection";
import { sql } from "@databases/pg";

class EditMotocyclistController {
    async editMotocyclist(req: Request, res: Response) {
        try {

            const { id } = req.params
            
            const {
                name,
                sex,
                email,
                phone,
                cpf,
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
            } = req.body

            const motocyclistExist = db.query(sql`
                SELECT id FROM motocyclist WHERE id = ${id}   
            `)

            if (!motocyclistExist.rows || motocyclistExist.rows.length === 0) {
                return res.status(404).json({
                    message: "Usuário não encontrado"
                })
            }

            const response = db.query(sql`
                UPDATE motocyclist SET 
                name = ${name},
                sex = ${sex},
                email = ${email},
                phone = ${phone},
                cpf = ${cpf},
                cnh = ${cnh},
                cnh_category = ${cnh_category},
                validate_cnh = ${validate_cnh},
                cnh_picture = ${cnh_picture},
                vehicle_license_plate = ${vehicle_license_plate},
                mark_vehicle = ${mark_vehicle},
                model_vehicle = ${model_vehicle},
                year_vehicle = ${year_vehicle},
                color_vehicle = ${color_vehicle},
                renavam = ${renavam},
                bank = ${bank},
                account_number = ${account_number},
                type_of_account = ${type_of_account},
                agency = ${agency}
            WHERE id = ${id}
            `,
                [name,
                    sex,
                    email,
                    phone,
                    cpf,
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
                ]
            )

            return res.status(200).json({
                message: "Usuário editado com sucesso",
                motocyclist: response.date,
                file: cnh_picture
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao editar usuário"
            })
        }
    }
}

export const editMotocyclistController = new EditMotocyclistController()