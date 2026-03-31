"use client";

import { useState } from "react";
import Link from "next/link";

import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
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
        </nav>
      </div>
    </header>
  );
}
