import dotenv from "dotenv";
dotenv.config();

import * as pg from "@databases/pg";
import sql from "@databases/sql";
import { DatabaseInit } from "./databaseInit.js";

const createConnectionPool = (pg as any).default;

export const db = createConnectionPool({
    connectionString: process.env.DATABASE_URL,
    bigIntMode: "number",
});

export async function run() {
    await db.query(sql`SELECT 1`);

    await DatabaseInit.run(db);

    console.log("Connected with db");

    return db;
}
