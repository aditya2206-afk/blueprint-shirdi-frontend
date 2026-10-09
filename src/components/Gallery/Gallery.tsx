"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { galleryImages } from "@/data/gallery";
import styles from "./Gallery.module.css";

import "swiper/css";

function formatCount(n: number) {
  return String(n).padStart(2, "0");
}

export default function Gallery() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(1);

  return (
    <section
      id="gallery"
      className={styles.gallery}
      aria-labelledby="gallery-heading"
      aria-roledescription="carousel"
    >
      <div className="container">
        <div className={styles.head}>
          <div className={styles.headText}>
            <p className="eyebrow rise rise-1">Gallery</p>
            <h2 id="gallery-heading" className={`${styles.heading} rise rise-2`}>
              Moments of
              <br />
              <em>serenity.</em>
            </h2>
            <p className={`lead ${styles.lead} rise rise-3`}>
              A glimpse into the retreat — exteriors, water, interiors
              and forest, held in warm natural light.
            </p>
          </div>

          <div className={`${styles.controls} rise rise-3`}>
            <p className={styles.counter} aria-live="polite">
              <span>{formatCount(active)}</span>
              <span aria-hidden="true" className={styles.slash}>
                {" / "}
              </span>
              <span>{formatCount(galleryImages.length)}</span>
            </p>
            <div className={styles.arrows}>
              <button
                ref={prevRef}
                type="button"
                className={styles.arrow}
                aria-label="Previous gallery image"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                ref={nextRef}
                type="button"
                className={styles.arrow}
                aria-label="Next gallery image"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider} rise rise-3`}>
        <Swiper
          modules={[Keyboard, Navigation]}
          keyboard={{ enabled: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            // Bind custom arrow refs before Swiper initialises navigation.
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
          spaceBetween={24}
          slidesPerView={1.08}
          breakpoints={{
            700: { slidesPerView: 1.55, spaceBetween: 28 },
            1100: { slidesPerView: 2.2, spaceBetween: 32 },
          }}
          speed={650}
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.src} className={styles.slide}>
              <figure className={styles.figure}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 700px) 92vw, (max-width: 1100px) 64vw, 44vw"
                  className={styles.image}
                />
                <figcaption className={styles.caption}>
                  {image.caption}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
