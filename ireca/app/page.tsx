import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ══ LADO IZQUIERDO — Contenido ══ */}
      <div
        className="relative z-10 w-full lg:w-[45%] min-h-screen flex flex-col"
        style={{ background: "var(--background)" }}
      >
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 md:px-12 py-6">
          <span
            className="text-xl tracking-[0.2em]"
            style={{
              fontFamily: "'Belleza', Georgia, serif",
              color: "var(--foreground)",
            }}
          >
            ireca
          </span>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {["obra", "sobre mí", "cv"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.replace(" ", "-")}`}
                    className="text-[0.6rem] tracking-[0.22em] uppercase transition-colors"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                      color: "var(--subtititles)",
                      opacity: 0.7,
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="mailto:irecabarba@gmail.com"
              className="text-[0.6rem] tracking-[0.22em] uppercase px-4 py-2 transition-all"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                color: "var(--foreground)",
                border: "1px solid var(--details)",
                background: "transparent",
              }}
            >
              contacto
            </a>
          </div>
        </nav>

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 pb-16">

          {/* Eyebrow */}
          <p
            className="opacity-0 mb-6"
            style={{
              animation: "fadeUp 0.8s 0.2s forwards",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-strong)",
            }}
          >
            Artista plástica · Sevilla
          </p>

          {/* Nombre */}
          <h1
            className="opacity-0"
            style={{
              animation: "fadeUp 0.9s 0.35s forwards",
              fontFamily: "'Belleza', Georgia, serif",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              color: "var(--foreground)",
            }}
          >
            Irene<br />
            <span style={{ color: "var(--subtititles)" }}>Caña Barba</span>
          </h1>

          {/* Línea decorativa */}
          <div
            className="opacity-0 my-8"
            style={{
              animation: "fadeUp 0.8s 0.5s forwards",
              height: "1px",
              width: "4rem",
              background: "var(--details)",
            }}
          />

          {/* Statement */}
          <p
            className="opacity-0 max-w-sm"
            style={{
              animation: "fadeUp 0.9s 0.65s forwards",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "0.9rem",
              lineHeight: 1.9,
              color: "var(--foreground)",
              opacity: 0.75,
            }}
          >
            Distorsión de los recuerdos, memoria y el mar como lugar seguro.
            Pintura, collage e ilustración en tinta china.
          </p>

          {/* Botones */}
          <div
            className="opacity-0 mt-10 flex flex-wrap gap-4"
            style={{ animation: "fadeUp 0.9s 0.8s forwards" }}
          >
            <a
              href="#obra"
              className="text-[0.6rem] tracking-[0.2em] uppercase px-8 py-3 transition-all"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              Ver obra
            </a>
            <a
              href="#sobre-mi"
              className="text-[0.6rem] tracking-[0.2em] uppercase px-8 py-3 transition-all"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                color: "var(--foreground)",
                border: "1px solid var(--foreground)",
                background: "transparent",
                opacity: 0.7,
              }}
            >
              Sobre mí
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="px-8 md:px-12 py-5 flex justify-between items-center"
          style={{ borderTop: "1px solid var(--details)" }}
        >
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--subtititles)",
              opacity: 0.5,
            }}
          >
            © 2026
          </span>

          <div className="flex gap-6">
            {[
              { label: "Instagram", href: "https://instagram.com/irecabarba" },
              { label: "TikTok", href: "https://tiktok.com/@irecabarba" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--subtititles)",
                  opacity: 0.5,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </footer>
      </div>

      {/* ══ LADO DERECHO — Imagen ══ */}
      <div className="hidden lg:block relative w-[55%] min-h-screen">
        <Image
          src="/archivo_pictorico/Hero.JPG"
          alt="Obra de Ireca"
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.95) saturate(1.05)" }}
        />

        {/* Overlay sutil con color del esquema */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, var(--background) 0%, transparent 15%)",
          }}
        />

        {/* Texto decorativo */}
        <span
          className="absolute bottom-8 right-8 select-none pointer-events-none"
          style={{
            fontFamily: "'Belleza', Georgia, serif",
            fontSize: "8rem",
            lineHeight: 0.85,
            color: "var(--background)",
            opacity: 0.08,
          }}
        >
          2026
        </span>
      </div>

      {/* Imagen de fondo para móvil */}
      <div
        className="lg:hidden absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, var(--background) 60%, transparent 100%)`,
        }}
      >
        <Image
          src="/archivo_pictorico/Hero.JPG"
          alt="Obra de Ireca"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}