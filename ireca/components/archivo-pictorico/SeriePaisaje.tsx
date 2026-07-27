import content from "@/data/content.json";
import { getArtwork } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";
import SeriesCarousel from "@/components/SeriesCarousel";

const { title, text } = content.obras.archivoEmocional.sections.paisaje;

// Luna en el centro (3ª de 5) cuando se muestran en fila horizontal
const elementos = ["agua", "aire", "luna", "fuego", "tierra"].map((slug) => getArtwork(slug)!);
const agua = getArtwork("agua")!;
const aguaAspectRatio = `${agua.width} / ${agua.height}`;

const instantes = ["instante-1", "instante-2", "instante-3", "instante-4", "instante-5"].map(
  (slug) => getArtwork(slug)!
);

const groupTitleStyle = { fontFamily: "var(--font-lato)", color: "#001D2F", fontWeight: 700 } as const;

export default function SeriePaisaje() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      {/* Cabecera — título y texto explicativo */}
      <p
        className="italic mb-4"
        style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
      >
        {title}
      </p>
      <p
        className="leading-[1.8] text-[#001D2F]/55 text-justify max-w-2xl mb-10 md:mb-14"
        style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
      >
        {text}
      </p>

      {/* Elementos + Luna — 5 columnas iguales, mismo tamaño (proporción de "agua"), sin etiqueta individual */}
      <p className="italic mb-3" style={{ ...groupTitleStyle, fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
        Elementos y luna
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-10 md:mb-14">
        {elementos.map((img) => (
          <div key={img.slug} className="relative w-full" style={{ aspectRatio: aguaAspectRatio }}>
            <ArtworkImage
              {...img}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Instantes — título único encima; en móvil, carrusel de una foto con autoavance y swipe */}
      <p className="italic mb-3" style={{ ...groupTitleStyle, fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
        Instantes de Océano
      </p>

      <div className="sm:hidden">
        <SeriesCarousel images={instantes} perPage={1} autoAdvanceMs={4000} />
      </div>

      <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-3">
        {instantes.map((img) => (
          <ArtworkImage
            key={img.slug}
            {...img}
            sizes="(max-width: 768px) 33vw, 20vw"
            quality={100}
          />
        ))}
      </div>

    </section>
  );
}
