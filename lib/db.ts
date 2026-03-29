import { neon } from "@neondatabase/serverless";

const connectionString =
  process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL or POSTGRES_URL is not configured.");
}

export const sql = neon(connectionString);

export async function ensureDatabaseConnection() {
  await sql`SELECT 1`;
}
