import { sql } from "@vercel/postgres";

export { sql };

export async function ensureDatabaseConnection() {
  await sql`SELECT 1`;
}
