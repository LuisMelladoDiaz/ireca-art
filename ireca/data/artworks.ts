import content from "./content.json";

export type ArtworkSection = "arraigo" | "caracolas" | "paisaje" | "mencionEspecial" | "otros";

export type Artwork = {
  slug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  section: ArtworkSection;
};

const PICTORICO = "/images/archivo_emocional_pictorico";

export const ARTWORKS: Artwork[] = [
  // Arraigo
  { slug: "arraigo",                 src: `${PICTORICO}/Arraigo/Arraigo.jpg`,           alt: "Arraigo",                 width: 2935, height: 2919, section: "arraigo" },
  { slug: "cimientos",               src: `${PICTORICO}/Arraigo/Cimientos.jpg`,         alt: "Cimientos",               width: 800,  height: 1127, section: "arraigo" },
  { slug: "quien",                   src: `${PICTORICO}/Arraigo/Quien.jpg`,             alt: "Quién",                   width: 2893, height: 3916, section: "arraigo" },
  { slug: "agosto-o-abril",          src: `${PICTORICO}/Arraigo/Agosto-abril.jpg`,      alt: "Agosto o abril",          width: 3640, height: 2889, section: "arraigo" },
  { slug: "aquellos-dias-de-verano", src: `${PICTORICO}/Arraigo/Aquellos-dias.jpg`,     alt: "Aquellos días de verano", width: 2847, height: 3872, section: "arraigo" },
  { slug: "chipiona-y-sevilla",      src: `${PICTORICO}/Arraigo/Chipiona-sevilla.jpg`,  alt: "Chipiona y Sevilla",      width: 2617, height: 3949, section: "arraigo" },

  // Caracolas
  { slug: "azul-marino",                src: `${PICTORICO}/Caracolas/Azul_marino.jpg`,               alt: "Azul marino",                width: 600, height: 600,  section: "caracolas" },
  { slug: "eco-del-mar",                src: `${PICTORICO}/Caracolas/Eco_del_mar.jpg`,                alt: "Eco del mar",                width: 600, height: 1250, section: "caracolas" },
  { slug: "donde-vivo-hay-caracolas-1", src: `${PICTORICO}/Caracolas/Donde_vivo_hay_caracolas_1.jpg`, alt: "Donde vivo hay caracolas I",  width: 600, height: 936,  section: "caracolas" },
  { slug: "donde-vivo-hay-caracolas-2", src: `${PICTORICO}/Caracolas/Donde_vivo_hay_caracolas_2.jpg`, alt: "Donde vivo hay caracolas II", width: 600, height: 900,  section: "caracolas" },

  // Paisaje — elementos
  { slug: "agua",   src: `${PICTORICO}/Paisaje/Agua.jpg`,   alt: "Agua",   width: 2312, height: 3278, section: "paisaje" },
  { slug: "aire",   src: `${PICTORICO}/Paisaje/Aire.jpg`,   alt: "Aire",   width: 2193, height: 3051, section: "paisaje" },
  { slug: "fuego",  src: `${PICTORICO}/Paisaje/Fuego.jpg`,  alt: "Fuego",  width: 2374, height: 3231, section: "paisaje" },
  { slug: "tierra", src: `${PICTORICO}/Paisaje/Tierra.jpg`, alt: "Tierra", width: 2372, height: 3317, section: "paisaje" },
  { slug: "luna",   src: `${PICTORICO}/Paisaje/Luna.jpg`,   alt: "Luna",   width: 2675, height: 3917, section: "paisaje" },

  // Paisaje — instantes
  { slug: "instante-1", src: `${PICTORICO}/Paisaje/Instantes_1.png`, alt: "Instante I",   width: 500, height: 457, section: "paisaje" },
  { slug: "instante-2", src: `${PICTORICO}/Paisaje/Instantes_2.png`, alt: "Instante II",  width: 500, height: 457, section: "paisaje" },
  { slug: "instante-3", src: `${PICTORICO}/Paisaje/Instantes_3.png`, alt: "Instante III", width: 500, height: 457, section: "paisaje" },
  { slug: "instante-4", src: `${PICTORICO}/Paisaje/Instantes_4.png`, alt: "Instante IV",  width: 500, height: 457, section: "paisaje" },
  { slug: "instante-5", src: `${PICTORICO}/Paisaje/Instantes_5.png`, alt: "Instante V",   width: 500, height: 457, section: "paisaje" },

  // Mención especial
  { slug: "camaleon-chipionero", src: `${PICTORICO}/Mención especial/Camaleon_chipionero.JPG`, alt: "Camaleón chipionero",             width: 700, height: 1050, section: "mencionEspecial" },
  { slug: "expo-camaleon-1",     src: `${PICTORICO}/Mención especial/expo_camaleon.jpg`,        alt: "Exposición — Camaleón chipionero", width: 700, height: 1556, section: "mencionEspecial" },
  { slug: "expo-camaleon-2",     src: `${PICTORICO}/Mención especial/expo_camaleon(1).jpg`,     alt: "Exposición — Camaleón chipionero", width: 700, height: 278,  section: "mencionEspecial" },
  { slug: "expo-camaleon-3",     src: `${PICTORICO}/Mención especial/expo_camaleon (1).jpg`,    alt: "Exposición — Camaleón chipionero", width: 700, height: 900,  section: "mencionEspecial" },
  { slug: "dama-de-los-mares",   src: `${PICTORICO}/Mención especial/Dama_de_los_mares.JPG`,    alt: "Dama de los mares",               width: 700, height: 980,  section: "mencionEspecial" },
  { slug: "expo-dama",           src: `${PICTORICO}/Mención especial/expo_dama.jpg`,             alt: "Exposición — Dama de los mares",   width: 700, height: 1245, section: "mencionEspecial" },
  { slug: "hogar",               src: `${PICTORICO}/Mención especial/Hogar.jpg`,                 alt: "Hogar",                           width: 700, height: 494,  section: "mencionEspecial" },
  { slug: "expo-hogar-1",        src: `${PICTORICO}/Mención especial/expo_hogar.JPEG`,           alt: "Exposición — Hogar",              width: 700, height: 933,  section: "mencionEspecial" },
  { slug: "expo-hogar-2",        src: `${PICTORICO}/Mención especial/expo_hogar(1).JPEG`,        alt: "Exposición — Hogar",              width: 700, height: 1244, section: "mencionEspecial" },

  // Otros
  { slug: "mi-persona-favorita", src: `${PICTORICO}/Otros-Mi_persona_favorita.jpg`, alt: "Mi persona favorita", width: 600, height: 777, section: "otros" },
  { slug: "mini-yo",             src: `${PICTORICO}/Otros-Mini_yo.jpg`,             alt: "Mini yo",             width: 600, height: 872, section: "otros" },
  { slug: "primer-carnaval",     src: `${PICTORICO}/Otros-Primer_carnaval.png`,     alt: "Primer carnaval",     width: 600, height: 405, section: "otros" },
];

export function getArtwork(slug: string): Artwork | undefined {
  return ARTWORKS.find((a) => a.slug === slug);
}

export function getArtworksBySection(section: ArtworkSection): Artwork[] {
  return ARTWORKS.filter((a) => a.section === section);
}

// Descripción genérica: por ahora se reutiliza el texto de la serie a la que pertenece la obra.
export function getArtworkDescription(section: ArtworkSection): string | undefined {
  const sections = content.obras.archivoEmocional.sections as Record<string, { title: string; text?: string }>;
  return sections[section]?.text;
}

export function getSectionTitle(section: ArtworkSection): string {
  const sections = content.obras.archivoEmocional.sections as Record<string, { title: string; text?: string }>;
  return sections[section]?.title ?? "";
}
