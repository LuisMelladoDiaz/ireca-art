import { getArtwork, type ArtworkSection } from "./artworks";

// Catálogo real de las 17 obras físicas de la exposición, cada una con su propio QR.
// A diferencia de `artworks.ts` (que alimenta las galerías internas del sitio, imagen a
// imagen), aquí una "pieza" puede agrupar varias fotos (p. ej. una obra documentada con
// dos tomas) o no tener foto todavía — el slug queda reservado para que el QR ya impreso
// siga funcionando en cuanto se suba la imagen.
//
// Las imágenes se resuelven siempre a partir de `artworks.ts` (nunca se duplica src/width/
// height aquí) para que un cambio de ruta o de slug en un solo sitio no vuelva a desincronizar
// los dos catálogos.

export type PieceImage = { src: string; alt: string; width: number; height: number };

export type ExhibitionPiece = {
  slug: string;
  title: string;
  year?: number;
  medium?: string;
  dimensions?: string;
  /** Texto propio de la obra. Si no se indica, la página cae al texto genérico de la serie. */
  description?: string;
  images: PieceImage[];
  section: ArtworkSection;
};

function imagesFrom(slugs: string[]): PieceImage[] {
  return slugs.map((slug) => {
    const artwork = getArtwork(slug);
    if (!artwork) throw new Error(`exhibitionPieces: no existe la obra con slug "${slug}" en artworks.ts`);
    const { src, alt, width, height } = artwork;
    return { src, alt, width, height };
  });
}

