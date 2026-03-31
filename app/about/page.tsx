import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>

        <h1>この委員会について</h1>


        <section className={styles.features}>
          <section className={styles.feature}>
            <h2>基本理念</h2>
            <p>
              若者が現代社会に対して問題意識を持ち、自ら行動することをサポートする
            </p>
          </section>
          <section className={styles.feature}>
            <h2>目的</h2>
            <p>
              中高生ボランティアの力を活用し、母校（幼稚園）の課題解決と地域コミュニティの再建を図る
            </p>
          </section>
          <section className={styles.feature}>
            <h2>展望</h2>
            <p>
              <li>世代を超えたコミュニケーションの実現</li>
            </p>
          </section>
          <section className={styles.featureinfo}>
            <h2>組織情報</h2>
            <p>
              団体名　　　　：次世代共創会（NGCC / Next Generation Co-Creation)<br />
              代表（委員長）：S.Yasuda<br />
              副委員長　　　：M.Shirayama<br />
              事務局長　　　：H.H<br />
              設立月　　　　：2026年3月
            </p>
          </section>
          <section className={styles.featureinfo}>
            <h2>組織図</h2>
            <div className={styles.organizationChart}>
              <ul>
                <li>
                  <strong>NGCC（次世代共創会）</strong>
                  <ul>
                    <li>
                      <strong>事務局</strong>
                      <p>全体の運営管理・対外連絡調整・広報SNS発信</p>
                    </li>
                    <li>
                      <strong>保育事業部</strong>
                      <ul>
                        <li>
                          <strong>園イベント共創委員会（CCC）【実働組織】</strong>
                          <p>幼稚園のイベント運営補助・集客支援</p>
                        </li>
                        <li>
                          <strong>保育政策共創会【全体に関する組織】</strong>
                          <p>CCCモデルの普及を目的とした組織</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>



    </main>
  );
}
