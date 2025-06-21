import CollectionSection from "@/components/CollectionSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import HowToJoinSection from "@/components/HowToJoinSection";

export default function Page() {
  return (
    <main className="min-h-screen text-[#ededed]">
      <HeroSection />
      <CollectionSection />
      <GallerySection />
      <HowToJoinSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
