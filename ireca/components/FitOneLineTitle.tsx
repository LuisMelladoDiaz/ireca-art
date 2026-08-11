"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  minFontSizePx?: number;
};

// Encoge el font-size (partiendo del que resulte del `style` recibido, p.ej. un clamp())
// hasta que el texto quepa en una sola línea dentro de su contenedor, en cualquier ancho de pantalla.
export default function FitOneLineTitle({ children, className, style, minFontSizePx = 12 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  // El techo real de tamaño (p.ej. "clamp(2.2rem, 4vw, 3.2rem)"). Debe guardarse aparte: una vez
  // que fit() escribe un valor en px sobre el mismo style inline, el clamp original se pierde y
  // cualquier ejecución posterior (resize, doble efecto de Strict Mode) partiría de un tamaño ya
  // encogido en vez del original, resultando en un texto cada vez más pequeño.
  const originalFontSize = style?.fontSize;

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    function fit() {
      if (!container || !text) return;
      text.style.fontSize = originalFontSize != null ? String(originalFontSize) : "";
      const baseSize = parseFloat(getComputedStyle(text).fontSize);
      let size = baseSize;
      text.style.fontSize = `${size}px`;
      while (text.scrollWidth > container.clientWidth && size > minFontSizePx) {
        size -= 1;
        text.style.fontSize = `${size}px`;
      }
    }

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [children, minFontSizePx, originalFontSize]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <p ref={textRef} className={className} style={{ ...style, whiteSpace: "nowrap" }}>
        {children}
      </p>
    </div>
  );
}
