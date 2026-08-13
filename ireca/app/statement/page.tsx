import type { Metadata } from "next";
import StatementSection from "@/components/StatementSection";

export const metadata: Metadata = {
  title: "Statement — ireca",
  description: "Statement artístico de Irene Caña Barba (ireca).",
};

export default function StatementPage() {
  return (
    <main className="relative bg-[#FFF9F2]">
      <StatementSection />
    </main>
  );
}
