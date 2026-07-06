import content from "@/data/content.json";

const { intro } = content.obras.archivoEmocional;

export default function ArchivoEmocionalIntro() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20">
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {intro.map(({ text }, i) => (
          <p
            key={i}
            className="leading-[1.8] text-[#001D2F]/60 text-center italic"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(1rem, 1.4vw, 1.2rem)", fontWeight: 300 }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
