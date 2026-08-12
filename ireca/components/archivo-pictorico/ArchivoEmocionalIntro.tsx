import Image from "next/image";
import content from "@/data/content.json";
import { getArtwork, type ArtworkSection } from "@/data/artworks";

const { intro } = content.obras.archivoEmocional;

const navTiles: { section: ArtworkSection; label: string; cover: ReturnType<typeof getArtwork> }[] = [
  { section: "arraigo", label: "Ver serie Arraigo", cover: getArtwork("arraigo") },
  { section: "caracolas", label: "Ver caracolas", cover: getArtwork("relicarios-2") },
  { section: "paisaje", label: "Ver paisajes", cover: getArtwork("aire") },
  { section: "mencionEspecial", label: "Ver menciones especiales", cover: getArtwork("hogar") },
];

export default function ArchivoEmocionalIntro() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 pt-2 md:pt-4 pb-16 md:pb-20">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {intro.map(({ text }, i) => (
          <p
            key={i}
            className="leading-[1.8] text-black text-justify italic"
            style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1rem, 1.6vw, 1.4rem)", fontWeight: 500 }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Accesos directos — una foto por sección, con el título encima, que lleva al ancla */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto mt-10 md:mt-14">
        {navTiles.map(({ section, label, cover }) => {
          if (!cover) return null;
          return (
            <a key={section} href={`#${section}`} className="group relative block aspect-square overflow-hidden">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
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
          );
        })}
      </div>
    </section>
  );
}
