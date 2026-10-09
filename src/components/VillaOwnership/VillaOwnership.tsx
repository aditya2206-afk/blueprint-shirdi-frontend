import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, MoonStar, Sparkles, LandPlot } from "lucide-react";
import styles from "./VillaOwnership.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/villas/villa-ownership.jpg
const VILLA_OWNERSHIP_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop";

const OWNERSHIP_POINTS = [
  { icon: Home, label: "Private Villa" },
  { icon: MoonStar, label: "Personal Stay" },
  { icon: Sparkles, label: "Managed Hospitality" },
  { icon: LandPlot, label: "Long-Term Ownership" },
];

export default function VillaOwnership() {
  return (
    <section id="villas" className={styles.villas} aria-labelledby="villas-heading">
      <div className={`container ${styles.grid}`}>
        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={VILLA_OWNERSHIP_IMAGE}
            alt="Private luxury villa living space with warm wood, large glazing and a landscaped outdoor view at dusk"
            width={1400}
            height={1700}
            sizes="(max-width: 960px) 100vw, 42vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Private Villa · Evening Light</span>
            <span aria-hidden="true">—</span>
            <span>Yours, Quietly</span>
          </figcaption>
        </figure>

        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">Own a Private Villa</p>
          <h2 id="villas-heading" className={`${styles.heading} rise rise-2`}>
            A villa to
            <br />
            <em>call your own.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Not a room booked for a night, but a private villa held in
            your name — a quiet personal retreat with room to breathe,
            supported by optional managed hospitality whenever you are
            away.
          </p>
          <ul className={`${styles.points} rise rise-3`} aria-label="What villa ownership includes">
            {OWNERSHIP_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className={styles.point}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={17} strokeWidth={1.75} />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <Link href="#contact" className={`text-link rise rise-4`}>
            Explore Ownership
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
