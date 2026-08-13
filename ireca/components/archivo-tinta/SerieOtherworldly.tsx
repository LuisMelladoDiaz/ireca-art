import content from "@/data/content.json";
import SeriesCarousel from "@/components/SeriesCarousel";

const { title, text } = content.obras.archivoTinta.series.otherworldly;

const images = [
  { src: "/images/archivo_tinta/Otherwordly/Escena_final_1.png", alt: "Escena final 1", width: 800,  height: 451 },
  { src: "/images/archivo_tinta/Otherwordly/Escena_inicio.png",  alt: "Escena inicio",  width: 800,  height: 449 },
  { src: "/images/archivo_tinta/Otherwordly/Escena_final_2.png", alt: "Escena final 2", width: 2351, height: 1334 },
  { src: "/images/archivo_tinta/Otherwordly/Restaurante.png",    alt: "Restaurante",    width: 800,  height: 453 },
  { src: "/images/archivo_tinta/Otherwordly/Menu.PNG",           alt: "Menú",           width: 2345, height: 1327 },
  { src: "/images/archivo_tinta/Otherwordly/Callejon.png",       alt: "Callejón",       width: 800,  height: 453 },
];

export default function SerieOtherworldly() {
  return (
    <section id="otherworldly" className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8 scroll-mt-16">
      <p
        className="italic mb-4"
        style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
      >
        {title}
      </p>
      <p
        className="leading-[1.8] text-black text-justify max-w-2xl mb-10 md:mb-14"
        style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
      >
        {text}
      </p>
      <SeriesCarousel images={images} />

      {/* Gameplay en YouTube + enlace para jugar */}
      <div className="mt-14 flex flex-col gap-5">
        <p
          className="italic text-black"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(1rem, 1.5vw, 1.3rem)" }}
        >
          Gameplay de Otherworldly
        </p>

        <div className="relative w-full md:max-w-2xl aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/CdUV4vgRgaw"
            title="Otherworldly — gameplay"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          />
        </div>

        <a
          href="https://ireca-y-luinki.itch.io/otherworldly"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
          className="inline-block w-fit text-sm md:text-lg px-6 py-2.5 md:px-10 md:py-4 tracking-[0.25em] uppercase bg-[#468B97]/20 text-[#468B97] transition-colors hover:bg-[#468B97]/35"
        >
          Jugar a Otherworldly
        </a>
      </div>
    </section>
  );
}
