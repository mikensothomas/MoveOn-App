import dotenv from "dotenv";
dotenv.config()
import * as pg from '@databases/pg';
import sql from "@databases/sql";

const createConnectionPool = (pg as any).default;
const SQL = (sql as any).default;

export async function run() {

    const db = createConnectionPool({
        connectionString: process.env.DATABASE_URL,
        bigIntMode: "number",
    });

    await db.query(SQL`SELECT 1`);

    console.log("Connected with db");
    await db.dispose();
}