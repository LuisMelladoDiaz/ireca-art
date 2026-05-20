import Image from "next/image";
import content from "@/data/content.json";

const paragraphs = content.statement.text.split("\n\n");

export default function StatementSection() {
  return (
    <section id="statement" className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row items-stretch scroll-mt-16">

      {/* Left: título (desktop) + imagen */}
      <div className="w-full md:w-[45%] flex flex-col px-0 md:px-0 md:pt-24 md:pb-10 order-3 md:order-none">

        {/* Título - solo desktop */}
        <h2
          className="hidden md:block text-[#001D2F] leading-none text-right px-10"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(2.5rem, 7.5vw, 7rem)" }}
        >
          statement
        </h2>

        {/* Imagen */}
        <div className="relative flex-1 min-h-[280px] md:min-h-[320px]">
          <Image
            src="/images/Statement.png"
            alt="Paleta de pintura"
            fill
            className="object-contain object-left-top"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

      </div>

      {/* Right: título (mobile) + texto */}
      <div className="flex-1 flex flex-col md:justify-center px-10 md:px-16 pt-8 pb-10 md:py-24 order-2 md:order-none">

        {/* Título - solo mobile */}
        <h2
          className="md:hidden text-[#001D2F] leading-none text-left mb-6"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(2.5rem, 7.5vw, 7rem)" }}
        >
          statement
        </h2>

        {/* Texto */}
        <div className="md:p-12 w-full flex flex-col gap-5 text-justify">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="leading-[1.9] text-[#001D2F]/70"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                fontWeight: 400,
              }}
            >
              {p}
            </p>
          ))}
        </div>

      </div>

    </section>
  );
}
