import ArchivoEmocionalIntro from "./archivo-pictorico/ArchivoEmocionalIntro";
import SerieArraigo          from "./archivo-pictorico/SerieArraigo";
import SerieCaracolas        from "./archivo-pictorico/SerieCaracolas";
import SeriePaisaje          from "./archivo-pictorico/SeriePaisaje";
import SerieMencionEspecial  from "./archivo-pictorico/SerieMencionEspecial";
import SerieOtros            from "./archivo-pictorico/SerieOtros";

export default function ArchivoPlctoricoSection() {
  return (
    <div id="archivo-pictorico">
      <h2
        className="leading-tight text-[#001D2F] italic text-center px-6 pt-24 pb-10 md:pt-32 md:pb-14"
        style={{
          fontFamily: "var(--font-belleza)",
          fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
        }}
      >
        Archivo Pictórico
      </h2>

      <ArchivoEmocionalIntro />
      <SerieArraigo />
      <SerieCaracolas />
      <SeriePaisaje />
      <SerieMencionEspecial />
      <SerieOtros />
    </div>
  );
}
