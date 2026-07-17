import type { Metadata } from "next";
import ArchivoPlctoricoSection from "@/components/ArchivoPlctoricoSection";

export const metadata: Metadata = {
  title: "Archivo Pictórico — ireca",
  description: "Archivo emocional pictórico de Irene Caña Barba (ireca).",
};

export default function ArchivoPictoricoPage() {
  return (
    <main className="relative bg-[#FFF9F2]">
      <ArchivoPlctoricoSection />
    </main>
  );
}
