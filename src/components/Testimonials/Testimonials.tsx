"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

import "swiper/css";

function formatCount(n: number) {
  return String(n).padStart(2, "0");
}

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(1);

  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow rise rise-1">Ownership Experiences</p>
          <h2 id="testimonials-heading" className={`${styles.heading} rise rise-2`}>
            Designed around
            <br />
            <em>the owner experience.</em>
          </h2>
          <p className={`lead ${styles.lead} rise rise-3`}>
            Illustrative impressions of life at the retreat — to be
            replaced with verified owner words.
          </p>
        </div>

        <div className={`${styles.slider} rise rise-3`}>
          <span className={styles.mark} aria-hidden="true">
            &ldquo;
          </span>
          <Swiper
            modules={[Keyboard, Navigation]}
            keyboard={{ enabled: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation === "object"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            onSlideChange={(swiper: SwiperType) =>
              setActive(swiper.realIndex + 1)
            }
            spaceBetween={32}
            slidesPerView={1}
            speed={600}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className={styles.slide}>
                <figure className={styles.figure}>
                  <blockquote className={styles.quote}>
                    {item.quote}
                  </blockquote>
                  <figcaption className={styles.person}>
                    <span className={styles.name}>{item.name}</span>
                    {item.role && (
                      <span className={styles.role}>{item.role}</span>
                    )}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.controls}>
            <p className={styles.counter} aria-live="polite">
              <span>{formatCount(active)}</span>
              <span aria-hidden="true" className={styles.slash}>
                {" / "}
              </span>
              <span>{formatCount(testimonials.length)}</span>
            </p>
            <div className={styles.arrows}>
              <button
                ref={prevRef}
                type="button"
                className={styles.arrow}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                ref={nextRef}
                type="button"
                className={styles.arrow}
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
