import content from "@/data/content.json";

const { email, instagram, location } = content.contact;

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#FFF9F2] border-t border-[#001D2F]/15 px-8 md:px-14 py-12 md:py-16"
    >
      <div className="flex flex-col items-center text-center md:flex-row md:items-end md:text-left justify-between gap-10">

        {/* Marca */}
        <div>
          <p
            className="leading-none text-[#001D2F]"
            style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            ireca
          </p>
          <p
            className="mt-2 text-[#001D2F]/45 tracking-[0.18em] uppercase text-xs"
            style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
          >
            {location}
          </p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <a
            href={`mailto:${email}`}
            className="text-[#001D2F]/65 hover:text-[#001D2F] transition-colors"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
          >
            {email}
          </a>
          <a
            href={`https://instagram.com/${instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001D2F]/65 hover:text-[#001D2F] transition-colors"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
          >
            {instagram}
          </a>
        </div>

      </div>

      {/* Copyright */}
      <p
        className="mt-12 text-[#001D2F]/30 text-xs tracking-[0.15em]"
        style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}
      >
        © {new Date().getFullYear()} Irene Caña Barba
      </p>

    </footer>
  );
}
