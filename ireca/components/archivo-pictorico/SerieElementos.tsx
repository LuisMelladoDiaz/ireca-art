import Image from "next/image";

const elementos = [
  { src: "/images/archivo_pictorico/Elementos_Agua.jpg",   alt: "Agua",   label: "Agua" },
  { src: "/images/archivo_pictorico/Elementos_Aire.jpg",   alt: "Aire",   label: "Aire" },
  { src: "/images/archivo_pictorico/Elementos_Fuego.jpg",  alt: "Fuego",  label: "Fuego" },
  { src: "/images/archivo_pictorico/Elementos_Tierra.jpg", alt: "Tierra", label: "Tierra" },
];

export default function SerieElementos() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      <p
        className="italic mb-10 md:mb-12"
        style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
      >
        Elementos
      </p>

      {/* 4 columnas iguales en desktop, 2×2 en móvil */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {elementos.map(({ src, alt, label }) => (
          <div key={src} className="flex flex-col gap-2">
            <Image
              src={src}
              alt={alt}
              width={500}
              height={650}
              className="w-full h-auto"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <p
              className="text-[#001D2F]/40 tracking-[0.18em] uppercase text-xs"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
