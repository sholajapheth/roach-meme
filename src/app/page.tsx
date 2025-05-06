import React from "react";
import Header from "@/components/header";
import Showcase from "@/components/showcase";
import Footer from "@/components/footer";
import Alphanumeric from "@/components/alphanumeric";

const Page = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <Showcase />
        <Alphanumeric />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
