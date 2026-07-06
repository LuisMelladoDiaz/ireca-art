import content from "@/data/content.json";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.paisaje;

const BASE = "/images/archivo_emocional_pictorico/Paisaje";

const elementos = [
  { src: `${BASE}/Agua.jpg`,   alt: "Agua",   width: 500, height: 688 },
  { src: `${BASE}/Aire.jpg`,   alt: "Aire",   width: 500, height: 692 },
  { src: `${BASE}/Fuego.png`,  alt: "Fuego",  width: 500, height: 682 },
  { src: `${BASE}/Tierra.jpg`, alt: "Tierra", width: 500, height: 685 },
  { src: `${BASE}/Luna.jpg`,   alt: "Luna",   width: 500, height: 752 },
];

const instantes = [
  { src: `${BASE}/Instantes_1.png`, alt: "Instante I",   width: 500, height: 457 },
  { src: `${BASE}/Instantes_2.png`, alt: "Instante II",  width: 500, height: 457 },
  { src: `${BASE}/Instantes_3.png`, alt: "Instante III", width: 500, height: 457 },
  { src: `${BASE}/Instantes_4.png`, alt: "Instante IV",  width: 500, height: 457 },
  { src: `${BASE}/Instantes_5.png`, alt: "Instante V",   width: 500, height: 457 },
];

export default function SeriePaisaje() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      {/* Cabecera en dos columnas */}
      <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8 mb-8 md:mb-10">
        <p
          className="italic"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
        >
          {title}
        </p>
        <p
          className="leading-[1.8] text-[#001D2F]/55 md:pb-1"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          {text}
        </p>
      </div>

      {/* Elementos + Luna — 5 columnas iguales con etiqueta */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-10 md:mb-14">
        {elementos.map((img) => (
          <div key={img.src} className="flex flex-col gap-2">
            <ArtworkImage {...img} description={text} sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw" />
            <p
              className="text-[#001D2F]/40 tracking-[0.18em] uppercase text-xs"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
            >
              {img.alt}
            </p>
          </div>
        ))}
      </div>

      {/* Instantes — fila de 5 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {instantes.map((img) => (
          <ArtworkImage
            key={img.src}
            {...img}
            description={text}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
          />
        ))}
      </div>

    </section>
  );
}
