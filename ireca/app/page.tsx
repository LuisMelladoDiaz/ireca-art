import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import ArchivoTintaSection    from "@/components/ArchivoTintaSection";
import ArchivoPlctoricoSection from "@/components/ArchivoPlctoricoSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="relative bg-[#FFF9F2]">

      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <ArchivoPlctoricoSection />
      <ArchivoTintaSection />

    </main>
  );
}
