"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "@/data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-heading">
      <div className="container-narrow">
        <div className={styles.head}>
          <p className="eyebrow rise rise-1">Questions, Answered</p>
          <h2 id="faq-heading" className={`${styles.heading} rise rise-2`}>
            Everything worth
            <br />
            <em>asking first.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            General guidance on ownership, stays and hospitality. For
            anything specific, the team will respond personally.
          </p>
        </div>

        <div className={`${styles.list} rise rise-3`}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <h3 className={styles.qWrap}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    <span
                      className={styles.icon}
                      aria-hidden="true"
                      data-open={isOpen}
                    >
                      <Plus size={18} strokeWidth={1.75} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.answerWrap}
                  data-open={isOpen}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
