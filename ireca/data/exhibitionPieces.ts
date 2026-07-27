import type { ArtworkSection } from "./artworks";

// Catálogo real de las 17 obras físicas de la exposición, cada una con su propio QR.
// A diferencia de `artworks.ts` (que alimenta las galerías internas del sitio, imagen a
// imagen), aquí una "pieza" puede agrupar varias fotos (p. ej. una obra documentada con
// dos tomas) o no tener foto todavía — el slug queda reservado para que el QR ya impreso
// siga funcionando en cuanto se suba la imagen.

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

const PICTORICO = "/images/archivo_emocional_pictorico";

export const EXHIBITION_PIECES: ExhibitionPiece[] = [
  {
    slug: "eco-del-mar",
    title: "Eco del mar",
    titleEn: "Echo of the sea",
    year: 2024,
    medium: "Cera parafina",
    dimensions: "18 x 22 x 38 cm",
    images: [{ src: `${PICTORICO}/Caracolas/Eco_del_mar.jpg`, alt: "Eco del mar", width: 600, height: 1250 }],
    section: "caracolas",
  },
  {
    slug: "relicarios",
    title: "Relicarios",
    titleEn: "Reliquaries",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "35 x 27 cm",
    images: [],
    section: "caracolas",
  },
  {
    slug: "donde-vivo-hay-caracolas",
    title: "Donde vivo hay caracolas",
    titleEn: "Where I live there are seashells",
    year: 2026,
    medium: "Aguatinta sobre papel",
    dimensions: "38 x 28 cm",
    images: [
      { src: `${PICTORICO}/Caracolas/Donde_vivo_hay_caracolas_1.jpg`, alt: "Donde vivo hay caracolas I", width: 600, height: 936 },
      { src: `${PICTORICO}/Caracolas/Donde_vivo_hay_caracolas_2.jpg`, alt: "Donde vivo hay caracolas II", width: 600, height: 900 },
    ],
    section: "caracolas",
  },
  {
    slug: "arraigo",
    title: "Arraigo",
    titleEn: "Belonging",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "90 x 90 cm",
    images: [{ src: `${PICTORICO}/Arraigo/arraigo.JPG`, alt: "Arraigo", width: 700, height: 694 }],
    section: "arraigo",
  },
  {
    slug: "cimientos",
    title: "Cimientos de nuestro carnaval",
    titleEn: "Roots of our carnival",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    dimensions: "70 x 50 cm",
    images: [{ src: `${PICTORICO}/Arraigo/Cimientos.jpg`, alt: "Cimientos de nuestro carnaval", width: 800, height: 1127 }],
    section: "arraigo",
  },
  {
    slug: "aquellos-dias-de-verano",
    title: "Aquellos días de verano",
    titleEn: "Those summer days",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: [{ src: `${PICTORICO}/Arraigo/Aquellos_dias_de_verano.JPG`, alt: "Aquellos días de verano", width: 700, height: 949 }],
    section: "arraigo",
  },
  {
    slug: "verano-del-24",
    title: "Verano del 24",
    titleEn: "Summer of '24",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: [],
    section: "arraigo",
  },
  {
    slug: "las-ninas",
    title: "Las niñas",
    titleEn: "Girls",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: [],
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
    images: [{ src: `${PICTORICO}/Arraigo/chipiona_y_sevilla.jpg`, alt: "Chipiona y Sevilla", width: 700, height: 1023 }],
    section: "arraigo",
  },
  {
    slug: "agosto-o-abril",
    title: "Agosto o abril",
    titleEn: "August or april",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "73 x 92 cm",
    images: [{ src: `${PICTORICO}/Arraigo/Agosto_o_abril.jpg`, alt: "Agosto o abril", width: 900, height: 722 }],
    section: "arraigo",
  },
  {
    slug: "quien",
    title: "Quién",
    titleEn: "Who",
    year: 2024,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 97 cm",
    images: [{ src: `${PICTORICO}/Arraigo/Quien.jpg`, alt: "Quién", width: 700, height: 945 }],
    section: "arraigo",
  },
  {
    slug: "conchitas",
    title: "Conchitas",
    titleEn: "Lil' shells",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "73 x 92 cm",
    images: [],
    section: "caracolas",
  },
  {
    slug: "luna",
    title: "Luna",
    titleEn: "Moon",
    year: 2026,
    medium: "Acrílico sobre lienzo",
    dimensions: "130 x 89 cm",
    images: [{ src: `${PICTORICO}/Paisaje/Luna.jpg`, alt: "Luna", width: 500, height: 752 }],
    section: "paisaje",
  },
  {
    slug: "instantes-de-oceano",
    title: "Instantes de océano",
    titleEn: "Ocean moments",
    year: 2026,
    medium: "Collage pictórico sobre cartón-pluma",
    dimensions: "21 x 23 cm",
    images: [
      { src: `${PICTORICO}/Paisaje/Instantes_1.png`, alt: "Instante I",   width: 500, height: 457 },
      { src: `${PICTORICO}/Paisaje/Instantes_2.png`, alt: "Instante II",  width: 500, height: 457 },
      { src: `${PICTORICO}/Paisaje/Instantes_3.png`, alt: "Instante III", width: 500, height: 457 },
      { src: `${PICTORICO}/Paisaje/Instantes_4.png`, alt: "Instante IV",  width: 500, height: 457 },
      { src: `${PICTORICO}/Paisaje/Instantes_5.png`, alt: "Instante V",   width: 500, height: 457 },
    ],
    section: "paisaje",
  },
  {
    slug: "mis-cuatro-elementos",
    title: "Mis cuatro elementos",
    titleEn: "My four elements",
    year: 2026,
    medium: "Acrílico sobre tabla",
    dimensions: "33 x 24 cm",
    images: [
      { src: `${PICTORICO}/Paisaje/Agua.jpg`,   alt: "Agua",   width: 500, height: 688 },
      { src: `${PICTORICO}/Paisaje/Aire.jpg`,   alt: "Aire",   width: 500, height: 692 },
      { src: `${PICTORICO}/Paisaje/Fuego.png`,  alt: "Fuego",  width: 500, height: 682 },
      { src: `${PICTORICO}/Paisaje/Tierra.jpg`, alt: "Tierra", width: 500, height: 685 },
    ],
    section: "paisaje",
  },
  {
    slug: "chiquitita",
    title: "Chiquitita",
    titleEn: "Little one",
    year: 2025,
    medium: "Acrílico sobre tabla",
    dimensions: "50 x 61 cm",
    images: [],
    section: "otros",
  },
];

export function getPiece(slug: string): ExhibitionPiece | undefined {
  return EXHIBITION_PIECES.find((p) => p.slug === slug);
}
