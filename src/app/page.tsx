import React from "react";
import Header from "@/components/header";
import Showcase from "@/components/showcase";
import Footer from "@/components/footer";
// import Alphanumeric from "@/components/alphanumeric";
// import HowToLoadUp from "@/components/how-to-load-up";
import Gallery from "@/components/gallery";
import Movement from "@/components/movement";
// import AreYouRoach from "@/components/AreYouRoach";
// import Roadmap from "@/components/Roadmap";
// import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <Showcase />

        <Movement />
        {/* <AreYouRoach /> */}
        {/* <Roadmap /> */}
        <Gallery />
        {/* <HowToLoadUp />
        <Alphanumeric /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Page;
