import type { Metadata } from "next";
import { Cormorant_Garamond, Belleza, Barlow, Lato } from "next/font/google";
import { LightboxProvider } from "@/components/Lightbox";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ireca — Irene Caña Barba",
  description: "Portfolio de Irene Caña Barba — Artista plástica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${belleza.variable} ${barlow.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF9F2]">
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}
