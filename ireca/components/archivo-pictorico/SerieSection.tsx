import content from "@/data/content.json";
import { getArtwork, getArtworksBySection, type Artwork, type ArtworkSection } from "@/data/artworks";
import SeriesCarousel from "@/components/SeriesCarousel";

type Props = { section: ArtworkSection };

// Orden de cada carrusel — simplemente reordena los slugs de cada lista para cambiar el
// orden en el que aparecen las fotos. Si una sección no está aquí, se usa el orden por
// defecto de artworks.ts.
const ORDER: Partial<Record<ArtworkSection, string[]>> = {
  arraigo: [
    "arraigo", "quien", "aquellos-dias-de-verano",
    "chipiona-y-sevilla", "cimientos", "las-ninas", "verano-del-24", "agosto-o-abril", "chiquitita", "conchitas",
  ],
  caracolas: [
    "donde-vivo-hay-caracolas-1", "donde-vivo-hay-caracolas-2",
    "relicarios-1", "relicarios-2",
    "azul-marino", "eco-del-mar",
  ],
  paisaje: [
    "agua", "aire", "fuego", "tierra", "luna",
    "instante-1", "instante-2", "instante-3", "instante-4", "instante-5",
  ],
  mencionEspecial: [
    "camaleon-chipionero", "expo-camaleon-1", "expo-camaleon-2", "expo-camaleon-3",
    "dama-de-los-mares", "expo-dama", "hogar", "expo-hogar-1", "expo-hogar-2",
  ],
};

function orderedImages(section: ArtworkSection, slugOrder?: string[]): Artwork[] {
  if (slugOrder) return slugOrder.map((slug) => getArtwork(slug)!).filter(Boolean);
  return getArtworksBySection(section);
}

export default function SerieSection({ section }: Props) {
  const { title, text } = (
    content.obras.archivoEmocional.sections as Record<string, { title: string; text?: string }>
  )[section];
  const images = orderedImages(section, ORDER[section]);

  return (
    <section id={section} className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8 scroll-mt-16">
      <p
        className="italic mb-4"
        style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
      >
        {title}
      </p>
      {text && (
        <p
          className="leading-[1.8] text-black text-justify max-w-2xl mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          {text}
        </p>
      )}
      <SeriesCarousel images={images} />
    </section>
  );
}
