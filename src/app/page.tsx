import React from "react";
import Header from "@/components/header";
import Showcase from "@/components/showcase";
import Footer from "@/components/footer";
import Alphanumeric from "@/components/alphanumeric";
import HowToLoadUp from "@/components/how-to-load-up";
import Gallery from "@/components/gallery";
const Page = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      {/* <main className="relative z-10">
        <Showcase />
        <Gallery />
        <HowToLoadUp />
        <Alphanumeric />
      </main>
      <Footer /> */}
    </div>
  );
};

export default Page;
