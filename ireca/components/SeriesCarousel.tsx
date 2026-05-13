"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

interface SeriesCarouselProps {
  images: CarouselImage[];
  perPage?: number;
}

export default function SeriesCarousel({ images, perPage = 2 }: SeriesCarouselProps) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / perPage);
  const visible = images.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="w-full">
      {/* Images */}
      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${perPage}, 1fr)` }}>
        {visible.map(({ src, alt }) => (
          <div key={src} className="relative aspect-[4/3] bg-[#e8e4dc]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes={`(max-width: 768px) 100vw, ${Math.round(100 / perPage)}vw`}
            />
          </div>
        ))}
        {/* Empty slot if odd number on last page */}
        {visible.length < perPage && <div className="aspect-[4/3]" />}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-6 mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{ fontFamily: "var(--font-barlow)" }}
            className={`text-[0.7rem] tracking-[0.2em] transition-colors ${
              i === page
                ? "text-[#001D2F]"
                : "text-[#001D2F]/30 hover:text-[#001D2F]/60"
            }`}
          >
            {i + 1}/{totalPages}
          </button>
        ))}
      </div>
    </div>
  );
}
