import Footer from "@/components/footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import HowToJoinSection from "@/components/HowToJoinSection";
import LoreSection from "@/components/LoreSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#18120b] text-[#ededed]">
      <HeroSection />
      <LoreSection />
      <GallerySection />
      <HowToJoinSection />
      <Footer />
    </main>
  );
}
