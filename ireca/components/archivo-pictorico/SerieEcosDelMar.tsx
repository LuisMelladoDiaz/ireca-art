import Image from "next/image";

const featured = { src: "/images/archivo_pictorico/Ecos_Del_Mar_Quien.jpg",          alt: "Quién" };
const rest = [
  { src: "/images/archivo_pictorico/Ecos_del_mar_Agosto_o_abril.jpg", alt: "Agosto o abril" },
  { src: "/images/archivo_pictorico/Ecos_del_mar_1.jpg",            alt: "Ecos del mar" },
  { src: "/images/archivo_pictorico/Ecos_del_Mar_Luna.jpg",           alt: "Luna" },
];

export default function SerieEcosDelMar() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8">

      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8 mb-8 md:mb-10">
        <p
          className="italic"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
        >
          Ecos del mar
        </p>
        <p
          className="leading-[1.8] text-[#001D2F]/55 md:pb-1"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Imagen destacada (2/3) + columna de tres (1/3) */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <Image
            src={featured.src}
            alt={featured.alt}
            width={900}
            height={700}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
        <div className="flex flex-row md:flex-col gap-3 md:w-[30%]">
          {rest.map(({ src, alt }) => (
            <div key={src} className="flex-1 relative aspect-[4/3] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 33vw, 22vw"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
