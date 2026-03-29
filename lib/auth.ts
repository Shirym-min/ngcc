import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import { sql } from "@/lib/db";
import { getSession } from "@/lib/session";

export type UserRecord = {
  id: string;
  email: string;
  name: string;
  password_hash: string;
};

export async function findUserByEmail(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const rows = await sql<UserRecord>`
    SELECT id, email, name, password_hash
    FROM users
    WHERE email = ${normalizedEmail}
    LIMIT 1
  `;

  return rows[0] ?? null;
}

export async function verifyUserCredentials(email: string, password: string) {
  const user = await findUserByEmail(email);

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password_hash);
  return isValid ? user : null;
}

export async function requireUser() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}
