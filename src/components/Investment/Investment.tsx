import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Investment.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/investment/investment-villa.jpg
const INVESTMENT_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop";

const MICRO_FACTS = [
  "Year-Round Destination",
  "Private Ownership",
  "Managed Hospitality",
];

export default function Investment() {
  return (
    <section
      className={styles.investment}
      aria-labelledby="investment-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">
            A Meaningful Ownership Opportunity
          </p>
          <h2 id="investment-heading" className={`${styles.heading} rise rise-2`}>
            More than a retreat.
            <br />
            <em>A lasting address.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Blueprint Shirdi brings together private ownership, an
            established destination and considered hospitality — a villa
            to enjoy personally, held for its long-term value in a place
            that welcomes visitors through every season.
          </p>
          <ul className={`${styles.facts} rise rise-3`} aria-label="Ownership highlights">
            {MICRO_FACTS.map((fact) => (
              <li key={fact} className={styles.fact}>
                <span className={styles.rule} aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
          <Link href="#villas" className={`text-link rise rise-4`}>
            Know More
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={INVESTMENT_IMAGE}
            alt="Warm modern villa facade with timber screens and landscaped planting in soft daylight"
            width={1400}
            height={1600}
            sizes="(max-width: 960px) 100vw, 44vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Villa Facade · Garden Court</span>
            <span aria-hidden="true">—</span>
            <span>Held for the Long Term</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
