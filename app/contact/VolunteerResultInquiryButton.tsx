"use client";

import dynamic from "next/dynamic";
import type React from "react";
import { useRef, useState, useTransition } from "react";

import styles from "./page.module.css";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
}) as unknown as React.ComponentType<{
  ref?: React.Ref<{
    executeAsync: () => Promise<string | null>;
    reset: () => void;
  }>;
  sitekey: string;
  size?: "compact" | "invisible" | "normal";
}>;

type VolunteerResultInquiryButtonProps = {
  href: string;
};

export default function VolunteerResultInquiryButton({
  href,
}: VolunteerResultInquiryButtonProps) {
  const recaptchaRef = useRef<{
    executeAsync: () => Promise<string | null>;
    reset: () => void;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (!siteKey) {
      setErrorMessage("reCAPTCHA の設定が未完了です。管理者にお問い合わせください。");
      return;
    }

    startTransition(async () => {
      try {
        setErrorMessage("");

        const token = await recaptchaRef.current?.executeAsync();

        if (!token) {
          setErrorMessage("認証に失敗しました。時間をおいてもう一度お試しください。");
          return;
        }

        const response = await fetch("/api/recaptcha/verify", {
          body: JSON.stringify({ token }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const result = (await response.json()) as { message?: string; success?: boolean };

        if (!response.ok || !result.success) {
          setErrorMessage(result.message ?? "認証に失敗しました。もう一度お試しください。");
          recaptchaRef.current?.reset();
          return;
        }

        recaptchaRef.current?.reset();
        window.location.href = href;
      } catch {
        recaptchaRef.current?.reset();
        setErrorMessage("認証処理中にエラーが発生しました。もう一度お試しください。");
      }
    });
  };

  return (
    <div className={styles.recaptchaBlock}>
      <button
        className={styles.contactButton}
        disabled={isPending}
        onClick={handleClick}
        type="button"
      >
        {isPending ? "認証中です..." : "お問い合わせはこちらから"}
      </button>
      {siteKey ? <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} size="invisible" /> : null}
      <p className={styles.recaptchaNote}>
        このボタンは reCAPTCHA によって保護されています。
      </p>
      {errorMessage ? <p className={styles.recaptchaError}>{errorMessage}</p> : null}
    </div>
  );
}
