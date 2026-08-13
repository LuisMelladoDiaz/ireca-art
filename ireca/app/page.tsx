import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArchivosPreview from "@/components/ArchivosPreview";

export default function Home() {
  return (
    <main className="relative bg-[#FFF9F2]">
      <HeroSection />
      <ArchivosPreview />
      <AboutSection />
    </main>
  );
}
