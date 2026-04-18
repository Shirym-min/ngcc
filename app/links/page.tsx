import type { Metadata } from "next";
import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata({
  title: "各種リンク",
  description:
    "各種NGCCのリンクを紹介します",
  path: "/links"
});

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>NGCCのその他のリンク</h1>
        <section className={styles.features}>
          <section className={styles.feature}>
            <h2>Instagram</h2>
            <p>
              公式Instagramでは、活動の様子などを随時発信しています。ぜひご覧ください。

            </p>
            <div className={styles.instagramLink}>
              <Link className={styles.link}href="https://www.instagram.com/ngcc.kodomonosono?igsh=dHdtMXluN3BrbDM4" target="_blank" rel="noopener noreferrer">
                <Image className={styles.image} alt="Instagram QR Code" height={200} src="/images/instagram.jpg" width={200} />
              </Link>
            </div>
          </section>
            
            
          
          
          
        </section>
      </section>
    </main>
  );
}
