import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EXHIBITION_PIECES, getPiece } from "@/data/exhibitionPieces";
import { getArtworkDescription, getSectionTitle } from "@/data/artworks";
import ArtworkImage from "@/components/ArtworkImage";
import FitOneLineTitle from "@/components/FitOneLineTitle";

export function generateStaticParams() {
  return EXHIBITION_PIECES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return {};

  return {
    title: `${piece.title} — ireca`,
    description: piece.description ?? getArtworkDescription(piece.section),
  };
}

export default async function ObraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const description = piece.description ?? getArtworkDescription(piece.section);
  const sectionTitle = getSectionTitle(piece.section);

  return (
    <main className="min-h-screen bg-[#FFF9F2] flex flex-col pt-24 md:pt-28 pb-24 md:pb-28">
      <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-center px-6 md:px-14">
        <div className="flex-none md:flex-1 w-full md:max-w-fit flex items-center md:justify-start justify-center">
          {piece.images.length === 0 && (
            <div className="w-full max-w-md aspect-4/5 flex items-center justify-center border border-dashed border-[#001D2F]/20">
              <p
                className="italic text-[#001D2F]/35 text-center px-6"
                style={{ fontFamily: "var(--font-belleza)", fontSize: "1.3rem" }}
              >
                Próximamente
              </p>
            </div>
          )}

          {piece.images.length === 1 && (
            <div className="w-fit max-w-full">
              <ArtworkImage
                src={piece.images[0].src}
                alt={piece.images[0].alt}
                width={piece.images[0].width}
                height={piece.images[0].height}
                sizes="(max-width: 768px) 100vw, 60vw"
                className="w-auto h-auto max-w-full max-h-[50vh] md:max-h-[80vh] object-contain"
                priority
                medium={piece.medium}
                dimensions={piece.dimensions}
              />
            </div>
          )}

          {piece.images.length > 1 && (
            <div className="w-full grid grid-cols-2 gap-3 max-h-[50vh] md:max-h-[80vh]">
              {piece.images.map((img) => (
                <div key={img.src} className="relative aspect-square">
                  <ArtworkImage
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    medium={piece.medium}
                    dimensions={piece.dimensions}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:flex-1 md:max-w-md shrink-0 flex flex-col gap-4">
          {sectionTitle && (
            <p
              className="text-[#001D2F]/40 tracking-[0.18em] uppercase text-xs"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
            >
              {sectionTitle}
            </p>
          )}
          <FitOneLineTitle
            className="italic"
            style={{ fontFamily: "var(--font-lato)", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#A11B39", fontWeight: 700 }}
          >
            {piece.title}
          </FitOneLineTitle>
          {(piece.year || piece.medium) && (
            <div className="flex flex-col gap-1">
              {piece.year && (
                <p
                  className="text-[#001D2F]/50 tracking-[0.08em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
                >
                  {piece.year}
                </p>
              )}
              {piece.medium && (
                <p
                  className="text-[#001D2F]/50 tracking-[0.08em] text-xs uppercase"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 500 }}
                >
                  {piece.medium}
                </p>
              )}
            </div>
          )}
          {description && (
            <p
              className="leading-[1.8] text-black text-justify whitespace-pre-line"
              style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
            >
              {description}
            </p>
          )}
          <Link
            href="/archivo-pictorico"
            style={{ fontFamily: "var(--font-barlow)" }}
            className="text-[0.75rem] tracking-[0.18em] uppercase text-[#001D2F]/60 hover:text-[#001D2F] transition-colors"
          >
            ← Volver al archivo
          </Link>
        </div>
      </div>
    </main>
  );
}
