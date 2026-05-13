import Image from "next/image";
import content from "@/data/content.json";

const paragraphs = content.statement.text.split("\n\n");

export default function StatementSection() {
  return (
    <section id="statement" className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row items-stretch">
      {/* Left: title + image */}
      <div className="w-full md:w-[45%] flex flex-col px-10 md:px-14 pt-24 pb-10">
        <h2
          className="text-[#001D2F] leading-none"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(4rem, 7.5vw, 7rem)" }}
        >
          Statement
        </h2>

        <div className="relative mt-8 flex-1 min-h-[320px]">
          <Image
            src="/images/Statement.png"
            alt="Paleta de pintura"
            fill
            className="object-contain object-left-top"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>

      {/* Right: text in bordered box */}
      <div className="flex-1 flex items-center px-10 md:px-16 py-24">
        <div className="border border-[#001D2F]/20 p-8 md:p-12 w-full flex flex-col gap-5">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="leading-[1.9] text-[#001D2F]/70"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(0.88rem, 1.05vw, 1rem)",
                fontWeight: 300,
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
