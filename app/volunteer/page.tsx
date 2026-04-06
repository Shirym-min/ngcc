import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "ボランティア",
  description:
    "ボランティアの募集をしています。",
  path: "/volunteer"
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>ボランティア</h1>
        <section className={styles.features}>
          <section className={styles.feature}>
            <h2>概要</h2>
            <p>
              次世代共創会（NGCC）は、中高生ボランティアで幼稚園の課題解決を目指す団体です。
現在、私たち中高生だけでは知らないこと・できないことも多くあります。
大学生の皆さんの知識や視点を借りながら、より良い組織づくりを進めていきたいという想いから、この募集を始めました。
<br/>
CCCの成功モデルを他園・他地域に展開し、中高生ボランティアによる幼稚園支援の仕組みを日本全国に広めることを目指しています。
            </p>
          </section>
          <section className={styles.feature}>
            <h2>募集要項</h2>
            <ul>
              <li>中高生メンバーのサポート、企画支援を行っていただきます。</li>
              <li>具体的な活動内容は以下のとおりです。<ul>
                <li>イベント企画・運営のアドバイス</li>
                <li>中高生メンバーの相談対応</li>
                <li>SNS発信・広報のサポート</li>
              </ul></li>
              <li>基本はチャット（Discord・LINE・Instagram）によって相談を行います。<ul>
                <li>基本はお互いが連絡可能な時間帯において、リアルタイムで行います。</li>
                <li>1回につき10分ごとの時間で可能です。</li>
                </ul></li>
              <li>ボランティア証明書の発行<ul>
                <li>ボランティア証明書の条件や内容については以下に記載しています。</li></ul></li>
            </ul>
          </section>
          <section className={styles.feature}>
            <h2>ボランティア証明書について</h2>
            <ul>
              <li>ボランティア証明書の発行基準は以下のとおりです。<ul>
                <li>本活動において、合計60分以上の対応を行なっていただきます。</li>
                <li>合計5回以上の相談対応を行なっていただきます。</li>               
                </ul></li>
                <li>ボランティア証明書には以下の内容が記載されます。<ul>
                  <li>活動内容</li>
                  <li>合計活動時間</li>
                  <li>活動回数</li>
                  <li>ボランティア番号（必要な場合ボランティア番号をお問い合わせいただくことで、活動記録などを開示いたします。）</li>
                </ul></li>
                <li>PDF発行となります。</li>
                <li>ボランティア証明書は当団体が発行することとなります。ボランティア証明書は、正確性が高くなるように作成いたしますが、提出先における取り扱いや評価については保証いたしかねます。</li>
            </ul>
          </section>

          <section className={styles.contactCta}>
            
            <h2>ボランティアのお申し込みはこちら</h2>
            <p className={styles.contactLead}>
              活動内容などの相談だけでも大歓迎です。お問い合わせページから、いつでもご連絡いただけます。
            </p>
            <Link className={styles.contactButton} href="/contact">
              お問い合わせページ
              <span aria-hidden="true" className={styles.contactArrow}>
                →
              </span>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
