import Link from "next/link";

import styles from "./page.module.css";

const stack = [
  "Next.js 15 App Router",
  "TypeScript 5",
  "React 19",
  "CSS Modules",
  "Vercel Postgres (Neon)",
  "Session-based auth",
  "Docker / Nginx / Vercel",
  "GitHub Actions"
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>NGCC Starter</p>
        <h1>React と Next.js を使ったホームページ基盤</h1>
        <p className={styles.lead}>
          App Router、セッション認証、Postgres 接続、Docker と CI/CD の土台を最初から揃えたベース実装です。
        </p>
        <div className={styles.actions}>
          <Link href="/login" className={styles.primary}>
            管理画面ログイン
          </Link>
          <Link href="/dashboard" className={styles.secondary}>
            ダッシュボード確認
          </Link>
        </div>
      </section>

      <section className={styles.panel}>
        <h2>Technology Stack</h2>
        <div className={styles.grid}>
          {stack.map((item) => (
            <article key={item} className={styles.card}>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
