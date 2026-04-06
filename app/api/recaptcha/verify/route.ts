import { NextResponse } from "next/server";

const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
const minimumScore = 0.5;

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
};

export async function POST(request: Request) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return NextResponse.json(
      { message: "reCAPTCHA secret key is not configured.", success: false },
      { status: 500 }
    );
  }

  const body = (await request.json()) as { token?: string };
  const token = body.token?.trim();

  if (!token) {
    return NextResponse.json(
      { message: "reCAPTCHA token is required.", success: false },
      { status: 400 }
    );
  }

  const verificationResponse = await fetch(verifyUrl, {
    body: new URLSearchParams({
      response: token,
      secret,
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  if (!verificationResponse.ok) {
    return NextResponse.json(
      { message: "Failed to verify reCAPTCHA.", success: false },
      { status: 502 }
    );
  }

  const verificationResult =
    (await verificationResponse.json()) as RecaptchaVerifyResponse;

  const passedScoreCheck =
    typeof verificationResult.score !== "number" ||
    verificationResult.score >= minimumScore;

  if (!verificationResult.success || !passedScoreCheck) {
    return NextResponse.json(
      { message: "reCAPTCHA verification failed.", success: false },
      { status: 403 }
    );
  }

  return NextResponse.json({ success: true });
}
