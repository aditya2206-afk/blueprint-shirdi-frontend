import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hospitalityServices } from "@/data/hospitalityServices";
import styles from "./ManagedHospitality.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/hospitality/managed-hospitality.jpg
const MANAGED_HOSPITALITY_IMAGE =
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop";

export default function ManagedHospitality() {
  return (
    <section
      id="hospitality"
      className={styles.hospitality}
      aria-labelledby="hospitality-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">Hassle-Free Ownership</p>
          <h2 id="hospitality-heading" className={`${styles.heading} rise rise-2`}>
            Professionally managed.
            <br />
            <em>Personally yours.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Enjoy your villa without carrying its everyday details. A
            dedicated hospitality team looks after reservations,
            readiness and care — so every arrival feels effortless,
            whether it is yours or your guests&apos;.
          </p>
          <ul
            className={`${styles.services} rise rise-3`}
            aria-label="Managed hospitality services"
          >
            {hospitalityServices.map(({ title, icon: Icon }, i) => (
              <li
                key={title}
                className={`${styles.service} rise rise-${Math.min(i % 4) + 1}`}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                {title}
              </li>
            ))}
          </ul>
          <Link href="#ownership-process" className={`text-link rise rise-4`}>
            How Ownership Works
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={MANAGED_HOSPITALITY_IMAGE}
            alt="Elegant villa bedroom in warm neutral tones, freshly prepared with crisp linen and soft morning light"
            width={1400}
            height={1700}
            sizes="(max-width: 960px) 100vw, 42vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Guest Suite · Prepared for Arrival</span>
            <span aria-hidden="true">—</span>
            <span>Cared for, Quietly</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
