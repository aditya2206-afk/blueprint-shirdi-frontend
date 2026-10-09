import Image from "next/image";
import { amenities } from "@/data/amenities";
import styles from "./Amenities.module.css";

export default function Amenities() {
  return (
    <section
      id="amenities"
      className={styles.amenities}
      aria-labelledby="amenities-heading"
    >
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow rise rise-1">Lifestyle &amp; Wellness</p>
          <h2 id="amenities-heading" className={`${styles.heading} rise rise-2`}>
            Amenities for
            <br />
            <em>a fulfilling life.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Ten quiet places to spend the day — water, forest, practice
            and rest, all within a short walk of your villa.
          </p>
        </div>

        <ul className={styles.grid} aria-label="Villa amenities">
          {amenities.map((amenity, i) => (
            <li
              key={amenity.number}
              className={`${styles.item} rise rise-${Math.min((i % 4) + 1, 4)}`}
            >
              <div className={styles.media}>
                <Image
                  src={amenity.image}
                  alt={amenity.alt}
                  width={900}
                  height={675}
                  sizes="(max-width: 640px) 92vw, (max-width: 1100px) 44vw, 22vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.meta}>
                <span className={styles.number} aria-hidden="true">
                  {amenity.number}
                </span>
                <h3 className={styles.title}>{amenity.title}</h3>
              </div>
              {amenity.description && (
                <p className={styles.description}>{amenity.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
