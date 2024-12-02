"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./NavMenu.module.css";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="finalLogo.svg"
            alt="My Portfolio Logo"
            width={200}
            height={50}
          />
        </Link>
      </div>
      <ul className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
