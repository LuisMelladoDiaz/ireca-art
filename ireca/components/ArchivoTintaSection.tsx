import Image from "next/image";
import content from "@/data/content.json";
import SerieLlaves from "./archivo-tinta/SerieLlaves";
import SerieOtherworldly from "./archivo-tinta/SerieOtherworldly";
import SerieSelvatico from "./archivo-tinta/SerieSelvatico";

const { title, intro } = content.obras.archivoTinta;

const navTiles = [
  { href: "#llaves", label: "Ver serie Llaves", cover: { src: "/images/archivo_tinta/Llaves/Llave_1.jpg", alt: "Llaves" } },
  { href: "#selvatico", label: "Ver serie Selvático", cover: { src: "/images/archivo_tinta/Selvatico/Iguana.png", alt: "Selvático" } },
  { href: "#otherworldly", label: "Ver videojuego Otherworldly", cover: { src: "/images/archivo_tinta/Otherwordly/Escena_Inicio.png", alt: "Otherworldly" } },
];

export default function ArchivoTintaSection() {
  return (
    <div>
      <h2
        className="leading-tight text-[#001D2F] italic text-center px-6 pt-24 pb-2 md:pt-32"
        style={{
          fontFamily: "var(--font-belleza)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        {title}
      </h2>

      <p
        className="leading-[1.8] text-black text-justify max-w-2xl mx-auto px-6 mt-6"
        style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", fontWeight: 300 }}
      >
        {intro}
      </p>

      {/* Accesos directos — una foto por serie, con el título encima, que lleva al ancla */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl md:max-w-4xl mx-auto mt-10 md:mt-14 mb-16 md:mb-20 px-6">
        {navTiles.map(({ href, label, cover }) => (
          <a key={href} href={href} className="group relative block aspect-square overflow-hidden">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 768px) 90vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[#001D2F]/35 group-hover:bg-[#001D2F]/45 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center px-3 text-center">
              <span
                className="uppercase text-white"
                style={{ fontFamily: "var(--font-lato)", fontWeight: 700, letterSpacing: "0.06em", fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
              >
                {label}
              </span>
            </span>
          </a>
        ))}
      </div>

      <SerieLlaves />
      <SerieSelvatico />
      <SerieOtherworldly />

    </div>
  );
}
