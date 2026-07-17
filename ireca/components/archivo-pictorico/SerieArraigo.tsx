import content from "@/data/content.json";
import { getArtwork } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.arraigo;

const arraigo         = getArtwork("arraigo")!;
const cimientos       = getArtwork("cimientos")!;
const quien           = getArtwork("quien")!;
const agostoOAbril    = getArtwork("agosto-o-abril")!;
const aquellosDias    = getArtwork("aquellos-dias-de-verano")!;
const chipionaSevilla = getArtwork("chipiona-y-sevilla")!;

export default function SerieArraigo() {
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

        {/* Mosaico compacto — arraigo.JPG como obra principal */}
        <div
          className="w-full flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 grid-flow-row-dense"
          style={{ gridAutoRows: "clamp(100px, 12vw, 220px)" }}
        >
          <div className="col-span-2 row-span-2">
            <ArtworkImage {...arraigo} fill sizes="(max-width: 768px) 66vw, 33vw" />
          </div>
          <ArtworkImage {...cimientos} fill sizes="(max-width: 768px) 33vw, 16vw" />
          <ArtworkImage {...quien} fill sizes="(max-width: 768px) 33vw, 16vw" />
          <div className="col-span-2">
            <ArtworkImage {...agostoOAbril} fill sizes="(max-width: 768px) 66vw, 33vw" />
          </div>
          <ArtworkImage {...aquellosDias} fill sizes="(max-width: 768px) 33vw, 16vw" />
          <ArtworkImage {...chipionaSevilla} fill sizes="(max-width: 768px) 33vw, 16vw" />
        </div>

      </div>
    </section>
  );
}
