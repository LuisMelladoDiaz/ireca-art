import Image from "next/image";

const images = [
  { src: "/images/archivo_pictorico/Caracolas_Azul_marino.jpg",               alt: "Azul marino" },
  { src: "/images/archivo_pictorico/Caracolas_Eco_del_mar.jpg",                alt: "Eco del mar" },
  { src: "/images/archivo_pictorico/Caracolas_Donde_vivo_hay_caracolas_1.jpg", alt: "Donde vivo hay caracolas I" },
  { src: "/images/archivo_pictorico/Caracolas_Donde_vivo_hay_caracolas_2.jpg", alt: "Donde vivo hay caracolas II" },
  
];

export default function SerieCaracolas() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

        {/* Texto */}
        <div className="w-full md:w-[28%] flex flex-col gap-4 md:sticky md:top-24">
          <p
            className="italic"
            style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#A11B39", fontWeight: 700 }}
          >
            Caracolas
          </p>
          <p
            className="leading-[1.8] text-[#001D2F]/60"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        {/* Mosaico sin huecos */}
        <div className="flex-1 columns-2 gap-3 space-y-3">
          {images.map(({ src, alt }) => (
            <div key={src} className="break-inside-avoid">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={500}
                className="w-full h-auto"
                sizes="(max-width: 768px) 50vw, 35vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
