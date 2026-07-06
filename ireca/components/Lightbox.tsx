"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Artwork = {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
};

type LightboxContextValue = {
  open: (artwork: Artwork) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within a LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const close = useCallback(() => setArtwork(null), []);

  useEffect(() => {
    if (!artwork) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [artwork, close]);

  return (
    <LightboxContext.Provider value={{ open: setArtwork }}>
      {children}

      {artwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#001D2F]/92 backdrop-blur-sm px-4 py-10 md:px-12 md:py-16"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={artwork.alt}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 min-h-0 flex items-center justify-center">
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                sizes="90vw"
                className="w-auto h-auto max-w-full object-contain"
                style={{ maxHeight: "78vh" }}
              />
            </div>

            <div className="md:w-64 shrink-0 flex flex-col gap-3">
              <p
                className="italic text-white"
                style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 700 }}
              >
                {artwork.alt}
              </p>
              {artwork.description && (
                <p
                  className="leading-[1.8] text-white/65"
                  style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)", fontWeight: 300 }}
                >
                  {artwork.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
