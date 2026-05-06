import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2ec] flex flex-col">

      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large background year */}
      <span
        className="pointer-events-none select-none absolute bottom-0 right-0 leading-none text-[#1a1814]"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          opacity: 0.04,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 300,
          lineHeight: 0.85,
        }}
      >
        2026
      </span>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-14 py-6 z-10">
        <span
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          className="text-2xl font-light tracking-[0.14em] text-[#1a1814]"
        >
          ireca
        </span>
        <a
          href="mailto:irecabarba@gmail.com"
          className="text-[0.62rem] tracking-[0.22em] uppercase text-[#4a7a8f] opacity-70 hover:opacity-100 transition-opacity"
        >
          contacto
        </a>
      </nav>

      {/* Hero */}
      <div className="flex flex-1 flex-col justify-end px-8 md:px-14 pb-16 md:pb-20 z-10">

        {/* Eyebrow */}
        <p
          className="text-[0.6rem] tracking-[0.3em] uppercase text-[#4a7a8f] mb-5 opacity-0"
          style={{ animation: "fadeUp 0.9s 0.2s forwards" }}
        >
          Portfolio en construcción
        </p>

        {/* Title */}
        <h1
          className="opacity-0"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(4.5rem, 11vw, 9rem)",
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#1a1814",
            animation: "fadeUp 0.9s 0.4s forwards",
          }}
        >
          ire<em className="italic" style={{ color: "#4a7a8f" }}>ca</em>
        </h1>

        {/* Statement */}
        <p
          className="mt-8 max-w-sm text-sm leading-[1.9] text-[#1a1814]/60 font-light opacity-0"
          style={{ animation: "fadeUp 0.9s 0.65s forwards" }}
        >
          Artista plástica. Distorsión de los recuerdos, memoria y el mar
          como lugar seguro. Pintura, collage e ilustración en tinta china.
        </p>

        {/* Divider line */}
        <div
          className="mt-10 h-px bg-[#d4c9b0] opacity-0"
          style={{ width: "clamp(3rem,8vw,6rem)", animation: "fadeUp 0.9s 0.8s forwards" }}
        />

        {/* Links */}
        <div
          className="mt-6 flex flex-wrap gap-6 opacity-0"
          style={{ animation: "fadeUp 0.9s 0.95s forwards" }}
        >
          <a
            href="https://instagram.com/irecabarba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.62rem] tracking-[0.2em] uppercase text-[#1a1814]/50 hover:text-[#4a7a8f] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@irecabarba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.62rem] tracking-[0.2em] uppercase text-[#1a1814]/50 hover:text-[#4a7a8f] transition-colors"
          >
            TikTok
          </a>
          <a
            href="mailto:irecabarba@gmail.com"
            className="text-[0.62rem] tracking-[0.2em] uppercase text-[#1a1814]/50 hover:text-[#4a7a8f] transition-colors"
          >
            irecabarba@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <footer
        className="px-8 md:px-14 py-4 flex justify-between items-center border-t border-[#d4c9b0]/40 z-10 opacity-0"
        style={{ animation: "fadeUp 0.9s 1.1s forwards" }}
      >
        <span className="text-[0.58rem] tracking-[0.18em] uppercase text-[#1a1814]/25">
          ireca — Irene Caña Barba
        </span>
        <span className="text-[0.58rem] tracking-[0.18em] uppercase text-[#1a1814]/25">
          Próximamente
        </span>
      </footer>

      {/* Keyframes via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
