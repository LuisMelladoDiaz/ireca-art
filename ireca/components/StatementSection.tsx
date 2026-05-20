import Image from "next/image";
import content from "@/data/content.json";

const paragraphs = content.statement.text.split("\n\n");

export default function StatementSection() {
  return (
    <section id="statement" className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row items-stretch">
      
      {/* Left: title + image */}
      <div className="w-full md:w-[45%] flex flex-col px-10 md:px-0 pt-24 pb-10">
        
        {/* Título */}
        <h2
          className="text-[#001D2F] leading-none text-right px-10"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(4rem, 7.5vw, 7rem)" }}
        >
          Statement
        </h2>

        {/* Imagen */}
        <div className="relative flex-1 min-h-[320px]">
          <Image
            src="/images/Statement.png"
            alt="Paleta de pintura"
            fill
            className="object-contain object-left-top"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>


      </div>

      {/* Right: texto */}
      <div className="flex-1 flex items-center px-10 md:px-16 py-24">

        {/* Cuadro de texto */}
        <div className="p-8 md:p-12 w-full flex flex-col gap-5 text-justify" style={{ backgroundColor: "rgba(255, 249, 242, 0.8)", borderRadius: "8px" }}>
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
