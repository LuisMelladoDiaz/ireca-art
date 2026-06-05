"use client";

import Image from "next/image";
import SeriesCarousel from "@/components/SeriesCarousel";

const images = [
  { src: "/images/archivo_tinta/Selvatico/Iguana.png",    alt: "Iguana" },
  { src: "/images/archivo_tinta/Selvatico/Serpiente.png", alt: "Serpiente" },
  { src: "/images/archivo_tinta/Selvatico/Tortuga.png",   alt: "Tortuga" },
  { src: "/images/archivo_tinta/Selvatico/Piraña.png",    alt: "Piraña" },
];

export default function SerieSelvatico() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-10 md:py-5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

        {/* Izquierda 2/3: imagen estática grande */}
        <div className="w-full md:w-[66%]">
          <Image
            src="/images/archivo_tinta/Llaves/Llave_2.jpg"
            alt="Selvático — obra destacada"
            width={1200}
            height={900}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>

        {/* Derecha 1/3: carrusel pequeño + título + descripción */}
        <div className="w-full md:w-[33%] flex flex-col gap-6">

          <SeriesCarousel images={images} perPage={1} />

          <p
            className="italic"
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#A11B39",
              fontWeight: 700,
            }}
          >
            Selvático
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
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>
      </div>
    </section>
  );
}
