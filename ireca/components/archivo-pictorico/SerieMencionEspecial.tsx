import content from "@/data/content.json";
import { getArtwork } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.mencionEspecial;

const obras = [
  {
    featured: getArtwork("camaleon-chipionero")!,
    expo: ["expo-camaleon-1", "expo-camaleon-2", "expo-camaleon-3"].map((slug) => getArtwork(slug)!),
  },
  {
    featured: getArtwork("dama-de-los-mares")!,
    expo: ["expo-dama"].map((slug) => getArtwork(slug)!),
  },
  {
    featured: getArtwork("hogar")!,
    expo: ["expo-hogar-1", "expo-hogar-2"].map((slug) => getArtwork(slug)!),
  },
];

export default function SerieMencionEspecial() {
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
          className="leading-[1.8] text-[#001D2F]/55 text-justify md:pb-1"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          {text}
        </p>
      </div>

      {/* Una tira compacta por obra: pieza + documentación de exposición */}
      <div className="flex flex-col gap-6">
        {obras.map(({ featured, expo }) => (
          <div key={featured.src} className="flex gap-3 h-40 sm:h-48 md:h-56">
            <div className="flex-[1.6] h-full">
              <ArtworkImage {...featured} fill sizes="(max-width: 768px) 40vw, 22vw" />
            </div>
            {expo.map((img, i) => (
              <div key={img.src + i} className="flex-1 h-full">
                <ArtworkImage {...img} fill sizes="(max-width: 768px) 25vw, 14vw" />
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
