import { useEffect, useMemo, useState } from "react";
import "../styles/ProjectCard.css";

type ProjectLink = {
  label: string;
  href: string;
};

interface Props {
  title: string;
  desc: string;
  tech: string[];
  links: ProjectLink[];
  result?: string;
  images?: string[];
  // Optional if you want separate tags from tech:
  // tags?: string[];
}

export default function ProjectCard({ title, desc, tech, links, result, images }: Props) {
  const hasImages = !!images?.length;

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!images?.length) return;
    if (index >= images.length) setIndex(0);
  }, [images, index]);

  const currentSrc = useMemo(() => {
    if (!images?.length) return "";
    return images[index] ?? images[0];
  }, [images, index]);

  const next = () => {
    if (!images?.length) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    if (!images?.length) return;
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const open = () => {
    if (!images?.length) return;
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images]);

  return (
    <>
      <article className="pc-card">
        {/* Result badge row */}
        <div className="pc-top">
          <div className="pc-topSpacer" />
          {result && <span className="pc-result">{result}</span>}
        </div>

        {/* Image */}
        {hasImages && (
          <div className="pc-media">
            <button
              type="button"
              onClick={open}
              className="pc-mediaBtn"
              aria-label={`Open ${title} image`}
            >
              <img
                src={currentSrc}
                alt={`${title} screenshot`}
                className="pc-image"
                loading="lazy"
              />
            </button>

            {images!.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="pc-nav pc-navLeft"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="pc-nav pc-navRight"
                  aria-label="Next image"
                >
                  ›
                </button>

                <div className="pc-dots" aria-hidden="true">
                  {images!.map((_, i) => (
                    <span key={i} className={`pc-dot ${i === index ? "isActive" : ""}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Title (full width) */}
        <h3 className="pc-title">{title}</h3>

        {/* Tags row (using tech as chips) */}
        <div className="pc-tags">
          {tech.slice(0, 6).map((t) => (
            <span key={t} className="pc-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="pc-desc">{desc}</p>

        {/* Links */}
        <div className="pc-links">
          {links.map((l) => (
            <a
              key={`${title}-${l.label}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-link"
            >
              {l.label} <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </article>

      {/* Lightbox */}
      {isOpen && hasImages && (
        <div
          className="pc-modalOverlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
        >
          <div className="pc-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentSrc}
              alt={`${title} screenshot expanded`}
              className="pc-modalImage"
            />

            <button type="button" onClick={close} className="pc-close" aria-label="Close">
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="pc-modalNav pc-modalNavLeft"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="pc-modalNav pc-modalNavRight"
                  aria-label="Next image"
                >
                  ›
                </button>

                <div className="pc-counter">
                  {index + 1} / {images.length} (use ← → keys)
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}