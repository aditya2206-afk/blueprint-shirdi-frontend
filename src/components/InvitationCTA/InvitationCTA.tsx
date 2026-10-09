import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./InvitationCTA.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/cta/invitation-cta.jpg
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2400&auto=format&fit=crop";

export default function InvitationCTA() {
  return (
    <section className={styles.cta} aria-labelledby="invitation-heading">
      <div className={styles.media} aria-hidden="true">
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow eyebrow--light rise rise-1`}>
          An Exclusive Opportunity
        </p>
        <h2 id="invitation-heading" className={`${styles.heading} rise rise-2`}>
          A private address
          <br />
          <em>in the heart of Shirdi.</em>
        </h2>
        <p className={`${styles.lead} rise rise-3`}>
          Fifty villas. One sanctuary. Request an invitation to learn
          more about private ownership at Blueprint Shirdi.
        </p>
        <div className={`${styles.actions} rise rise-4`}>
          <Link href="#contact" className="btn btn--light">
            Request an Invitation
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
