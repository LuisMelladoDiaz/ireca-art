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
  titleEn?: string;
  year?: number;
  medium?: string;
  dimensions?: string;
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
    titleEn: "Echo of the sea",
    year: 2024,
    medium: "Cera parafina",
    dimensions: "18 x 22 x 38 cm",
    images: imagesFrom(["eco-del-mar"]),
    section: "caracolas",
  },
  {
    slug: "relicarios",
    title: "Relicarios",
    titleEn: "Reliquaries",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "35 x 27 cm",
    images: imagesFrom(["relicarios-1", "relicarios-2"]),
    section: "caracolas",
  },
  {
    slug: "donde-vivo-hay-caracolas",
    title: "Donde vivo hay caracolas",
    titleEn: "Where I live there are seashells",
    year: 2026,
    medium: "Aguatinta sobre papel",
    dimensions: "38 x 28 cm",
    images: imagesFrom(["donde-vivo-hay-caracolas-1", "donde-vivo-hay-caracolas-2"]),
    section: "caracolas",
  },
  {
    slug: "arraigo",
    title: "Arraigo",
    titleEn: "Belonging",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "90 x 90 cm",
    images: imagesFrom(["arraigo"]),
    section: "arraigo",
  },
  {
    slug: "cimientos",
    title: "Cimientos de nuestro carnaval",
    titleEn: "Roots of our carnival",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    dimensions: "70 x 50 cm",
    images: imagesFrom(["cimientos"]),
    section: "arraigo",
  },
  {
    slug: "aquellos-dias-de-verano",
    title: "Aquellos días de verano",
    titleEn: "Those summer days",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: imagesFrom(["aquellos-dias-de-verano"]),
    section: "arraigo",
  },
  {
    slug: "verano-del-24",
    title: "Verano del 24",
    titleEn: "Summer of '24",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: imagesFrom(["verano-del-24"]),
    section: "arraigo",
  },
  {
    slug: "las-ninas",
    title: "Las niñas",
    titleEn: "Girls",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: imagesFrom(["las-ninas"]),
    section: "arraigo",
  },
  {
    slug: "el-corcho-de-la-abuela-pepi",
    title: "El corcho de la abuela Pepi",
    titleEn: "Grandma Pepi's cork",
    year: 2026,
    images: [],
    section: "otros",
  },
  {
    slug: "chipiona-y-sevilla",
    title: "Chipiona y Sevilla",
    titleEn: "Chipiona and Seville",
    year: 2026,
    images: imagesFrom(["chipiona-y-sevilla"]),
    section: "arraigo",
  },
  {
    slug: "agosto-o-abril",
    title: "Agosto o abril",
    titleEn: "August or april",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "73 x 92 cm",
    images: imagesFrom(["agosto-o-abril"]),
    section: "arraigo",
  },
  {
    slug: "quien",
    title: "Quién",
    titleEn: "Who",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: imagesFrom(["quien"]),
    section: "arraigo",
  },
  {
    slug: "conchitas",
    title: "Conchitas",
    titleEn: "Lil' shells",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "73 x 92 cm",
    images: imagesFrom(["conchitas"]),
    section: "arraigo",
  },
  {
    slug: "luna",
    title: "Luna",
    titleEn: "Moon",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 89 cm",
    images: imagesFrom(["luna"]),
    section: "paisaje",
  },
  {
    slug: "instantes-de-oceano",
    title: "Instantes de océano",
    titleEn: "Ocean moments",
    year: 2026,
    medium: "Collage pictórico sobre cartón-pluma",
    dimensions: "21 x 23 cm",
    images: imagesFrom(["instante-1", "instante-2", "instante-3", "instante-4", "instante-5"]),
    section: "paisaje",
  },
  {
    slug: "mis-cuatro-elementos",
    title: "Mis cuatro elementos",
    titleEn: "My four elements",
    year: 2026,
    medium: "Acrílico sobre tabla",
    dimensions: "33 x 24 cm",
    images: imagesFrom(["agua", "aire", "fuego", "tierra"]),
    section: "paisaje",
  },
  {
    slug: "chiquitita",
    title: "Chiquitita",
    titleEn: "Little one",
    year: 2025,
    medium: "Acrílico sobre tabla",
    dimensions: "50 x 61 cm",
    images: imagesFrom(["chiquitita"]),
    section: "arraigo",
  },
];

export function getPiece(slug: string): ExhibitionPiece | undefined {
  return EXHIBITION_PIECES.find((p) => p.slug === slug);
}
