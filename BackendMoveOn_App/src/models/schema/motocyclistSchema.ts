import z from "zod";
import { CnhCategory, SexData, TypeAcount } from "../../types/typesData";

export const motocyclistSchema = z.object({
    name: z.string().min(3, "Nome tem que ter pelo menos 3 caracteres"),
    sex: z.nativeEnum(SexData),
    email: z.string().email({ message: "Email inválido" }),
    phone: z.string().length(11, "O número deve ter 11 dígitos"),
    cpf: z.string().length(11, "O CPF deve ter 11 dígitos"),
    password: z.string().min(6, "A senha deve ter pelo menos seis caracteres"),
    cnh: z.string().min(1, "Campo obrigatório"),
    cnh_category: z.nativeEnum(CnhCategory),
    validate_cnh: z.coerce.date({ message: "Data inválida" }),
    cnh_picture: z.string().min(1, "Campo obrigatório"),
    vehicle_license_plate: z.string().min(7, "Placa inválida"),
    mark_vehicle: z.string().min(1, "Campo obrigatório"),
    model_vehicle: z.string().min(1, "Campo obrigatório"),
    year_vehicle: z.number().int("Deve ser número inteiro"),
    color_vehicle: z.string().min(1, "Campo obrigatório"),
    renavam: z.string().min(1, "Campo obrigatório"),
    bank: z.string().min(1, "Campo obrigatório"),
    isAdmin: z.boolean().default(false),
    type: z.string().default("motocyclist"),
    account_number: z.string().min(1, "Campo obrigatório"),
    type_of_account: z.nativeEnum(TypeAcount),
    agency: z.string().min(1, "Campo obrigatório"),
});