import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Developer.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/developer/developer.jpg
const DEVELOPER_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop";

export default function Developer() {
  return (
    <section className={styles.developer} aria-labelledby="developer-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">The Developer</p>
          <h2 id="developer-heading" className={`${styles.heading} rise rise-2`}>
            A vision
            <br />
            <em>backed by trust.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Blueprint is shaping a considered address in Shirdi
            Central — architecture, landscape and hospitality held to
            one quiet standard: places that endure, and teams that
            stay accountable long after handover.
          </p>
          <p className={`${styles.note} rise rise-3`}>
            Blueprint Shirdi · Shirdi Central, Maharashtra
          </p>
          <Link href="#contact" className={`text-link rise rise-4`}>
            About the Developer
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={DEVELOPER_IMAGE}
            alt="Modern architectural facade in warm stone and glass, representing the developer's considered design approach"
            width={1400}
            height={1600}
            sizes="(max-width: 960px) 100vw, 44vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Blueprint · Design Ethos</span>
            <span aria-hidden="true">—</span>
            <span>Built to Endure</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
