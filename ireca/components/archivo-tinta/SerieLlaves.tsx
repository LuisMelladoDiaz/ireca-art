import content from "@/data/content.json";
import SeriesCarousel from "@/components/SeriesCarousel";

const { title, text } = content.obras.archivoTinta.series.llaves;

const images = [
  { src: "/images/archivo_tinta/Llaves/Llave_1.jpg", alt: "Llaves — edificio", width: 1200, height: 1686 },
  { src: "/images/archivo_tinta/Llaves/Llave_2.jpg", alt: "Selvático — obra destacada", width: 1200, height: 843 },
  { src: "/images/archivo_tinta/Llaves/Llave_3.jpg", alt: "Llaves — cerradura", width: 600, height: 984 },
];

export default function SerieLlaves() {
  return (
    <section id="llaves" className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20 border-t border-[#001D2F]/8 scroll-mt-16">
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
      <SeriesCarousel images={images} naturalAspect />
    </section>
  );
}
