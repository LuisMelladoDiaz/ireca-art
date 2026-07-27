"use client";

import { useState, type CSSProperties } from "react";

export default function ExpandableBio({
  paragraphs,
  paragraphClassName,
  paragraphStyle,
}: {
  paragraphs: string[];
  paragraphClassName?: string;
  paragraphStyle?: CSSProperties;
}) {
  const [expanded, setExpanded] = useState(false);
  const [first, ...rest] = paragraphs;

  return (
    <>
      <p className={paragraphClassName} style={paragraphStyle}>
        {first}
      </p>

      {rest.length > 0 && (
        <>
          <div className={`${expanded ? "flex flex-col gap-5" : "hidden"} md:contents`}>
            {rest.map((p, i) => (
              <p key={i} className={paragraphClassName} style={paragraphStyle}>
                {p}
              </p>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="md:hidden self-start text-[#468B97] tracking-[0.1em] uppercase text-sm"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
          >
            {expanded ? "Leer menos" : "Leer más..."}
          </button>
        </>
      )}
    </>
  );
}
