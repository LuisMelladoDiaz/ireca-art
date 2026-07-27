import content from "@/data/content.json";

const { intro } = content.obras.archivoEmocional;

export default function ArchivoEmocionalIntro() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-20">
      <div className="max-w-3xl border-l-4 border-[#A11B39] pl-6 md:pl-10 flex flex-col gap-4">
        {intro.map(({ text }, i) => (
          <p
            key={i}
            className="leading-[1.8] text-[#001D2F]/70 text-justify italic"
            style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)", fontWeight: 500 }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
