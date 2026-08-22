import Image from "next/image";
import type { CSSProperties } from "react";

// Desplazamiento vertical de la imagen en pantallas anchas (lg+: portátil/monitor).
// 50% = centrado. Menos de 50% sube el encuadre, más de 50% lo baja.
const HERO_DESKTOP_OFFSET_Y = "10%";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Móvil y tablet */}
      <Image
        src="/images/Hero.PNG"
        alt="Imagen de fondo de la sección principal"
        fill
        className="object-cover object-center lg:hidden"
        priority
        sizes="100vw"
      />
      {/* Portátil y monitor de escritorio */}
      <Image
        src="/images/Hero.png"
        alt="Imagen de fondo de la sección principal"
        fill
        className="hidden object-cover lg:block lg:object-[center_var(--hero-offset-y)]"
        style={{ "--hero-offset-y": HERO_DESKTOP_OFFSET_Y } as CSSProperties}
        priority
        sizes="100vw"
      />

      {/* Degradado inferior, para legibilidad del texto sobre la imagen */}
      <div className="absolute inset-x-0 bottom-0 h-52 lg:h-72 bg-linear-to-t from-[#001D2F]/55 lg:from-[#FFF9F2]/70 to-transparent pointer-events-none" />

      {/* Texto:
            móvil/tablet → centrado, fondo de pantalla, texto claro
            portátil/monitor → derecha, esquina inferior derecha, texto oscuro */}
      <div className="absolute bottom-15 left-6 right-6 text-center lg:left-auto lg:right-14 lg:bottom-14 lg:text-right">
        <h1
          className="leading-none text-[#FFF9F2] [text-shadow:0_2px_16px_rgba(0,29,47,0.5),0_1px_4px_rgba(0,29,47,0.85)] lg:text-[#001D2F] lg:[text-shadow:none]"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(4rem, 14vw, 11rem)",
          }}
        >
          ireca
        </h1>
        <p
          className="mt-1 tracking-widest uppercase text-[#FFF9F2] [text-shadow:0_2px_12px_rgba(0,29,47,0.5),0_1px_3px_rgba(0,29,47,0.85)] lg:text-[#001D2F] lg:[text-shadow:none]"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(0.85rem, 4vw, 5rem)",
            fontWeight: 500,
          }}
        >
          Artista Visual
        </p>
      </div>
    </section>
  );
}
