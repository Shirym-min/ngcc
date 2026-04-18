import type { Metadata } from "next";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "園イベント共創委員会（CCC）",
  description:
    "園イベント共創委員会の活動内容を紹介しています。",
  path: "/ccc"
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>園イベント共創委員会（CCC）</h1>
        <section className={styles.features}>
          <section className={styles.feature}>
            <h2>概要</h2>
            <p>
              CCCとは、幼稚園の運動会・発表会・園内行事などの運営補助・集客支援を行う    実働部隊です。
              「お兄さん・お姉さん」として園児と交流し、園の魅力を高めることを目的としています。
            </p>
          </section>
          <section className={styles.feature}>
            <h2>特徴</h2>
            <ul>
              <li>メンバー全員が葛飾こどもの園幼稚園の卒園生</li>
              <li>園長・先生との距離が近く、園のことをよく理解している</li>
              <li>中高生主体だからこそできる柔軟な発想（DX提案・SNS活用など）</li>
            </ul>
          </section>
          <section className={styles.feature}>
            <h2>展望</h2>
            <ul>
              <li>世代を超えたコミュニケーションの実現</li>
            </ul>
          </section>
          
          
        </section>
      </section>
    </main>
  );
}
