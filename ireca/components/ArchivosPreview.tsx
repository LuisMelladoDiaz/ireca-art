import Link from "next/link";
import content from "@/data/content.json";
import { getArtwork } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";

const pictorico = content.obras.archivoEmocional;
const tinta = content.obras.archivoTinta;

const pictoricoSlugs: { slug: string; offsetX?: number; offsetY?: number }[] = [
  { slug: "arraigo" },
  { slug: "agosto-o-abril" },
  { slug: "agua" },
  { slug: "aquellos-dias-de-verano", offsetY: 100 },
];

const pictoricoImages = pictoricoSlugs.map(({ slug, offsetX, offsetY }) => ({
  ...getArtwork(slug)!,
  offsetX,
  offsetY,
}));

// Fotos específicas para la versión móvil del preview — elige aquí los slugs que quieras ver.
const pictoricoSlugsMovil: { slug: string; offsetX?: number; offsetY?: number }[] = [
  { slug: "aquellos-dias-de-verano", offsetY: 100 },
  { slug: "agua" },
];

const pictoricoImagesMovil = pictoricoSlugsMovil.map(({ slug, offsetX, offsetY }) => ({
  ...getArtwork(slug)!,
  offsetX,
  offsetY,
}));

const tintaImages = [
  { src: "/images/archivo_tinta/Llaves/Llave_1.jpg", alt: "Llaves", width: 500, height: 703, offsetY: 25 },
];

type PreviewImage = { src: string; alt: string; width: number; height: number; offsetX?: number; offsetY?: number };

function ImageTile({ img, className = "" }: { img: PreviewImage; className?: string }) {
  return (
    <div className={`relative aspect-square overflow-hidden ${className}`}>
      <ArtworkImage
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        fill
        sizes="(max-width: 768px) 30vw, 16vw"
        offsetX={img.offsetX}
        offsetY={img.offsetY}
      />
    </div>
  );
}

function ArchiveCard({
  title,
  text,
  images,
  mobileImages = images,
  href,
  mobileImageCols,
}: {
  title: string;
  text: string;
  images: PreviewImage[];
  mobileImages?: PreviewImage[];
  href: string;
  mobileImageCols: number;
}) {
  return (
    <div className="grid grid-cols-[2fr_3fr] gap-x-4 gap-y-2 md:flex md:flex-1 md:flex-col md:gap-3">

      <Link href={href} className="col-start-2 row-start-1 w-fit md:order-1">
        <p
          className="italic hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)", color: "#001D2F", fontWeight: 700 }}
        >
          {title}
        </p>
      </Link>

      {/* Fotos — móvil */}
      <div
        className="col-start-1 row-start-1 row-span-3 grid gap-2 md:hidden"
        style={{ gridTemplateColumns: `repeat(${mobileImageCols}, minmax(0, 1fr))` }}
      >
        {mobileImages.map((img) => (
          <ImageTile key={img.src} img={img} />
        ))}
      </div>

      {/* Fotos — desktop */}
      <div className="hidden md:order-2 md:flex md:gap-2">
        {images.map((img) => (
          <ImageTile key={img.src} img={img} className="md:flex-1" />
        ))}
      </div>

      <p
        className="col-start-2 row-start-2 leading-[1.7] text-[#001D2F]/60 text-justify md:order-3"
        style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
      >
        {text}
      </p>

      <Link
        href={href}
        className="col-start-2 row-start-3 w-fit text-[#001D2F]/70 tracking-[0.18em] uppercase text-xs hover:text-[#001D2F] transition-colors md:order-4"
        style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
      >
        Ver obras →
      </Link>
    </div>
  );
}

export default function ArchivosPreview() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-24 border-t border-[#001D2F]/8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-24 md:gap-3">
        <div className="md:col-span-4">
          <ArchiveCard
            title={pictorico.title}
            text={pictorico.previewText}
            images={pictoricoImages}
            mobileImages={pictoricoImagesMovil}
            href="/archivo-pictorico"
            mobileImageCols={1}
          />
        </div>
        <div className="hidden md:block md:col-span-1" aria-hidden="true" />
        <div className="md:col-span-1">
          <ArchiveCard
            title={tinta.title}
            text={tinta.previewText}
            images={tintaImages}
            href="/archivo-tinta"
            mobileImageCols={1}
          />
        </div>
      </div>
    </section>
  );
}
