import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTWORKS, getArtwork, getArtworkDescription, getSectionTitle } from "@/data/artworks";

export function generateStaticParams() {
  return ARTWORKS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) return {};

  const description = getArtworkDescription(artwork.section);

  return {
    title: `${artwork.alt} — ireca`,
    description,
  };
}

export default async function ObraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  const description = getArtworkDescription(artwork.section);
  const sectionTitle = getSectionTitle(artwork.section);

  return (
    <main className="min-h-screen bg-[#FFF9F2] flex flex-col pt-24 md:pt-28">
      <div className="px-6 md:px-14 pb-4">
        <Link
          href="/archivo-pictorico"
          style={{ fontFamily: "var(--font-barlow)" }}
          className="text-[0.75rem] tracking-[0.18em] uppercase text-[#001D2F]/60 hover:text-[#001D2F] transition-colors"
        >
          ← Volver al archivo
        </Link>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-center px-6 md:px-14 pb-16 md:pb-0">
        <div className="flex-1 w-full flex items-center justify-center">
          <Image
            src={artwork.src}
            alt={artwork.alt}
            width={artwork.width}
            height={artwork.height}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="w-auto h-auto max-w-full object-contain"
            style={{ maxHeight: "80vh" }}
            priority
          />
        </div>

        <div className="w-full md:w-80 shrink-0 flex flex-col gap-4">
          {sectionTitle && (
            <p
              className="text-[#001D2F]/40 tracking-[0.18em] uppercase text-xs"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
            >
              {sectionTitle}
            </p>
          )}
          <p
            className="italic"
            style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#A11B39", fontWeight: 700 }}
          >
            {artwork.alt}
          </p>
          {description && (
            <p
              className="leading-[1.8] text-[#001D2F]/60"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
