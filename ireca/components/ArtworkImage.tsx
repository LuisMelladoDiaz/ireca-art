"use client";

import Image from "next/image";
import { useLightbox } from "./Lightbox";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
};

export default function ArtworkImage({ src, alt, width, height, fill, className, sizes }: Props) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open({ src, alt, width, height })}
      className="group relative block w-full h-full cursor-zoom-in overflow-hidden text-left"
      aria-label={`Ver «${alt}» en grande`}
    >
      {fill ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={className ?? "object-cover"} />
      ) : (
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className={className ?? "w-full h-auto"} />
      )}
      <span className="absolute inset-0 bg-[#001D2F]/0 group-hover:bg-[#001D2F]/10 transition-colors pointer-events-none" />
    </button>
  );
}
