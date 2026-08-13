import Image from "next/image";
import content from "@/data/content.json";
import ExpandableBio from "@/components/ExpandableBio";

const paragraphs = content.statement.text.split("\n\n");

export default function StatementSection() {
  return (
    <section id="statement" className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row items-stretch scroll-mt-16">

      {/* Left: título (desktop) + imagen — oculto en móvil */}
      <div className="hidden md:flex md:w-[45%] md:flex-col md:pt-24 md:pb-10">

        {/* Título - solo desktop */}
        <h2
          className="text-[#001D2F] leading-none text-right px-10"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(2.5rem, 7.5vw, 7rem)" }}
        >
          statement
        </h2>

        {/* Imagen */}
        <div className="relative flex-1 min-h-[320px]">
          <Image
            src="/images/Statement.png"
            alt="Paleta de pintura"
            fill
            className="object-contain object-left-top"
            sizes="45vw"
          />
        </div>

      </div>

      {/* Right: título (mobile) + texto */}
      <div className="flex-1 flex flex-col md:justify-center px-10 md:px-16 pt-24 pb-10 md:py-24">

        {/* Título - solo mobile */}
        <h2
          className="md:hidden text-[#001D2F] leading-none text-left mb-6"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(2.5rem, 7.5vw, 7rem)" }}
        >
          statement
        </h2>

        {/* Texto */}
        <div className="md:p-12 w-full flex flex-col gap-5 text-justify">
          <ExpandableBio
            paragraphs={paragraphs}
            paragraphClassName="leading-[1.9] text-black"
            paragraphStyle={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
              fontWeight: 400,
            }}
          />
        </div>

      </div>

    </section>
  );
}
