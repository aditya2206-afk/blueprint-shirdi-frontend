import Image from "next/image";
import { MapPin, Plane, TrainFront, Bus } from "lucide-react";
import styles from "./Location.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/location/location-map.jpg
const LOCATION_IMAGE =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop";

// Development placeholders — confirm travel times before launch.
const CONNECTIVITY = [
  { icon: MapPin, label: "Sai Baba Temple", time: "5 mins" },
  { icon: Plane, label: "Airport", time: "20 mins" },
  { icon: TrainFront, label: "Railway Station", time: "5 mins" },
  { icon: Bus, label: "Bus Stand", time: "7 mins" },
];

export default function Location() {
  return (
    <section id="location" className={styles.location} aria-labelledby="location-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">Location &amp; Connectivity</p>
          <h2 id="location-heading" className={`${styles.heading} rise rise-2`}>
            In the heart
            <br />
            <em>of Shirdi.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Set within Shirdi Central, the retreat sits close to the
            town&apos;s key points — easy to reach, and easy to return
            to, whenever you arrive.
          </p>
          <ul className={`${styles.points} rise rise-3`} aria-label="Connectivity highlights">
            {CONNECTIVITY.map(({ icon: Icon, label, time }) => (
              <li key={label} className={styles.point}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <span className={styles.label}>{label}</span>
                <span className={styles.time}>{time}</span>
              </li>
            ))}
          </ul>
          <p className={`${styles.note} rise rise-4`}>
            Travel times are indicative placeholders, subject to confirmation.
          </p>
        </div>

        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={LOCATION_IMAGE}
            alt="Stylised map view marking the Blueprint Shirdi retreat location in Shirdi Central"
            width={1500}
            height={1300}
            sizes="(max-width: 960px) 100vw, 55vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Shirdi Central · Maharashtra</span>
            <span aria-hidden="true">—</span>
            <span>Close to Everything That Matters</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
