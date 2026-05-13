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

      {/* Bottom-right text overlay */}
      <div className="absolute bottom-10 right-10 md:bottom-14 md:right-14 text-right">
        <h1
          className="leading-none text-[#001D2F]"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(5rem, 12vw, 11rem)",
          }}
        >
          ireca
        </h1>
        <p
          className="tracking-[0.12em] uppercase text-[#001D2F]"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(1.4rem, 4.5vw, 5rem)",
            fontWeight: 500,
          }}
        >
          Artista Visual
        </p>
      </div>
    </section>
  );
}
