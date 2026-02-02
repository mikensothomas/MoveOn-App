import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const passwordHash = async (password: string): Promise<string> => {

    const salt = await bcrypt.genSalt(10)

    return await bcrypt.hash(password, salt)
}

export const verifyPassword = async (password: string, passwordHash: string): Promise<boolean> => {
    return await bcrypt.compare(password, passwordHash);
}


export const getToken = (id_user: string): string => {
    const secret_jwt = process.env.JWT_SECRET

    if (!secret_jwt) {
        throw new Error("Chave secreta não gerada")
    }

    const payload = { id: id_user }

    return jwt.sign(payload, secret_jwt, {
        expiresIn: '5y'
    })
}