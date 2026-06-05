import SeriesCarousel from "@/components/SeriesCarousel";

const images = [
  { src: "/images/archivo_tinta/Selvatico/Iguana.png",    alt: "Iguana" },
  { src: "/images/archivo_tinta/Selvatico/Serpiente.png", alt: "Serpiente" },
  { src: "/images/archivo_tinta/Selvatico/Tortuga.png",   alt: "Tortuga" },
  { src: "/images/archivo_tinta/Selvatico/Piraña.png",    alt: "Piraña" },
];

export default function SerieSelvatico() {
  return (
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
      <SeriesCarousel images={images} perPage={1} />
    </section>
  );
}
