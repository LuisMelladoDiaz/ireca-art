import type { Metadata } from "next";
import ArchivoTintaSection from "@/components/ArchivoTintaSection";

export const metadata: Metadata = {
  title: "Archivo de Tinta — ireca",
  description: "Archivo de tinta china de Irene Caña Barba (ireca).",
};

export default function ArchivoTintaPage() {
  return (
    <main className="relative bg-[#FFF9F2]">
      <ArchivoTintaSection />
    </main>
  );
}
