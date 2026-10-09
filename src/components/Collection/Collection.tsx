import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Collection.module.css";

// Temporary remote placeholder — replace with local file (see report).
const COLLECTION_IMAGE =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1800&auto=format&fit=crop";

export default function Collection() {
  return (
    <section id="collection" className={styles.collection} aria-labelledby="collection-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow rise rise-1">The Collection</p>
          <h2 id="collection-heading" className={`${styles.heading} rise rise-2`}>
            Not a hotel room.
            <br />
            Not a holiday apartment.
            <br />
            <em>Your own private villa in Shirdi.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            A limited collection of fifty Balinese-inspired villas, each standing
            on its own parcel of owned land — conceived for privacy, quiet
            retreat and enduring value in the heart of Shirdi Central.
          </p>
          <Link href="#villas" className={`text-link rise rise-4`}>
            Explore the Villas
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <figure className={`${styles.figure} rise rise-2`}>
          <Image
            src={COLLECTION_IMAGE}
            alt="Balinese-inspired private villa with stone facade, timber detailing and tropical planting beside a still pool"
            width={1200}
            height={1500}
            sizes="(max-width: 900px) 100vw, 42vw"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <span>Villa Exterior · Courtyard Wing</span>
            <span aria-hidden="true">—</span>
            <span>Shirdi Central</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
