import * as z from "zod";
import { SexData } from "../../types/typesData.js";

export const userSchema = z.object({
    name: z.string().min(3, "Nome tem que ter pelo menos 3 caracteres"),
    cpf: z.string().length(11, "O CPF deve ter 11 dígitos"),
    sex: z.nativeEnum(SexData),
    email: z.string().email({ message: "Email inválido" }),
    phone: z.string().length(11, "O número deve ter 11 dígitos"),
    isAdmin: z.boolean().default(false),
    type: z.string().default("user"),
    password: z.string().min(6, "A senha deve ter pelo menos seis caracteres"),
});