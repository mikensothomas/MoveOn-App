import sql from "@databases/sql";

export class DatabaseInit {

    static async run(db: any) {

        const SQL = (sql as any).default

        await db.query(SQL`

            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                cpf VARCHAR(11) UNIQUE NOT NULL,
                sex VARCHAR(50) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                phone VARCHAR(11) NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS motocyclist (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                sex VARCHAR(50) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                phone VARCHAR(11) NOT NULL,
                cpf VARCHAR(11) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                cnh VARCHAR(20) UNIQUE NOT NULL,
                cnh_category VARCHAR(10) NOT NULL,
                validate_cnh DATE NOT NULL,
                cnh_picture VARCHAR(255) NOT NULL,
                vehicle_license_plate VARCHAR(20) NOT NULL,
                mark_vehicle VARCHAR(100) NOT NULL,
                model_vehicle VARCHAR(100) NOT NULL,
                year_vehicle INT NOT NULL,
                color_vehicle VARCHAR(50) NOT NULL,
                renavam VARCHAR(50) NOT NULL,
                bank VARCHAR(50) NOT NULL,
                account_number BIGINT UNIQUE NOT NULL,
                type_of_account VARCHAR(10) NOT NULL,
                agency VARCHAR(10) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
      `);
    }
}
