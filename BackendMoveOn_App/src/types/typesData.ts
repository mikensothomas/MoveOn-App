export enum SexData {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO",
    NAO_IDENTIFICADO = "NAO_IDENTIFICADO"
}

export enum CnhCategory {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E"
}

export enum TypeAcount {
    CORRENTE = "CORRENTE",
    POUPANCA = "POUPANCA",
    SALARIO = "SALARIO"
}

export type Users = {
    name: string
    cpf: string
    sex: SexData
    email: string
    phone: string
    isAdmin: boolean
    type: string
    password: string
}

export type Motocyclists = {
    name: string
    sex: SexData
    email: string
    phone: string
    cpf: string
    password: string
    cnh: string
    cnh_category: CnhCategory
    validate_cnh: Date
    cnh_picture: string
    vehicle_license_plate: string
    mark_vehicle: string
    model_vehicle: string
    year_vehicle: number
    color_vehicle: string
    renavam: string
    bank: string
    isAdmin: boolean
    type: string
    account_number: number
    type_of_account: TypeAcount
    agency: number
}