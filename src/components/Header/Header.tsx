"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "The Collection", href: "#collection" },
  { label: "The Film", href: "#film" },
  { label: "Villas", href: "#villas" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent over hero -> solid ivory after scrolling past ~40px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  // UX Improvement #1: large touch targets, visible CTA, focus-safe close.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          open ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.inner}>
          <Link href="#top" className={styles.brand} aria-label="Blueprint Shirdi — home">
            <span className={styles.mark} aria-hidden="true">
              B
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Blueprint Shirdi</span>
              <span className={styles.brandSub}>Shirdi Central · Private Villas</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.cta}>
              Request Invitation
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className={styles.menuBtn}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu: full-screen dark overlay, staggered links, enquiry CTA */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className={styles.mobileList}>
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
                className={styles.mobileItem}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  <span className={styles.mobileIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileFoot}>
          <Link
            href="#contact"
            className="btn btn--light"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Request an Invitation
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <p>By invitation only · Shirdi Central, Maharashtra</p>
        </div>
      </div>
    </>
  );
}
