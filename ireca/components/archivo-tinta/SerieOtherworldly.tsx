import Image from "next/image";

const images = [
  { src: "/images/archivo_tinta/Otherwordly/Restaurante.png",    alt: "Restaurante" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_final_1.png", alt: "Escena final 1" },
  { src: "/images/archivo_tinta/Otherwordly/Escena_inicio.png",  alt: "Escena inicio" },
  { src: "/images/archivo_tinta/Otherwordly/Callejon.png",       alt: "Callejón" }, 

];

export default function SerieOtherworldly() {
  return (
    <>

    <section className="relative w-full h-screen">
        <Image
          src="/images/archivo_tinta/Otherwordly/Escena_final_2.png"
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

      <section className="bg-[#FFF9F2] px-8 md:px-14 py-16">
       
        <div className="columns-2 gap-3 space-y-3">
          {images.map(({ src, alt }) => (
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

      <section className="relative w-full h-screen">
        <Image
          src="/images/archivo_tinta/Otherwordly/Menu.PNG"
          alt="Otherwordly — portada"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      
    </>
  );
}
