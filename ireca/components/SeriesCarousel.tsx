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
  /** Si se indica, avanza una foto sola cada X ms (bucle) */
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

  const perPage = Math.min(perPageProp ?? autoPerPage, images.length) || 1;
  const canSlide = images.length > perPage;

  // Ventana deslizante en bucle (efecto cinta): siempre se ven exactamente `perPage` fotos,
  // avanzando de una en una, sin que la última tanda quede incompleta.
  const [start, setStart] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setStart((s) => s % images.length);
  }, [images.length]);

  const prev = () => setStart(s => (s - 1 + images.length) % images.length);
  const next = () => setStart(s => (s + 1) % images.length);

  useEffect(() => {
    if (!autoAdvanceMs || !canSlide) return;
    const id = setInterval(next, autoAdvanceMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoAdvanceMs, canSlide, images.length]);

  const visible = Array.from({ length: perPage }, (_, i) => images[(start + i) % images.length]);

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
      <div className={`relative h-[46vh] flex items-center ${canSlide ? "px-16 md:px-20" : ""}`}>
        {canSlide && (
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
          {visible.map(({ src, alt, width, height }, i) => (
            <div
              key={`${src}-${i}`}
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

        {canSlide && (
          <button onClick={next} aria-label="Siguiente" className={`${arrowButtonClass} right-1 md:right-3`}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* Indicadores píldora — uno por foto, marca cuál encabeza la ventana visible */}
      {canSlide && (
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap px-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setStart(i)}
              aria-label={`Ir a ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === start
                  ? "w-8 bg-[#001D2F]"
                  : "w-3 bg-[#001D2F]/25 hover:bg-[#001D2F]/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
