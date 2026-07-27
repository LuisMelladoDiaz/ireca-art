import content from "@/data/content.json";
import { getArtwork } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.arraigo;

const arraigo = getArtwork("arraigo")!;

// Esquinas — 1 ud de ancho x 2 uds de largo
const aquellosDias = getArtwork("aquellos-dias-de-verano")!;
const quien = getArtwork("quien")!;
const chipionaSevilla = getArtwork("chipiona-y-sevilla")!;
const verano24 = getArtwork("verano-24")!;

// Arista alta y baja — 1 ud x 1 ud
const ninas = getArtwork("ninas")!;
const cimientos = getArtwork("cimientos")!;
const agostoOAbril = getArtwork("agosto-o-abril")!;
const chiquitita = getArtwork("chiquitita")!;

const cellSizes = "(max-width: 768px) 25vw, 15vw";

export default function SerieArraigo() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      {/* Texto — título y descripción, a modo de cabecera */}
      <div className="max-w-2xl flex flex-col gap-4 mb-10 md:mb-12">
        <p
          className="italic"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
        >
          {title}
        </p>
        <p
          className="leading-[1.8] text-[#001D2F]/60 text-justify"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          {text}
        </p>
      </div>

      {/* Collage — grid de 4x4 uds, arraigo en el 2x2 central */}
      <div className="grid grid-cols-4 grid-rows-4 gap-3 aspect-square w-full">

        {/* Esquinas */}
        <div className="col-start-1 row-start-1 row-span-2">
          <ArtworkImage {...aquellosDias} fill className="object-contain object-top" sizes={cellSizes} />
        </div>
        <div className="col-start-4 row-start-1 row-span-2">
          <ArtworkImage {...quien} fill className="object-contain object-top" sizes={cellSizes} />
        </div>
        <div className="col-start-1 row-start-3 row-span-2">
          <ArtworkImage {...chipionaSevilla} fill className="object-contain object-bottom" sizes={cellSizes} />
        </div>
        <div className="col-start-4 row-start-3 row-span-2">
          <ArtworkImage {...verano24} fill className="object-contain object-bottom" sizes={cellSizes} />
        </div>

        {/* Arista alta */}
        <div className="col-start-2 row-start-1">
          <ArtworkImage {...agostoOAbril} fill className="object-contain object-top" sizes={cellSizes} />
        </div>
        <div className="col-start-3 row-start-1">
          <ArtworkImage {...chiquitita} fill className="object-contain object-top" sizes={cellSizes} />
        </div>

        {/* Centro — arraigo */}
        <div className="col-start-2 col-span-2 row-start-2 row-span-2">
          <ArtworkImage {...arraigo} fill className="object-contain" sizes="(max-width: 768px) 50vw, 30vw" />
        </div>

        {/* Arista baja */}
        <div className="col-start-2 row-start-4">
          <ArtworkImage {...ninas} fill className="object-contain object-bottom" sizes={cellSizes} />
        </div>
        <div className="col-start-3 row-start-4">
          <ArtworkImage {...cimientos} fill className="object-contain object-bottom" sizes={cellSizes} />
        </div>

      </div>

    </section>
  );
}
