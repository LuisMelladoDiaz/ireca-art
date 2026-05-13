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

      {/* Gradiente inferior — solo móvil, para legibilidad del texto */}
      <div className="md:hidden absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-[#FFF9F2]/75 to-transparent pointer-events-none" />

      {/* Texto:
            móvil  → centrado, fondo de pantalla
            desktop → derecha, esquina inferior derecha */}
      <div className="absolute bottom-8 left-6 right-6 text-center md:left-auto md:right-14 md:bottom-14 md:text-right">
        <h1
          className="leading-none text-[#001D2F]"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(4rem, 14vw, 11rem)",
          }}
        >
          ireca
        </h1>
        <p
          className="mt-1 tracking-widest uppercase text-[#001D2F]"
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
