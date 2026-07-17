import content from "@/data/content.json";
import { getArtworksBySection } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.caracolas;

const images = getArtworksBySection("caracolas");

export default function SerieCaracolas() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* Texto */}
        <div className="w-full md:w-[28%] flex flex-col gap-4 md:sticky md:top-24">
          <p
            className="italic"
            style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
          >
            {title}
          </p>
          <p
            className="leading-[1.8] text-[#001D2F]/60"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
          >
            {text}
          </p>
        </div>

        {/* Mosaico sin huecos */}
        <div className="flex-1 columns-2 gap-3 space-y-3">
          {images.map((img) => (
            <div key={img.src} className="break-inside-avoid">
              <ArtworkImage {...img} className="w-full h-auto" sizes="(max-width: 768px) 50vw, 35vw" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
