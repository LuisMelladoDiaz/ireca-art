"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/archivo_tinta/Otherwordly/Restaurante.png",    alt: "Restaurante" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_final_1.png", alt: "Escena final 1" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_inicio.png",  alt: "Escena inicio" },
  { src: "/images/archivo_tinta/Otherwordly/Callejon.png",       alt: "Callejón" },
];

function IconPlay() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconPause() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function IconFullscreen() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

function IconExitFullscreen() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
    </svg>
  );
}

export default function SerieOtherworldly() {
  const [playing, setPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const togglePlay = () => setPlaying(p => !p);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  };

  return (
    <>
      {/* Full bleed — Escena final */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/archivo_tinta/Otherwordly/Escena_final_2.png"
          alt="Otherwordly — escena final"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <p
          className="absolute bottom-10 right-6 md:bottom-14 md:right-14 text-right italic text-white/80"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
          }}
        >
          Otherwordly
        </p>
      </section>

      {/* Cuadrícula de obras */}
      <section className="bg-[#FFF9F2] px-6 md:px-14 py-12 md:py-16">
        <div className="columns-1 sm:columns-2 gap-3 space-y-3">
          {images.map(({ src, alt }) => (
            <div key={src} className="break-inside-avoid">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Juego jugable */}
      <section className="bg-[#FFF9F2] px-4 md:px-14 py-12 md:py-16 flex flex-col gap-5">
        <p
          className="italic text-[#001D2F]/50 px-2 md:px-0"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
          }}
        >
          Juega a Otherworldly
        </p>

        {/* Contenedor del player */}
        <div
          ref={containerRef}
          className="relative w-full bg-black"
          style={{ aspectRatio: "1080 / 720" }}
        >
          {/* Juego o portada */}
          {playing ? (
            <iframe
              src="https://html-classic.itch.zone/html/14280624/Otherworldly_web/index.html"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              allow="autoplay; fullscreen *; geolocation; microphone; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
            />
          ) : (
            <Image
              src="/images/archivo_tinta/Otherwordly/Escena_inicio.png"
              alt="Otherworldly — portada"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          )}

          {/* Barra de controles estilo reproductor */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-linear-to-t from-black/65 to-transparent">
            {/* Play / Pause-Cerrar */}
            <button
              onClick={togglePlay}
              aria-label={playing ? "Cerrar juego" : "Jugar"}
              className="text-white/75 hover:text-white transition-colors"
            >
              {playing ? <IconPause /> : <IconPlay />}
            </button>

            <div className="flex-1" />

            {/* Pantalla completa / salir */}
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              className="text-white/75 hover:text-white transition-colors"
            >
              {isFullscreen ? <IconExitFullscreen /> : <IconFullscreen />}
            </button>
          </div>
        </div>
      </section>

      {/* Full bleed — Menu */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/archivo_tinta/Otherwordly/Menu.PNG"
          alt="Otherwordly — portada"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      
    </>
  );
}
