"use client";

import { useState, useRef, useEffect } from "react";
import ArtworkImage from "@/components/ArtworkImage";

interface CarouselImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SeriesCarouselProps {
  images: CarouselImage[];
  /** Fijo. Si se omite, se recalcula solo según el ancho de pantalla (1 en móvil, hasta 5 en pantallas muy anchas). */
  perPage?: number;
  /** Si se indica, avanza de página sola cada X ms (bucle) */
  autoAdvanceMs?: number;
}

function responsivePerPage(width: number) {
  if (width >= 1536) return 5;
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function SeriesCarousel({ images, perPage: perPageProp, autoAdvanceMs }: SeriesCarouselProps) {
  const [autoPerPage, setAutoPerPage] = useState(1);

  useEffect(() => {
    if (perPageProp !== undefined) return;
    const update = () => setAutoPerPage(responsivePerPage(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perPageProp]);

  const perPage = perPageProp ?? autoPerPage;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / perPage);
  const visible = images.slice(page * perPage, page * perPage + perPage);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  // Navegación circular: desde la primera página, "anterior" salta a la última (y viceversa).
  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);
  const next = () => setPage(p => (p + 1) % totalPages);

  useEffect(() => {
    if (!autoAdvanceMs || totalPages <= 1) return;
    const id = setInterval(() => {
      setPage(p => (p + 1) % totalPages);
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [autoAdvanceMs, totalPages]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const arrowButtonClass =
    "absolute top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/90 hover:bg-white shadow-md " +
    "text-[#001D2F] transition-all";

  return (
    <div className="w-full">
      {/* Imágenes, todas cuadradas (1:1) — el padding horizontal reserva sitio para que las
          flechas nunca queden encima de una obra */}
      <div className={`relative h-[46vh] flex items-center ${totalPages > 1 ? "px-16 md:px-20" : ""}`}>
        {totalPages > 1 && (
          <button onClick={prev} aria-label="Anterior" className={`${arrowButtonClass} left-1 md:left-3`}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div
          className="flex w-full justify-center items-stretch gap-3"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visible.map(({ src, alt, width, height }) => (
            <div
              key={src}
              className="relative shrink-0 aspect-square"
              style={{
                // Ancho acotado por lo que ocuparía a media pantalla de alto Y por el hueco
                // disponible en la fila (repartido entre las fotos visibles) — lo que sea
                // más estrecho, para que nunca desborde.
                width: `min(46vh, calc((100% - ${(perPage - 1) * 12}px) / ${perPage}))`,
              }}
            >
              <ArtworkImage src={src} alt={alt} width={width} height={height} fill className="object-cover" sizes="46vh" />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <button onClick={next} aria-label="Siguiente" className={`${arrowButtonClass} right-1 md:right-3`}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* Indicadores píldora */}
      <div className="flex items-center justify-center gap-2 mt-6">
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
    </div>
  );
}
