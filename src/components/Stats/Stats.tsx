import { stats } from "@/data/stats";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Project statistics">
      <div className="container">
        <dl className={styles.grid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${styles.item} rise rise-${Math.min(i + 1, 4)}`}
            >
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
