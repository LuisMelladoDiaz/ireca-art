import content from "@/data/content.json";
import { getArtwork, type Artwork } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.arraigo;

// Columnas 1 y 3 — obras verticales (cuadros altos)
const aquellosDias = getArtwork("aquellos-dias-de-verano")!;
const ninas = getArtwork("ninas")!;
const chipionaSevilla = getArtwork("chipiona-y-sevilla")!;
const quien = getArtwork("quien")!;
const cimientos = getArtwork("cimientos")!;
const verano24 = getArtwork("verano-24")!;

// Fila 1 y 3, columna central — obras horizontales (cuadros largos)
const chiquitita = getArtwork("chiquitita")!;
const agostoOAbril = getArtwork("agosto-o-abril")!;

// Centro — obra cuadrada
const arraigo = getArtwork("arraigo")!;

// El grid ya no tiene un ancho máximo fijo (flex-1): en pantallas grandes cada columna puede
// llegar a ocupar más del doble de lo que se estimaba antes, así que se piden anchos generosos
// para no infravalorar el tamaño real y forzar a Next.js a servir una imagen de menor resolución.
const sidesSizes = "(max-width: 768px) 30vw, 20vw";
const centerColSizes = "(max-width: 768px) 50vw, 35vw";

// Alto de fila (fracción del alto total del grid, grid-rows-[4fr_5fr_4fr])
const ROW_FR = [4, 5, 4];
const TOTAL_ROW_FR = ROW_FR.reduce((a, b) => a + b, 0);
const TOP_ROW_HEIGHT_FRACTION = ROW_FR[0] / TOTAL_ROW_FR;

// Ancho que ocupa naturalmente la primera obra de cada columna (alto de su fila x su proporción).
// Las tres columnas se escalan de forma uniforme para llenar el 100% del ancho manteniendo esa
// misma proporción entre ellas — así el criterio de recorte es idéntico en las tres, y no queda
// margen interno extra en ninguna columna (todas las obras usan object-cover).
function naturalColumnWidth(firstArtwork: Artwork) {
  const aspect = firstArtwork.width / firstArtwork.height;
  return TOP_ROW_HEIGHT_FRACTION * aspect;
}

const naturalWidths = [naturalColumnWidth(aquellosDias), naturalColumnWidth(chiquitita), naturalColumnWidth(quien)];
const naturalTotal = naturalWidths.reduce((a, b) => a + b, 0);

const gridTemplateColumns = naturalWidths.map((w) => `${((w / naturalTotal) * 100).toFixed(3)}%`).join(" ");

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
            className="leading-[1.8] text-[#001D2F]/60 text-justify"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
          >
            {text}
          </p>
        </div>

        {/* Collage — grid 3x3, las tres columnas escaladas a la misma proporción natural
            (ver naturalColumnWidth); todas las obras a object-cover, sin margen interno. */}
        <div className="grid grid-rows-[4fr_5fr_4fr] gap-3 aspect-square w-full flex-1" style={{ gridTemplateColumns }}>

          {/* offsetX/offsetY (0-100, 50 = centro): qué parte de la obra queda visible tras el
              recorte de object-cover. Ajusta estos números por obra a gusto. */}
          <div>
            <ArtworkImage {...verano24} fill className="object-cover" sizes={sidesSizes} quality={100} offsetX={50} offsetY={50} />
          </div>
          <div>
            <ArtworkImage {...agostoOAbril} fill className="object-cover" sizes={centerColSizes} quality={100} offsetX={50} offsetY={100} />
          </div>
          <div>
            <ArtworkImage {...chipionaSevilla} fill className="object-cover" sizes={sidesSizes} quality={100} offsetX={50} offsetY={30} />
          </div>

          <div>
            <ArtworkImage {...aquellosDias} fill className="object-cover" sizes={sidesSizes} quality={100} offsetX={50} offsetY={50} />
          </div>
          <div>
            <ArtworkImage {...arraigo} fill className="object-cover" sizes={centerColSizes} quality={100} offsetX={50} offsetY={50} />
          </div>
          <div>
            <ArtworkImage {...quien} fill className="object-cover" sizes={sidesSizes} quality={100} offsetX={50} offsetY={50} />
          </div>

          <div>
            <ArtworkImage {...cimientos} fill className="object-cover" sizes={sidesSizes} quality={100} offsetX={50} offsetY={65} />
          </div>
          <div>
            <ArtworkImage {...chiquitita} fill className="object-cover" sizes={centerColSizes} quality={100} offsetX={50} offsetY={50} />
          </div>
          <div>
            <ArtworkImage {...ninas} fill className="object-cover" sizes={sidesSizes} quality={100} offsetX={50} offsetY={80} />
          </div>

        </div>

      </div>

    </section>
  );
}
