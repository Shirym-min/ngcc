"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <Link aria-label="NGCC ホーム" className={styles.logoLink} href="/" onClick={handleLinkClick}>
          <Image
            alt="NGCC Logo"
            className={styles.logo}
            height={60}
            src="/images/logo.png"
            width={60}
          />
        </Link>
        <button
          aria-controls="header-navigation"
          aria-expanded={isOpen}
          aria-label="メニューを開閉"
          className={styles.menuButton}
          onClick={handleMenuToggle}
          type="button"
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
        <nav
          className={`${styles.components} ${isOpen ? styles.componentsOpen : ""}`}
          id="header-navigation"
        >
          <Link className={styles.link} href="/" onClick={handleLinkClick}>
            ホーム
          </Link>
          <Link className={styles.link} href="/about">
            団体概要
          </Link>
          <Link className={styles.link} href="/ccc">
            園イベント共創委員会
          </Link>
          
          <Link className={styles.link} href="/cpic">
            CPIC
          </Link>
          <Link className={styles.link} href="/volunteer">
            ボランティア
          </Link>
          <Link className={styles.link} href="/contact">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
