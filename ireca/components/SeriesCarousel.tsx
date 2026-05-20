"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

interface SeriesCarouselProps {
  images: CarouselImage[];
  perPage?: number;
}

export default function SeriesCarousel({ images, perPage = 2 }: SeriesCarouselProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / perPage);
  const visible = images.slice(page * perPage, page * perPage + perPage);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(totalPages - 1, p + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="w-full">
      {/* Imágenes */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${perPage}, 1fr)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visible.map(({ src, alt }) => (
          <div key={src} className="relative aspect-[4/3] bg-[#e8e4dc]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes={`(max-width: 768px) 100vw, ${Math.round(100 / perPage)}vw`}
            />
          </div>
        ))}
        {visible.length < perPage && <div className="aspect-[4/3]" />}
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between mt-6">

        <button
          onClick={prev}
          disabled={page === 0}
          aria-label="Anterior"
          className="p-2 text-[#001D2F]/35 hover:text-[#001D2F] disabled:opacity-20 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Indicadores píldora */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Ir a ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === page
                  ? "w-8 bg-[#001D2F]"
                  : "w-3 bg-[#001D2F]/25 hover:bg-[#001D2F]/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={page === totalPages - 1}
          aria-label="Siguiente"
          className="p-2 text-[#001D2F]/35 hover:text-[#001D2F] disabled:opacity-20 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

      </div>
    </div>
  );
}