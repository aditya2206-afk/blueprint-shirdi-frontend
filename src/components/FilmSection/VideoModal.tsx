"use client";

import { useEffect, useRef, useState } from "react";
import { Clapperboard, X } from "lucide-react";
import styles from "./FilmSection.module.css";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ open, onClose, videoSrc }: VideoModalProps) {
  const [videoExists, setVideoExists] = useState<boolean | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Body scroll lock + Escape to close while the dialog is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Move focus to the close button when the dialog opens.
  useEffect(() => {
    if (open && !wasOpen.current) closeRef.current?.focus();
    wasOpen.current = open;
  }, [open ]);

  // Probe for the video file so we never render a broken player.
  useEffect(() => {
    if (!open) return;
    setVideoExists(null);
    let cancelled = false;
    fetch(videoSrc, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setVideoExists(res.ok);
      })
      .catch(() => {
        if (!cancelled) setVideoExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, [open, videoSrc]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Blueprint Shirdi project film"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.dialog}>
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {videoExists === null && (
          <p className={styles.modalNote} role="status">
            Preparing the film…
          </p>
        )}

        {videoExists === true && (
          <video
            key={videoSrc}
            className={styles.video}
            src={videoSrc}
            controls
            autoPlay
            playsInline
            preload="metadata"
          >
            Sorry, your browser does not support embedded video.
          </video>
        )}

        {videoExists === false && (
          <div className={styles.fallback}>
            <Clapperboard size={30} aria-hidden="true" />
            <p className={styles.fallbackTitle}>Project film coming soon.</p>
            <p className={styles.fallbackText}>
              The sanctuary film is in final production. Place the finished
              file at <code>public/videos/blueprint-film.mp4</code> and it will
              play here automatically.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
