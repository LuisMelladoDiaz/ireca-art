import content from "@/data/content.json";
import SerieLlaves from "./archivo-tinta/SerieLlaves";
import SerieOtherworldly from "./archivo-tinta/SerieOtherworldly";
import SerieSelvatico from "./archivo-tinta/SerieSelvatico";

const { title, intro } = content.obras.archivoTinta;

export default function ArchivoTintaSection() {
  return (
    <div id="obras" className="pt-16 md:pt-20 border-t border-[#001D2F]/15">
      <h2
        className="leading-tight text-[#001D2F] italic text-center"
        style={{
          fontFamily: "var(--font-belleza)",
          fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
        }}
      >
        {title}
      </h2>

      <p
        className="leading-[1.8] text-[#001D2F]/60 text-center max-w-2xl mx-auto px-6 mt-6"
        style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", fontWeight: 300 }}
      >
        {intro}
      </p>

      <SerieLlaves />
      <SerieSelvatico />
      <SerieOtherworldly />

    </div>
  );
}
