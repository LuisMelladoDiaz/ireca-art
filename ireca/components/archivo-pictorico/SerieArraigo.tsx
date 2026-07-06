import content from "@/data/content.json";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.arraigo;

const BASE = "/images/archivo_emocional_pictorico/Arraigo";

const arraigo         = { src: `${BASE}/arraigo.JPG`,                 alt: "Arraigo",                width: 700, height: 694 };
const cimientos       = { src: `${BASE}/Cimientos.jpg`,               alt: "Cimientos",              width: 800, height: 1127 };
const quien           = { src: `${BASE}/Quien.jpg`,                   alt: "Quién",                  width: 700, height: 945 };
const agostoOAbril    = { src: `${BASE}/Agosto_o_abril.jpg`,          alt: "Agosto o abril",         width: 900, height: 722 };
const aquellosDias    = { src: `${BASE}/Aquellos_dias_de_verano.JPG`, alt: "Aquellos días de verano", width: 700, height: 949 };
const chipionaSevilla = { src: `${BASE}/chipiona_y_sevilla.jpg`,      alt: "Chipiona y Sevilla",     width: 700, height: 1023 };

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
            <ArtworkImage {...arraigo} description={text} fill sizes="(max-width: 768px) 66vw, 33vw" />
          </div>
          <ArtworkImage {...cimientos} description={text} fill sizes="(max-width: 768px) 33vw, 16vw" />
          <ArtworkImage {...quien} description={text} fill sizes="(max-width: 768px) 33vw, 16vw" />
          <div className="col-span-2">
            <ArtworkImage {...agostoOAbril} description={text} fill sizes="(max-width: 768px) 66vw, 33vw" />
          </div>
          <ArtworkImage {...aquellosDias} description={text} fill sizes="(max-width: 768px) 33vw, 16vw" />
          <ArtworkImage {...chipionaSevilla} description={text} fill sizes="(max-width: 768px) 33vw, 16vw" />
        </div>

      </div>
    </section>
  );
}
