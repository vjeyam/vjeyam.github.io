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
      <div className="project-card">
        {/* Image carousel */}
        {hasImages && (
          <div className="project-media">
            <button
              type="button"
              onClick={open}
              className="project-mediaButton"
              aria-label={`Open ${title} image`}
            >
              <img
                src={currentSrc}
                alt={`${title} screenshot`}
                className="project-image"
                loading="lazy"
              />
            </button>

            {images!.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="project-nav project-navLeft"
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={next}
                  className="project-nav project-navRight"
                  aria-label="Next image"
                >
                  ›
                </button>

                <div className="project-dots" aria-hidden="true">
                  {images!.map((_, i) => (
                    <span
                      key={i}
                      className={`project-dot ${i === index ? "isActive" : ""}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="project-topRow">
          <h3 className="project-title">{title}</h3>

          {result && <span className="project-badge">{result}</span>}
        </div>

        <p className="project-desc">{desc}</p>

        <p className="project-tech">{tech.join(" · ")}</p>

        <div className="project-links">
          {links.map((l) => (
            <a
              key={`${title}-${l.label}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {l.label} <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && hasImages && (
        <div
          className="project-modalOverlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentSrc}
              alt={`${title} screenshot expanded`}
              className="project-modalImage"
            />

            <button
              type="button"
              onClick={close}
              className="project-close"
              aria-label="Close"
            >
              ✕
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="project-modalNav project-modalNavLeft"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="project-modalNav project-modalNavRight"
                  aria-label="Next image"
                >
                  ›
                </button>

                <div className="project-counter">
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