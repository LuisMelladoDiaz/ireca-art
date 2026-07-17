import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import AboutSection from "@/components/AboutSection";
import ArchivosPreview from "@/components/ArchivosPreview";

export default function Home() {
  return (
    <main className="relative bg-[#FFF9F2]">
      <HeroSection />
      <ArchivosPreview />
      <AboutSection />
      <StatementSection />
    </main>
  );
}
