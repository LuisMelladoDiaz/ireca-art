import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";
import { getArtwork } from "@/data/artworks";

const pictorico = content.obras.archivoEmocional;
const tinta = content.obras.archivoTinta;

const pictoricoImages = ["arraigo", "fuego", "agosto-o-abril", "reli-abu"].map((slug) => getArtwork(slug)!);

const tintaImages = [
  { src: "/images/archivo_tinta/Llaves/Llave_1.jpg", alt: "Llaves", width: 500, height: 703 },
];

type PreviewImage = { src: string; alt: string; width: number; height: number };

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
    <Link href={href} className="group flex flex-1 flex-col gap-6">
      <div className="flex gap-2">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`relative flex-1 aspect-square overflow-hidden ${i === 0 ? "" : "hidden md:block"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 40vw, 16vw"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <p
          className="italic"
          style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#A11B39", fontWeight: 700 }}
        >
          {title}
        </p>
        <p
          className="leading-[1.8] text-[#001D2F]/60 line-clamp-3"
          style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
        >
          {text}
        </p>
        <span
          className="mt-1 text-[#001D2F]/70 tracking-[0.18em] uppercase text-xs group-hover:text-[#001D2F] transition-colors"
          style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
        >
          Ver archivo →
        </span>
      </div>
    </Link>
  );
}

export default function ArchivosPreview() {
  return (
    <section className="bg-[#FFF9F2] px-6 md:px-14 py-16 md:py-24 border-t border-[#001D2F]/8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-14 md:gap-3">
        <div className="md:col-span-4">
          <ArchiveCard
            title={pictorico.title}
            text={pictorico.intro[0].text}
            images={pictoricoImages}
            href="/archivo-pictorico"
          />
        </div>
        <div className="hidden md:block md:col-span-1" aria-hidden="true" />
        <div className="md:col-span-1">
          <ArchiveCard title={tinta.title} text={tinta.intro} images={tintaImages} href="/archivo-tinta" />
        </div>
      </div>
    </section>
  );
}
