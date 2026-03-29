import { NextResponse } from "next/server";

import { verifyUserCredentials } from "@/lib/auth";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const requestedRedirect = String(formData.get("redirectTo") ?? "/dashboard");
  const redirectTo = requestedRedirect.startsWith("/") ? requestedRedirect : "/dashboard";
  const origin = new URL(request.url).origin;

  if (!email || !password) {
    return NextResponse.redirect(
      new URL("/login?error=Email%20and%20password%20are%20required", origin),
      303
    );
  }

  const user = await verifyUserCredentials(email, password);

  if (!user) {
    return NextResponse.redirect(
      new URL(`/login?error=Invalid%20credentials&redirectTo=${encodeURIComponent(redirectTo)}`, origin),
      303
    );
  }

  await createSession(user.id);
  return NextResponse.redirect(new URL(redirectTo, origin), 303);
}