export const EXHIBITION_PIECES: ExhibitionPiece[] = [
  {
    slug: "eco-del-mar",
    title: "Eco del mar",
    year: 2024,
    medium: "Cera parafina",
    dimensions: "18 x 22 x 38 cm",
    description:
      "Esta obra da nombre a la exposición que hoy aquí se presenta. El título se debe al mito popular sobre escuchar el ir y venir de las olas del mar en su interior si acercamos el oído. Las caracolas se han convertido en un símbolo identitario de cuánto añoraba mi hogar, Chipiona y el mar, cuando estaba lejos.",
    images: imagesFrom(["eco-del-mar"]),
    section: "caracolas",
  },
  {
    slug: "relicarios",
    title: "Relicarios",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "35 x 27 cm",
    description:
      "Durante mis años de estudiante he ido recopilando una serie de caracolas que me acercaban a Chipiona cuando más lejos estaba de ella y del agua de la playa. Este elemento se ha convertido en un símbolo identitario de cuánto añoraba mi hogar.\n\nMe alegra saber que no soy la única: la abuela Pepi no tiene un bol de frutas en su salón, lo tiene de caracolas. Los tíos y nietos hacemos crecer su colección cada vez que viajamos. Considero que es una especie de relicario muy especial.",
    images: imagesFrom(["relicarios-1", "relicarios-2"]),
    section: "caracolas",
  },
  {
    slug: "donde-vivo-hay-caracolas",
    title: "Donde vivo hay caracolas",
    year: 2026,
    medium: "Aguatinta sobre papel",
    dimensions: "38 x 28 cm",
    images: imagesFrom(["donde-vivo-hay-caracolas-1", "donde-vivo-hay-caracolas-2"]),
    section: "caracolas",
  },
  {
    slug: "arraigo",
    title: "Arraigo",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "90 x 90 cm",
    images: imagesFrom(["arraigo"]),
    section: "arraigo",
  },
  {
    slug: "cimientos",
    title: "Cimientos de nuestro carnaval",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    dimensions: "70 x 50 cm",
    description:
      "Esta fue mi propuesta pictórica para el Cartel de Carnaval de Chipiona 2025 en homenaje al 50º Aniversario de la Comparsa «Aires Bandoleros». Hace pocos años que escucho carnaval pero, mis abuelos paternos siempre han sido aficionados y me alentaron a saber más de la historia de esta comparsa en la que participaron algunos de sus amigos.",
    images: imagesFrom(["cimientos"]),
    section: "arraigo",
  },
  {
    slug: "aquellos-dias-de-verano",
    title: "Aquellos días de verano",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: imagesFrom(["aquellos-dias-de-verano"]),
    section: "arraigo",
  },
  {
    slug: "verano-del-24",
    title: "Verano del 24",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    description:
      "Siempre recordaré el verano de 2024 por aquellas noches disfrutando del océano bajo el Santuario: salir corriendo del trabajo, bañarnos, charlar durante horas hasta enamorarnos y no dejar de escuchar nunca el sonido del mar.",
    images: imagesFrom(["verano-del-24"]),
    section: "arraigo",
  },
  {
    slug: "las-ninas",
    title: "Las niñas",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    description:
      "Este «pequeño» homenaje a mis amigas retrata el día en que María, una de mis mejores amigas apasionada de los atardeceres y las olas, volvía después de meses al pueblo. Supimos que la mejor sorpresa que podíamos hacer era llevarla a ver el amanecer. A pesar de la incompatibilidad de nuestros horarios todas asistimos a despertar a las gaviotas de la orilla.",
    images: imagesFrom(["las-ninas"]),
    section: "arraigo",
  },
  {
    slug: "el-corcho-de-la-abuela-pepi",
    title: "El corcho de la abuela Pepi",
    year: 2026,
    images: [],
    section: "otros",
  },
  {
    slug: "chipiona-y-sevilla",
    title: "Chipiona y Sevilla",
    year: 2026,
    description:
      "Mi abuela era de Sevilla y mi abuelo de Chipiona, dos lugares que siempre han ido de la mano. Se enamoraron en el faro. Esta es una de mis pinturas favoritas y mi forma de homenajear a estas dos personitas tan importantes para mí.",
    images: imagesFrom(["chipiona-y-sevilla"]),
    section: "arraigo",
  },
  {
    slug: "agosto-o-abril",
    title: "Agosto o abril",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "73 x 92 cm",
    description:
      "Desde que conocí a Mario, la playa nos unió y durante años nuestros planes eran ir a ella a descansar, dibujar o escribir. El mar es un lugar esencial en nuestra amistad, nuestro lugar seguro. Durante todo el año, no solo en verano.",
    images: imagesFrom(["agosto-o-abril"]),
    section: "arraigo",
  },
  {
    slug: "quien",
    title: "Quién",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    description:
      "Esta pintura es una especie de archivo de lo importante que es para mí escribir y divagar en una libreta donde pego, además, varias instantáneas de esos recuerdos. Resume mis inquietudes tanto artísticas como emocionales. Una forma de desahogo que alivia ese miedo al olvido a través de la escritura y la pintura.",
    images: imagesFrom(["quien"]),
    section: "arraigo",
  },
  {
    slug: "conchitas",
    title: "Conchitas",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "73 x 92 cm",
    description:
      "Recuerdo pasar todos los domingos de verano en mi infancia en la Playa de Camarón; mi hermana Noelia, la protagonista de esta obra, y yo solíamos coleccionar miles de conchitas durante los paseos que luego llevábamos a casa a pintar. Esta pintura nace de la más profunda nostalgia.",
    images: imagesFrom(["conchitas"]),
    section: "arraigo",
  },
  {
    slug: "luna",
    title: "Luna",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 89 cm",
    description:
      "El sol y la luna convergiendo en un mismo cielo: atardece un nuevo día junto a él, y supersticiosamente siempre he creído que las charlas que tienes frente a un buen atardecer como este dan buen augurio y deparan nuevas y mejores experiencias.",
    images: imagesFrom(["luna"]),
    section: "paisaje",
  },
  {
    slug: "instantes-de-oceano",
    title: "Instantes de océano",
    year: 2026,
    medium: "Collage pictórico sobre cartón-pluma",
    dimensions: "21 x 23 cm",
    description:
      "Cada composición representa un recuerdo creado a partir de la combinación de muchos que han sido modificados, deformados y yuxtapuestos en nuestra mente. El paisaje se construye con piezas de diferentes lugares y tiempos, constituyendo un paisaje ficticio pero que podría ser real. Es como si el inconsciente tratase de reconstruir lo olvidado y completarlo a través del gesto pictórico.",
    images: imagesFrom(["instante-1", "instante-2", "instante-3", "instante-4", "instante-5"]),
    section: "paisaje",
  },
  {
    slug: "mis-cuatro-elementos",
    title: "Mis cuatro elementos",
    year: 2026,
    medium: "Acrílico sobre tabla",
    dimensions: "33 x 24 cm",
    description:
      "¿De qué se compone el mar? De mis cuatro elementos:\nTierra. Los corrales, el musgo, la sal.\nAgua. Las olas.\nFuego. El sol.\nAire. La espuma.",
    images: imagesFrom(["agua", "aire", "fuego", "tierra"]),
    section: "paisaje",
  },
  {
    slug: "chiquitita",
    title: "Chiquitita",
    year: 2025,
    medium: "Acrílico sobre tabla",
    dimensions: "50 x 61 cm",
    description:
      "Esta obra aporta una visión más difusa y nostálgica de mi infancia en Chipiona: el recuerdo se ha ido distorsionando con el paso de los años. Habla de ilusión y felicidad a través de reflejos, luces y color.",
    images: imagesFrom(["chiquitita"]),
    section: "arraigo",
  },
];

export function getPiece(slug: string): ExhibitionPiece | undefined {
  return EXHIBITION_PIECES.find((p) => p.slug === slug);
}
