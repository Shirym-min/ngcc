import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { randomUUID, createHash } from "node:crypto";

import { sql } from "@/lib/db";

const cookieName = process.env.SESSION_COOKIE_NAME ?? "ngcc_session";
const sessionTtlDays = 7;

export type SessionRecord = {
  id: string;
  user_id: string;
  email: string;
  name: string;
  expires_at: Date;
};

function getSessionSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret) {
    throw new Error("SESSION_SECRET is not configured.");
  }

  return secret;
}

function hashToken(token: string) {
  return createHash("sha256")
    .update(`${token}:${getSessionSecret()}`)
    .digest("hex");
}

export async function createSession(userId: string) {
  const token = randomUUID();
  const tokenHash = hashToken(token);

  await sql`
    INSERT INTO sessions (id, user_id, token_hash, expires_at)
    VALUES (${randomUUID()}, ${userId}, ${tokenHash}, NOW() + INTERVAL '7 days')
  `;

  const cookieStore = await cookies();
  cookieStore.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionTtlDays * 24 * 60 * 60
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;

  if (token) {
    const tokenHash = hashToken(token);
    await sql`DELETE FROM sessions WHERE token_hash = ${tokenHash}`;
  }

  cookieStore.delete(cookieName);
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;

  if (!token) {
    return null;
  }

  return getSessionByToken(token);
}

export async function getSessionFromRequest(request: NextRequest) {
  const token = request.cookies.get(cookieName)?.value;

  if (!token) {
    return null;
  }

  return getSessionByToken(token);
}

async function getSessionByToken(token: string): Promise<SessionRecord | null> {
  const tokenHash = hashToken(token);
  const rows = await sql<SessionRecord>`
    SELECT s.id, s.user_id, u.email, u.name, s.expires_at
    FROM sessions s
    INNER JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ${tokenHash}
      AND s.expires_at > NOW()
    LIMIT 1
  `;

  return rows[0] ?? null;
}
