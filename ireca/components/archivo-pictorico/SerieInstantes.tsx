import Image from "next/image";

const images = [
  { src: "/images/archivo_pictorico/Instantes_1.png", alt: "Instante I" },
  { src: "/images/archivo_pictorico/Instantes_2.png", alt: "Instante II" },
  { src: "/images/archivo_pictorico/Instantes_3.png", alt: "Instante III" },
  { src: "/images/archivo_pictorico/Instantes_4.png", alt: "Instante IV" },
  { src: "/images/archivo_pictorico/Instantes_5.png", alt: "Instante V" },
];

export default function SerieInstantes() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      {/* Cabecera en dos columnas */}
      <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8 mb-8 md:mb-10">
        <p
          className="italic"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
        >
          Instantes
        </p>
        <p
          className="leading-[1.8] text-[#001D2F]/55 md:pb-1"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Fila de 5 en desktop · 2 cols en móvil */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {images.map(({ src, alt }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={400}
            height={500}
            className="w-full h-auto"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
          />
        ))}
      </div>

    </section>
  );
}
