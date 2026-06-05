import SerieLlaves from "./archivo-tinta/SerieLlaves";
import SerieOtherworldly from "./archivo-tinta/SerieOtherworldly";
import SerieSelvatico from "./archivo-tinta/SerieSelvatico";

export default function ArchivoTintaSection() {
  return (
    <div id="obras">
      <h2
        className="leading-tight text-[#001D2F] italic text-center"
        style={{
          fontFamily: "var(--font-belleza)",
          fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
        }}
      >
        Archivo de tinta
      </h2>

      <SerieLlaves />
      {/* <SerieOtherworldly /> */}
      {/* <SerieSelvatico /> */}
    </div>
  );
}
