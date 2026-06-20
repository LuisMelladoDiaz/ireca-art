import Image from "next/image";

const images = [
  { src: "/images/archivo_pictorico/Otros_Cimientos.jpg",           alt: "Cimientos" },
  { src: "/images/archivo_pictorico/Otros_Hogar.jpg",               alt: "Hogar" },
  { src: "/images/archivo_pictorico/Otros_Mi_persona_favorita.jpg", alt: "Mi persona favorita" },
  { src: "/images/archivo_pictorico/Otros_Mini_yo.jpg",             alt: "Mini yo" },
  { src: "/images/archivo_pictorico/Otros_Primer_carnaval.png",     alt: "Primer carnaval" },
];

export default function SerieOtros() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      <p
        className="italic mb-10 md:mb-12"
        style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
      >
        Otros
      </p>

      {/* Masonry — 2 cols móvil, 3 cols desktop */}
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {images.map(({ src, alt }) => (
          <div key={src} className="break-inside-avoid">
            <Image
              src={src}
              alt={alt}
              width={600}
              height={500}
              className="w-full h-auto"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
