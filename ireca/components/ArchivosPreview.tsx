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

const tintaImages = [
  { src: "/images/archivo_tinta/Llaves/Llave_1.jpg", alt: "Llaves", width: 500, height: 703, offsetY: 25 },
];

type PreviewImage = { src: string; alt: string; width: number; height: number; offsetX?: number; offsetY?: number };

function ArchiveCard({
  title,
  text,
  images,
  href,
}: {
  title: string;
  text: string;
  images: PreviewImage[];
  href: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3">

      <Link href={href} className="w-fit">
        <p
          className="italic hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)", color: "#001D2F", fontWeight: 700 }}
        >
          {title}
        </p>
      </Link>

      <div className="flex gap-2">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`relative flex-1 aspect-square overflow-hidden ${i === 0 ? "" : "hidden md:block"}`}
          >
            <ArtworkImage
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              fill
              sizes="(max-width: 768px) 40vw, 16vw"
              offsetX={img.offsetX}
              offsetY={img.offsetY}
            />
          </div>
        ))}
      </div>

      <p
        className="leading-[1.7] text-[#001D2F]/60 text-justify"
        style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
      >
        {text}
      </p>

      <Link
        href={href}
        className="w-fit text-[#001D2F]/70 tracking-[0.18em] uppercase text-xs hover:text-[#001D2F] transition-colors"
        style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
      >
        Ver archivo →
      </Link>
    </div>
  );
}

export default function ArchivosPreview() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-24 border-t border-[#001D2F]/8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14 md:gap-3">
        <div className="md:col-span-4">
          <ArchiveCard
            title={pictorico.title}
            text={pictorico.previewText}
            images={pictoricoImages}
            href="/archivo-pictorico"
          />
        </div>
        <div className="hidden md:block md:col-span-1" aria-hidden="true" />
        <div className="md:col-span-1">
          <ArchiveCard title={tinta.title} text={tinta.previewText} images={tintaImages} href="/archivo-tinta" />
        </div>
      </div>
    </section>
  );
}
