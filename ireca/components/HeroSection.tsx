import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/Hero.PNG"
        alt="Ireca en su estudio con un lienzo"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Degradado inferior, para legibilidad del texto sobre la imagen */}
      <div className="absolute inset-x-0 bottom-0 h-52 md:h-72 bg-linear-to-t from-[#001D2F]/55 to-transparent pointer-events-none" />

      {/* Texto:
            móvil  → centrado, fondo de pantalla
            desktop → derecha, esquina inferior derecha */}
      <div className="absolute bottom-15 left-6 right-6 text-center md:left-auto md:right-14 md:bottom-14 md:text-right">
        <h1
          className="leading-none text-[#FFF9F2]"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(4rem, 14vw, 11rem)",
            textShadow: "0 2px 16px rgba(0,29,47,0.5), 0 1px 4px rgba(0,29,47,0.85)",
          }}
        >
          ireca
        </h1>
        <p
          className="mt-1 tracking-widest uppercase text-[#FFF9F2]"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(0.85rem, 4vw, 5rem)",
            fontWeight: 500,
            textShadow: "0 2px 12px rgba(0,29,47,0.5), 0 1px 3px rgba(0,29,47,0.85)",
          }}
        >
          Artista Visual
        </p>
      </div>
    </section>
  );
}
