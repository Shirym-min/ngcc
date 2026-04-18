import type { Metadata } from "next";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "葛飾区の中高生ボランティア団体 次世代共創会（NGCC）",
  description:
    "次世代共創会（NGCC）の公式サイト。中高生ボランティアによる幼稚園支援、地域コミュニティ再建、活動理念をご紹介します。",
  path: "/",
  
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>NGCC</p>
        <h1><span className={styles.subtitle}>葛飾区のボランティア団体</span><br/>次世代共創会</h1>
        <h2>Next Generation Co-Creation</h2>
        <p className={styles.lead}>
          このウェブサイトは停止しています。
        </p>
      </section>
    </main>
  );
}
