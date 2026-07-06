import content from "@/data/content.json";
import ArtworkImage from "@/components/ArtworkImage";

const { title, text } = content.obras.archivoEmocional.sections.mencionEspecial;

const BASE = "/images/archivo_emocional_pictorico/Mención especial";

const obras = [
  {
    featured: { src: `${BASE}/Camaleon_chipionero.JPG`, alt: "Camaleón chipionero", width: 700, height: 1050 },
    expo: [
      { src: `${BASE}/expo_camaleon.jpg`, alt: "Exposición — Camaleón chipionero", width: 700, height: 1556 },
      { src: `${BASE}/expo_camaleon(1).jpg`, alt: "Exposición — Camaleón chipionero", width: 700, height: 278 },
      { src: `${BASE}/expo_camaleon (1).jpg`, alt: "Exposición — Camaleón chipionero", width: 700, height: 900 },
    ],
  },
  {
    featured: { src: `${BASE}/Dama_de_los_mares.JPG`, alt: "Dama de los mares", width: 700, height: 980 },
    expo: [{ src: `${BASE}/expo_dama.jpg`, alt: "Exposición — Dama de los mares", width: 700, height: 1245 }],
  },
  {
    featured: { src: `${BASE}/Hogar.jpg`, alt: "Hogar", width: 700, height: 494 },
    expo: [
      { src: `${BASE}/expo_hogar.JPEG`, alt: "Exposición — Hogar", width: 700, height: 933 },
      { src: `${BASE}/expo_hogar(1).JPEG`, alt: "Exposición — Hogar", width: 700, height: 1244 },
    ],
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
          className="leading-[1.8] text-[#001D2F]/55 md:pb-1"
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
              <ArtworkImage {...featured} description={text} fill sizes="(max-width: 768px) 40vw, 22vw" />
            </div>
            {expo.map((img, i) => (
              <div key={img.src + i} className="flex-1 h-full">
                <ArtworkImage {...img} description={text} fill sizes="(max-width: 768px) 25vw, 14vw" />
              </div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}
