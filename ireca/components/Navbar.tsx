"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Statement",          href: "#statement" },
  { label: "Archivo Pictórico",  href: "#archivo-pictorico" },
  { label: "Archivo de Tinta",   href: "#obras" },
  { label: "Sobre mí",           href: "#sobre-mi" },
  { label: "Contacto",           href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FFF9F2] border-b border-[#001D2F]/10">

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 md:px-14 py-5">
        <span
          className="text-[#001D2F]"
          style={{ fontFamily: "var(--font-belleza)", fontSize: "1.9rem" }}
        >
          ireca
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          {links.map(({ label, href }, i) => (
            <div key={href} className="flex items-center">
              {i > 0 && <span className="mx-4 block h-px w-5 bg-[#001D2F]/40" />}
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

        {/* Mobile — hamburger / close */}
        <button
          className="md:hidden p-1 text-[#001D2F]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="7"  x2="22" y2="7"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — dropdown */}
      {open && (
        <div className="md:hidden flex flex-col px-8 pb-7 pt-2 gap-6 border-t border-[#001D2F]/10">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{ fontFamily: "var(--font-barlow)" }}
              className="text-[0.85rem] tracking-[0.22em] uppercase text-[#001D2F]/70 hover:text-[#001D2F] transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
