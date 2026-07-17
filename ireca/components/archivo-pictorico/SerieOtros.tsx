import content from "@/data/content.json";
import { getArtworksBySection } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const { title } = content.obras.archivoEmocional.sections.otros;

const images = getArtworksBySection("otros");

export default function SerieOtros() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      <p
        className="italic mb-10 md:mb-12"
        style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
      >
        {title}
      </p>

      {/* Masonry — 2 cols móvil, 3 cols desktop */}
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {images.map((img) => (
          <div key={img.src} className="break-inside-avoid">
            <ArtworkImage {...img} className="w-full h-auto" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        ))}
      </div>

    </section>
  );
}
