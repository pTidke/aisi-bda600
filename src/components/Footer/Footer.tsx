import Link from "next/link";
import { Youtube, Github } from "lucide-react";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Data Processing", href: "/data-processing" },
  { label: "Analysis", href: "/analysis" },
  { label: "SWOT Analysis", href: "/swot" },
  { label: "Our Team", href: "/team" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>
              Who's got <span className={styles.highlight}>AI?</span>
            </span>
          </Link>
          <p className={styles.tagline}>
            Mapping the global frontier of artificial intelligence through
            data-driven analysis.
          </p>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} AISI Project. All rights reserved.
          </p>

          <div className={styles.socials}>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
