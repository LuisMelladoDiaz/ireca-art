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
    images: imagesFrom(["eco-del-mar"]),
    section: "caracolas",
  },
  {
    slug: "relicarios",
    title: "Relicarios",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["relicarios-1", "relicarios-2"]),
    section: "caracolas",
  },
  {
    slug: "donde-vivo-hay-caracolas",
    title: "Donde vivo hay caracolas",
    year: 2026,
    medium: "Aguatinta sobre papel",
    images: imagesFrom(["donde-vivo-hay-caracolas-1", "donde-vivo-hay-caracolas-2"]),
    section: "caracolas",
  },
  {
    slug: "arraigo",
    title: "Arraigo",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["arraigo"]),
    section: "arraigo",
  },
  {
    slug: "cimientos",
    title: "Cimientos de nuestro carnaval",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["cimientos"]),
    section: "arraigo",
  },
  {
    slug: "aquellos-dias-de-verano",
    title: "Aquellos días de verano",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["aquellos-dias-de-verano"]),
    section: "arraigo",
  },
  {
    slug: "verano-del-24",
    title: "Verano del 24",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["verano-del-24"]),
    section: "arraigo",
  },
  {
    slug: "las-ninas",
    title: "Las niñas",
    year: 2026,
    medium: "Acrílico sobre lienzo",
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
    images: imagesFrom(["chipiona-y-sevilla"]),
    section: "arraigo",
  },
  {
    slug: "agosto-o-abril",
    title: "Agosto o abril",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["agosto-o-abril"]),
    section: "arraigo",
  },
  {
    slug: "quien",
    title: "Quién",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["quien"]),
    section: "arraigo",
  },
  {
    slug: "conchitas",
    title: "Conchitas",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["conchitas"]),
    section: "arraigo",
  },
  {
    slug: "luna",
    title: "Luna",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    images: imagesFrom(["luna"]),
    section: "paisaje",
  },
  {
    slug: "instantes-de-oceano",
    title: "Instantes de océano",
    year: 2026,
    medium: "Collage pictórico sobre cartón-pluma",
    images: imagesFrom(["instante-1", "instante-2", "instante-3", "instante-4", "instante-5"]),
    section: "paisaje",
  },
  {
    slug: "mis-cuatro-elementos",
    title: "Mis cuatro elementos",
    year: 2026,
    medium: "Acrílico sobre tabla",
    images: imagesFrom(["agua", "aire", "fuego", "tierra"]),
    section: "paisaje",
  },
  {
    slug: "chiquitita",
    title: "Chiquitita",
    year: 2025,
    medium: "Acrílico sobre tabla",
    images: imagesFrom(["chiquitita"]),
    section: "arraigo",
  },
];

export function getPiece(slug: string): ExhibitionPiece | undefined {
  return EXHIBITION_PIECES.find((p) => p.slug === slug);
}
