import { useEffect, useMemo, useState } from "react";

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
  images?: string[]; // <-- plural images
}

export default function ProjectCard({ title, desc, tech, links, result, images }: Props) {
  const hasImages = !!images?.length;

  // Card carousel index
  const [index, setIndex] = useState(0);

  // Lightbox
  const [isOpen, setIsOpen] = useState(false);

  // Clamp index if images change
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

  // Keyboard controls when lightbox open
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
      <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900 hover:border-accent transition">
        {/* Image carousel (click to open lightbox) */}
        {hasImages && (
          <div className="relative mb-4">
            <button
              type="button"
              onClick={open}
              className="block w-full text-left"
              aria-label={`Open ${title} image`}
            >
              <img
                src={currentSrc}
                alt={`${title} screenshot`}
                className="rounded-lg object-cover h-40 w-full"
                loading="lazy"
              />
            </button>

            {images!.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border border-neutral-700 px-2 py-1 rounded text-xs"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 border border-neutral-700 px-2 py-1 rounded text-xs"
                  aria-label="Next image"
                >
                  ›
                </button>

                {/* little dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images!.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === index ? "bg-white/80" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">{title}</h3>

          {result && (
            <span className="text-xs px-2 py-1 rounded-md border border-neutral-700 text-neutral-300 whitespace-nowrap">
              {result}
            </span>
          )}
        </div>

        <p className="text-neutral-400 mt-2">{desc}</p>

        <p className="text-xs text-neutral-500 mt-3">{tech.join(" · ")}</p>

        <div className="mt-4 flex gap-4 flex-wrap">
          {links.map((l) => (
            <a
              key={`${title}-${l.label}`}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm inline-block"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && hasImages && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSrc}
              alt={`${title} screenshot expanded`}
              className="w-full max-h-[80vh] object-contain rounded-xl border border-neutral-700 bg-neutral-950"
            />

            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-3 -right-3 bg-neutral-900 border border-neutral-700 rounded-full w-9 h-9 flex items-center justify-center text-sm"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Prev/Next in modal */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border border-neutral-700 px-3 py-2 rounded"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 border border-neutral-700 px-3 py-2 rounded"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="mt-3 text-center text-xs text-neutral-300">
                {index + 1} / {images.length} (use ← → keys)
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
