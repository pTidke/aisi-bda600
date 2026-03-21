"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  // { label: "Literature Review", href: "/" },
  { label: "Data Processing", href: "/" },
  { label: "Analysis", href: "/analysis" },
  { label: "SWOT Analysis", href: "/swot" },
  { label: "Our Team", href: "/team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            Who's got <span className={styles.highlight}>AI?</span>
          </span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileOnly}>
            <Link
              href="/"
              className={styles.ctaBtn}
              onClick={() => setMenuOpen(false)}
            >
              <span>Explore AISI</span>
            </Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <Link href="/" className={`${styles.ctaBtn} ${styles.desktopOnly}`}>
            <span>Explore AISI</span>
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
