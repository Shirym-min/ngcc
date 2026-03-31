import Link from "next/link";
import Image from "next/image"
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
        <p className={styles.eyebrow}>NGCC</p>
        <h1>次世代共創会</h1>
        <p className={styles.lead}>
          若者が現代社会に対して問題意識を持ち、自ら行動することをサポートします。<br/>
中高生ボランティアの力を活用し、創立者の母校である
葛飾こどもの園幼稚園の課題解決と地域コミュニティの再建を図ることをミッションに、2026年3月28日に設立されました。
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
