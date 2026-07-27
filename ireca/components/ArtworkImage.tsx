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
  offsetX?: number;
  offsetY?: number;
};

export default function ArtworkImage({ src, alt, width, height, fill, className, sizes, offsetX, offsetY }: Props) {
  const { open } = useLightbox();
  const objectPosition = offsetX !== undefined || offsetY !== undefined ? `${offsetX ?? 50}% ${offsetY ?? 50}%` : undefined;

  return (
    <button
      type="button"
      onClick={() => open({ src, alt, width, height })}
      className="group relative block w-full h-full cursor-pointer overflow-hidden text-left"
      aria-label={`Ver «${alt}» en grande`}
    >
      {fill ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={className ?? "object-cover"} style={{ objectPosition }} />
      ) : (
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className={className ?? "w-full h-auto"} style={{ objectPosition }} />
      )}
      <span className="absolute inset-0 bg-[#001D2F]/0 group-hover:bg-[#001D2F]/40 transition-colors pointer-events-none" />
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-white text-lg font-medium">{alt}</span>
      </span>
    </button>
  );
}
