import Image from "next/image";
import SeriesCarousel from "./SeriesCarousel";

const llaves = [
  { src: "/images/archivo_tinta/Llaves/Llave_1.jpg", alt: "Llaves 1" },
  { src: "/images/archivo_tinta/Llaves/Llave_2.jpg", alt: "Llaves 2" },
  { src: "/images/archivo_tinta/Llaves/Llave_3.jpg", alt: "Llaves 3" },
];

const otherwordly = [
  { src: "/images/archivo_tinta/Otherwordly/Callejon.png",      alt: "Callejón" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_inicio.png", alt: "Escena inicio" },
  { src: "/images/archivo_tinta/Otherwordly/Restaurante.png",   alt: "Restaurante" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_final_1.png",alt: "Escena final 1" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_final_2.png",alt: "Escena final 2" },
];

const selvatico = [
  { src: "/images/archivo_tinta/Selvatico/Iguana.png",    alt: "Iguana" },
  { src: "/images/archivo_tinta/Selvatico/Serpiente.png", alt: "Serpiente" },
  { src: "/images/archivo_tinta/Selvatico/Tortuga.png",   alt: "Tortuga" },
  { src: "/images/archivo_tinta/Selvatico/Piraña.png",    alt: "Piraña" },
];

export default function ObrasSection() {
  return (
    <div id="obras">
    <h2
        className="leading-tight text-[#001D2F] italic"
        style={{
            fontFamily: "var(--font-belleza)",
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
          }}
          >
          Archivo de tinta
      </h2>
      
      {/* ── 1. Intro: Archivo de tinta ─────────────────────────────── */}
      <section className="min-h-screen bg-[#FFF9F2] flex items-center px-8 md:px-14 py-20 gap-10 md:gap-16">
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Left: meta */}
          <div className="w-full md:w-[38%] flex flex-col gap-6">
            
            <p
              className="tracking-[0.18em] uppercase"
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                color: "#468B97",
                fontWeight: 700,
              }}
            >
              Llaves
            </p>
            <p
              className="leading-[1.8] text-[#001D2F]/60"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                fontWeight: 300,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <Image
              src="/images/archivo_tinta/Llaves/Llave_1.jpg"
              alt="Llaves — obra destacada"
              width={600}
              height={400}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            
          </div>

          {/* Right: featured image */}
          <div className="flex-1 relative min-h-[420px] md:min-h-[560px]">
            <Image
              src="/images/archivo_tinta/Llaves/Llave_3.jpg"
              alt="Llaves — obra destacada"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

        </div>
      </section>

      {/* ── 2. Llaves — carrusel ───────────────────────────────────── */}
      <section className="bg-[#FFF9F2] px-8 md:px-14 py-16">
        <SeriesCarousel images={llaves} perPage={2} />
      </section>

      {/* ── 3. Otherwordly — cuadrícula ───────────────────────────── */}
      <section className="bg-[#FFF9F2] px-8 md:px-14 py-16">
        <p
          className="mb-8 tracking-[0.18em] uppercase text-[#001D2F]/40"
          style={{ fontFamily: "var(--font-lato)", fontSize: "0.7rem", fontWeight: 700 }}
        >
          Otherwordly
        </p>
        <div className="columns-2 gap-3 space-y-3">
          {otherwordly.map(({ src, alt }) => (
            <div key={src} className="break-inside-avoid">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Otherwordly — pantalla protagonista (Menu) ─────────── */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/archivo_tinta/Otherwordly/Menu.PNG"
          alt="Otherwordly — portada"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* ── 5. Selvático — intro + carrusel ───────────────────────── */}
      <section className="bg-[#FFF9F2] px-8 md:px-14 py-16">
        <div className="mb-10 flex items-baseline gap-6">
          <h3
            className="italic text-[#001D2F]"
            style={{
              fontFamily: "var(--font-belleza)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Selvático
          </h3>
          <p
            className="tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              color: "#468B97",
              fontWeight: 700,
            }}
          >
            de obras
          </p>
        </div>
        <SeriesCarousel images={selvatico} perPage={1} />
      </section>

      {/* ── 6. Escena final — full bleed ──────────────────────────── */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/archivo_tinta/Otherwordly/Escena_final_1.png"
          alt="Otherwordly — escena final"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <p
          className="absolute bottom-10 right-10 md:bottom-14 md:right-14 text-right italic text-white/80"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
          }}
        >
          Otherwordly
        </p>
      </section>

    </div>
  );
}
