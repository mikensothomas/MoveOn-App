import dotenv from "dotenv";
dotenv.config()
import * as pg from '@databases/pg';
import sql from "@databases/sql";
import { DatabaseInit } from "./databaseInit.js";

const createConnectionPool = (pg as any).default;
const SQL = (sql as any).default;

export async function run() {

    const db = createConnectionPool({
        connectionString: process.env.DATABASE_URL,
        bigIntMode: "number",
    });

    await db.query(SQL`SELECT 1`);

    await DatabaseInit.run(db)

    console.log("Connected with db");
    await db.dispose();
}