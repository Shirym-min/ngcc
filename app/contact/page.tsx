import type { Metadata } from "next";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";
import VolunteerResultInquiryButton from "./VolunteerResultInquiryButton";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ",
  description:
    "お問い合わせの方法について紹介します。",
  path: "/contact"
});

export default function HomePage() {
  const volunteerResultInquiryHref =
    "mailto:kodomonosono.ccc@gmail.com?subject=ボランティア証明書に関する活動状況の確認について&body=以下の内容をご記入ください。%0A%0A氏名または団体名：%0Aボランティア番号：%0A内容：";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>お問い合わせ</h1>
        <section className={styles.features}>
          <section className={styles.feature}>
            <h2>ボランティアへの募集・お問い合わせフォーム</h2>
            <p>
              募集やお問い合わせはこちらから承っております。（ボランティア番号からのお問い合わせはもう一つ下のフォームをご利用ください。）
            </p>
            <a
              className={styles.contactButton}
              href="https://forms.gle/qGQTfhRiqvG5xvjX6"
              rel="noopener noreferrer"
              target="_blank"
            >
              お申し込みはこちらから
            </a>
          </section>
          <section className={styles.feature}>
            <h2>ボランティアの活動結果のお問い合わせ</h2>
            <p>ボランティアの活動状況やボランティア証明書について問い合わせることができます。</p>
            <ul>
              <li>ボランティア番号が必要です。</li>
            </ul>
            <VolunteerResultInquiryButton href={volunteerResultInquiryHref} />
          </section>
          <section className={styles.feature}>
            <h2>そのほかのお問い合わせ</h2>
            <p>その他、CCCやCPICに関するお問い合わせはこちらから承っております。なんらかの団体によるお問い合わせの際には団体名もお書きください。</p>
            <a
              className={styles.contactButton}
              href="https://forms.gle/qGQTfhRiqvG5xvjX6"
              rel="noopener noreferrer"
              target="_blank"
            >
              お問い合わせはこちらから
            </a>
              
          </section>
          
          
        </section>
      </section>
    </main>
  );
}
