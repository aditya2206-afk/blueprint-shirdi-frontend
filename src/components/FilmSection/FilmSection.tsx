"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import styles from "./FilmSection.module.css";

// Temporary remote poster — replace with /images/film/film-poster.jpg (see report).
const FILM_POSTER =
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2400&auto=format&fit=crop";

export const FILM_VIDEO_SRC = "/videos/blueprint-film.mp4";

export default function FilmSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="film" className={styles.film} aria-labelledby="film-heading">
      <div className="container">
        <div className={`${styles.head} rise rise-1`}>
          <p className="eyebrow">Blueprint Shirdi · The Film</p>
          <h2 id="film-heading" className="h2">
            See the sanctuary <em className={styles.italic}>before you arrive.</em>
          </h2>
        </div>

        <figure className={`${styles.frame} rise rise-2`}>
          <Image
            src={FILM_POSTER}
            alt="Balinese villa courtyard and pool glowing at golden hour, framed by tropical planting"
            width={2200}
            height={1240}
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 92vw, 1380px"
            className={styles.poster}
          />
          <div className={styles.scrim} aria-hidden="true" />
          <figcaption className={styles.controls}>
            <button
              type="button"
              className={styles.play}
              onClick={() => setIsOpen(true)}
              aria-label="Watch the Blueprint Shirdi film"
              aria-haspopup="dialog"
            >
              <Play size={26} aria-hidden="true" />
            </button>
            <p className={styles.watchLabel}>
              <span>Watch the Film</span>
              <span className={styles.duration} aria-hidden="true">
                02:45
              </span>
            </p>
          </figcaption>
        </figure>
      </div>

      <VideoModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        videoSrc={FILM_VIDEO_SRC}
      />
    </section>
  );
}
