"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Artwork = {
  src: string;
  alt: string;
  width: number;
  height: number;
  medium?: string;
  dimensions?: string;
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#001D2F]/95 p-4 md:p-10"
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
            className="max-w-[95vw] max-h-[85vh] flex flex-col md:flex-row items-end gap-2 md:gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={artwork.src}
              alt={artwork.alt}
              width={artwork.width}
              height={artwork.height}
              sizes="(max-width: 768px) 95vw, 85vw"
              className="w-auto h-auto max-w-[95vw] md:max-w-[85vw] max-h-[75vh] md:max-h-[85vh] object-contain"
            />

            {(artwork.medium || artwork.dimensions) && (
              <div className="text-right shrink-0">
                <p
                  className="uppercase text-white"
                  style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em" }}
                >
                  {artwork.alt}
                </p>
                {artwork.medium && (
                  <p
                    className="text-white/75"
                    style={{ fontFamily: "var(--font-barlow)", fontSize: "0.75rem" }}
                  >
                    {artwork.medium}
                  </p>
                )}
                {artwork.dimensions && (
                  <p
                    className="text-white/75"
                    style={{ fontFamily: "var(--font-barlow)", fontSize: "0.75rem" }}
                  >
                    {artwork.dimensions}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
