import SerieCaracolas   from "./archivo-pictorico/SerieCaracolas";
import SerieEcosDelMar  from "./archivo-pictorico/SerieEcosDelMar";
import SerieElementos   from "./archivo-pictorico/SerieElementos";
import SerieInstantes   from "./archivo-pictorico/SerieInstantes";
import SerieOtros       from "./archivo-pictorico/SerieOtros";

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

      <SerieCaracolas />
      <SerieEcosDelMar />
      <SerieElementos />
      <SerieInstantes />
      <SerieOtros />
    </div>
  );
}
