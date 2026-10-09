import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ownershipComparison } from "@/data/ownershipComparison";
import styles from "./OwnershipComparison.module.css";

export default function OwnershipComparison() {
  return (
    <section
      id="comparison"
      className={styles.comparison}
      aria-labelledby="comparison-heading"
    >
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow rise rise-1">Hotel vs Private Villa Ownership</p>
          <h2 id="comparison-heading" className={`${styles.heading} rise rise-2`}>
            A clearer,
            <br />
            <em>smarter choice.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Two ways to hold a hospitality address — compared side by
            side, in plain terms. Wording reflects typical
            project-dependent structures.
          </p>
        </div>

        {/* Semantic table on desktop; CSS reflows each row into a
            stacked block on mobile — never horizontal scrolling. */}
        <div className={`${styles.tableWrap} rise rise-3`}>
          <table className={styles.table}>
            <caption className={styles.caption}>
              Comparing hotel or suite ownership with private villa
              ownership
            </caption>
            <thead>
              <tr>
                <th scope="col" className={styles.factorHead}>
                  Factor
                </th>
                <th scope="col" className={styles.hotelHead}>
                  Hotel / Suite
                </th>
                <th scope="col" className={styles.villaHead}>
                  Private Villa
                </th>
              </tr>
            </thead>
            <tbody>
              {ownershipComparison.map((row) => (
                <tr key={row.factor} className={styles.row}>
                  <th scope="row" className={styles.factor}>
                    {row.factor}
                  </th>
                  <td className={styles.hotel} data-label="Hotel / Suite">
                    {row.hotel}
                  </td>
                  <td className={styles.villa} data-label="Private Villa">
                    {row.villa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={`${styles.note} rise rise-4`}>
          Ownership, land and resale terms vary with the ownership
          structure and remain subject to project documentation.
        </p>

        <Link href="#ownership-process" className={`text-link rise rise-4`}>
          See the Ownership Journey
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
