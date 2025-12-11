import * as z from "zod";

export const User = z.object({
    name: z.string().min(3, "Nome tem que ter pelo menos 3 caracteres"),
    cpf: z.string().length(11, "O CPF deve ter 11 dígitos"),
    sex: z.string().min(1, "Sexo obrigatório"),
    email: z.email({ message: "Email inválido" }),
    phone: z.string().length(11, "O número deve ter 11 dígitos"),
    password: z.string().min(6, "A senha deve ter pelo menos seis caracteres"),
});

export const Motocyclist = z.object({
    name: z.string().min(3, "Nome tem que ter pelo menos 3 caracteres"),
    sex: z.string().min(1, "Sexo obrigatório"),
    email: z.email({ message: "Email inválido" }),
    phone: z.string().length(11, "O número deve ter 11 dígitos"),
    cpf: z.string().length(11, "O CPF deve ter 11 dígitos"),
    password: z.string().min(6, "A senha deve ter pelo menos seis caracteres"),
    cnh: z.string().min(1, "Campo obrigatório"),
    cnh_category: z.string().min(1, "Campo obrigatório"),
    validate_cnh: z.coerce.date({ message: "Data inválida" }),
    cnh_picture: z.string().min(1, "Campo obrigatório"),
    vehicle_license_plate: z.string().min(7, "Placa inválida"),
    mark_vehicle: z.string().min(1, "Campo obrigatório"),
    model_vehicle: z.string().min(1, "Campo obrigatório"),
    year_vehicle: z.number().int("Deve ser número inteiro"),
    color_vehicle: z.string().min(1, "Campo obrigatório"),
    renavam: z.string().min(1, "Campo obrigatório"),
    bank: z.string().min(1, "Campo obrigatório"),
    account_number: z.string().min(1, "Campo obrigatório"),
    type_of_account: z.string().min(1, "Campo obrigatório"),
    agency: z.string().min(1, "Campo obrigatório"),
});