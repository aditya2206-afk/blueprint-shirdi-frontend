import Image from "next/image";
import styles from "./ProjectPromise.module.css";

// Temporary remote placeholder — replace with local file:
// public/images/promise/project-promise.jpg
const PROMISE_IMAGE =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2400&auto=format&fit=crop";

export default function ProjectPromise() {
  return (
    <section className={styles.promise} aria-labelledby="promise-heading">
      <div className={styles.media} aria-hidden="true">
        <Image
          src={PROMISE_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow eyebrow--light rise rise-1`}>Our Promise</p>
        <h2 id="promise-heading" className={`${styles.heading} rise rise-2`}>
          A legacy of
          <br />
          <em>peace and prosperity.</em>
        </h2>
        <p className={`${styles.lead} rise rise-3`}>
          Thoughtful design, living greenery and genuine privacy —
          homes composed for peaceful living and cared for with
          long-term quality in every material, path and quiet corner.
        </p>
        <div className={`${styles.meta} rise rise-4`} aria-label="Promise qualities">
          <span>Thoughtful Design</span>
          <span aria-hidden="true" className={styles.dot}>
            ·
          </span>
          <span>Living Nature</span>
          <span aria-hidden="true" className={styles.dot}>
            ·
          </span>
          <span>Enduring Quality</span>
        </div>
      </div>
    </section>
  );
}
