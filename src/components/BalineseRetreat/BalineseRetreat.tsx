import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./BalineseRetreat.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/retreat/balinese-retreat.jpg
const BALINESE_RETREAT_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop";

export default function BalineseRetreat() {
  return (
    <section
      className={styles.retreat}
      aria-labelledby="retreat-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`eyebrow eyebrow--light rise rise-1`}>
            A Balinese Retreat in Shirdi
          </p>
          <h2 id="retreat-heading" className={`${styles.heading} rise rise-2`}>
            Where nature
            <br />
            <em>meets serenity.</em>
          </h2>
          <p className={`${styles.lead} rise rise-3`}>
            Inspired by Balinese living, the architecture opens itself
            to greenery — open pavilions, natural stone and timber,
            shaded courtyards and quiet corners designed for rest,
            reflection and unhurried days.
          </p>
          <div className={`${styles.meta} rise rise-3`} aria-label="Retreat qualities">
            <span>Open Pavilions</span>
            <span aria-hidden="true" className={styles.dot}>
              ·
            </span>
            <span>Natural Materials</span>
            <span aria-hidden="true" className={styles.dot}>
              ·
            </span>
            <span>Private Greens</span>
          </div>
          <Link href="#amenities" className={`${styles.cta} rise rise-4`}>
            Experience the Retreat
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={BALINESE_RETREAT_IMAGE}
            alt="Balinese-inspired villa courtyard with private pool, timber pavilion, stone detailing and lush tropical planting"
            width={1600}
            height={1500}
            sizes="(max-width: 960px) 100vw, 55vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Retreat Courtyard · Pool Pavilion</span>
            <span aria-hidden="true">—</span>
            <span>Designed Around Nature</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
