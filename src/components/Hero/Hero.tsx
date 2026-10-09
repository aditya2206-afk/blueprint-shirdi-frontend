import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Blueprint Shirdi introduction">
      {/* Background: swap this remote placeholder with /images/hero/villa-dusk.jpg */}
      <div className={styles.media} aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
        <div className={styles.grain} />
      </div>

      <div className={styles.content}>
        <p className={`eyebrow eyebrow--light ${styles.eyebrow} rise rise-1`}>
          Blueprint Shirdi · Shirdi Central
        </p>
        <h1 className={`${styles.title} rise rise-2`}>
          Your Villa.
          <br />
          <em>Your Land.</em>
        </h1>
        <p className={`${styles.sub} rise rise-3`}>
          A limited private collection of Balinese-inspired villas in Shirdi —
          set within an eleven-acre sanctuary of gardens, water and silence.
        </p>
        <div className={`${styles.ctaRow} rise rise-4`}>
          <Link href="#contact" className="btn btn--light">
            Request an Invitation
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link href="#collection" className="btn btn--outline-light">
            Explore the Collection
          </Link>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.meta}>
          <span>50 Private Owners</span>
          <span aria-hidden="true">·</span>
          <span>11-Acre Sanctuary</span>
          <span aria-hidden="true">·</span>
          <span>By Invitation Only</span>
        </p>
        <a href="#collection" className={styles.scroll} aria-label="Scroll to the collection">
          <ArrowDown size={16} aria-hidden="true" />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
}
