import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const EXPLORE_LINKS = [
  { label: "The Collection", href: "#collection" },
  { label: "Villas", href: "#villas" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
];

const VISIT_LINKS = [
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Back to Top", href: "#top" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="#top" className={styles.brandRow} aria-label="Blueprint Shirdi — back to top">
              <span className={styles.mark} aria-hidden="true">
                B
              </span>
              <span className={styles.brandText}>
                <span className={styles.brandName}>Blueprint Shirdi</span>
                <span className={styles.brandSub}>Shirdi Central · Private Villas</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              A limited collection of private villas in the heart of
              Shirdi — held quietly, by invitation only.
            </p>
            <Link href="#contact" className={styles.invite}>
              Request an Invitation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <div className={styles.col}>
              <h2 className={styles.colTitle}>Explore</h2>
              <ul className={styles.list}>
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <h2 className={styles.colTitle}>Visit</h2>
              <ul className={styles.list}>
                {VISIT_LINKS.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Blueprint Shirdi. All rights reserved.</p>
          <ul className={styles.legal}>
            <li>
              <Link href="#top">Privacy Policy</Link>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <Link href="#top">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
