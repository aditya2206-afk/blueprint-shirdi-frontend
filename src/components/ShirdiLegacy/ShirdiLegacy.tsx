import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ShirdiLegacy.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/shirdi/shirdi-legacy.jpg
const SHIRDI_LEGACY_IMAGE =
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop";

export default function ShirdiLegacy() {
  return (
    <section
      className={styles.legacy}
      aria-labelledby="shirdi-legacy-heading"
    >
      <div className={`container ${styles.grid}`}>
        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={SHIRDI_LEGACY_IMAGE}
            alt="Warm golden temple tower in soft morning light, representing Shirdi as a timeless spiritual destination"
            width={1400}
            height={1700}
            sizes="(max-width: 960px) 100vw, 46vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Shirdi · Temple Precinct</span>
            <span aria-hidden="true">—</span>
            <span>Faith, Held Quietly</span>
          </figcaption>
        </figure>

        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">Shirdi · A Timeless Destination</p>
          <h2 id="shirdi-legacy-heading" className={`${styles.heading} rise rise-2`}>
            A place of
            <br />
            faith, legacy
            <br />
            <em>and belonging.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Shirdi welcomes visitors in every season — drawn by devotion,
            memory and a sense of return. Its identity is settled, its
            rhythm calm, and its relevance carried quietly from one
            generation to the next.
          </p>
          <div className={`${styles.meta} rise rise-3`} aria-label="About Shirdi">
            <span>Year-round pilgrimage</span>
            <span aria-hidden="true" className={styles.dot}>
              ·
            </span>
            <span>Established cultural identity</span>
          </div>
          <Link href="#villas" className={`text-link rise rise-4`}>
            Explore Shirdi
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
