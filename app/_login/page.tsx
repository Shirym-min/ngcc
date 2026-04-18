import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "管理者ログイン",
  description: "次世代共創会サイト管理者向けログインページ",
  robots: {
    index: false,
    follow: false
  }
};

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getSingleParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = (await searchParams) ?? {};
  const error = getSingleParam(params.error);
  const redirectTo = getSingleParam(params.redirectTo) ?? "/dashboard";

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div>
          <p className={styles.eyebrow}>Session Auth</p>
          <h1>管理者ログイン</h1>
          <p className={styles.lead}>
            `users` テーブルのメールアドレスと bcrypt ハッシュ化済みパスワードで認証します。
          </p>
        </div>

        <form method="post" action="/api/auth/login" className={styles.form}>
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <label className={styles.field}>
            <span>Email</span>
            <input type="email" name="email" required placeholder="admin@example.com" />
          </label>

          <label className={styles.field}>
            <span>Password</span>
            <input type="password" name="password" required placeholder="••••••••" />
          </label>

          {error ? <p className={styles.error}>{error}</p> : null}

          <button type="submit" className={styles.submit}>
            ログイン
          </button>
        </form>

        <Link href="/" className={styles.back}>
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
