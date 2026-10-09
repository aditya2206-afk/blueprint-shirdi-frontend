import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ownershipSteps } from "@/data/ownershipSteps";
import styles from "./OwnershipProcess.module.css";

export default function OwnershipProcess() {
  return (
    <section
      id="ownership-process"
      className={styles.process}
      aria-labelledby="ownership-process-heading"
    >
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow rise rise-1">Your Journey to Ownership</p>
          <h2
            id="ownership-process-heading"
            className={`${styles.heading} rise rise-2`}
          >
            A simple,
            <br />
            <em>transparent process.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            From first visit to long-term ownership — eight clear
            steps, guided throughout by the Blueprint Shirdi team.
          </p>
        </div>

        <ol className={`${styles.timeline} rise rise-3`}>
          {ownershipSteps.map((step, i) => (
            <li
              key={step.number}
              className={`${styles.step} rise rise-${Math.min((i % 4) + 1, 4)}`}
            >
              <span className={styles.number} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link href="#contact" className={`text-link rise rise-4`}>
          Begin Your Journey
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
