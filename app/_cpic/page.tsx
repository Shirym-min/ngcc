import type { Metadata } from "next";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "名前は保留中(CPIC)",
  description:
    "園イベント共創委員会の活動内容を紹介しています。",
  path: "/cpic"
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>CPIC</h1>
        <section className={styles.features}>
          <section className={styles.feature}>
            <h2>概要</h2>
            <p>
              CPICは、CCCモデルの全国拡大を目的とした政策組織です。

CCCの成功モデルを他園・他地域に展開し、中高生ボランティアによる幼稚園支援の仕組みを日本全国に広めることを目指しています。
            </p>
          </section>
          <section className={styles.feature}>
            <h2>役割</h2>
            <ul>
              <li>CCCモデルの標準化とマニュアル作成</li>
              <li>CCC活動を通して連携</li>
            </ul>
          </section>
          <section className={styles.feature}>
            <h2>現在の活動</h2>
            <p>現在、CPICは28年の本格運用に向けてデータ等を収集しております。
そのため、サポーター等は募集しておりません。サポートター等に関してはCCCにてのみ募集しております。申し訳ございません。</p>
          </section>
          
          
        </section>
      </section>
    </main>
  );
}
