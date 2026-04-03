import type { Metadata } from "next";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "次世代共創会 公式サイト",
  description:
    "次世代共創会（NGCC）の公式サイト。中高生ボランティアによる幼稚園支援、地域コミュニティ再建、活動理念をご紹介します。",
  path: "/"
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>NGCC</p>
        <h1>次世代共創会</h1>
        <h2>Next Generation Co-Creation</h2>
        <p className={styles.lead}>
          若者が現代社会に対して問題意識を持ち、自ら行動することを支える団体です。
          <br />
          中高生ボランティアの力を活用し、創立者の母校である葛飾こどもの園幼稚園の課題解決と、
          地域コミュニティの再建を目指して2026年3月に設立されました。
        </p>
      </section>
    </main>
  );
}
