import CollectionSection from "@/components/CollectionSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/footer";
import GallerySlider from "@/components/GallerySlider";
import HeroSection from "@/components/HeroSection";
import HowToJoinSection from "@/components/HowToJoinSection";
import RoachCrawler from "@/components/RoachCrawler";


export default function Page() {
  return (
    <main className="min-h-screen text-[#ededed] relative overflow-hidden">
      <RoachCrawler />
      <HeroSection />
      <div className="max-w-screen overflow-hidden">
        <CollectionSection />
      </div>
      {/* <GallerySection /> */}
      <GallerySlider />
      <HowToJoinSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
