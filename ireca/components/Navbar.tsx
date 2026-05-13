import Link from "next/link";

const links = [
  { label: "Statement", href: "#statement" },
  { label: "Obras", href: "#obras" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-14 py-5 bg-[#FFF9F2] border-b border-[#001D2F]/10">
      <span
        className="text-[#001D2F]"
        style={{ fontFamily: "var(--font-belleza)", fontSize: "1.9rem" }}
      >
        ireca
      </span>

      <div className="flex items-center">
        {links.map(({ label, href }, i) => (
          <div key={href} className="flex items-center">
            {i > 0 && (
              <span className="mx-4 block h-px w-5 bg-[#001D2F]/40" />
            )}
            <Link
              href={href}
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-[0.75rem] tracking-[0.22em] uppercase text-[#001D2F]/70 transition-colors hover:text-[#001D2F]"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
