import { getImageDimensions } from "@/utils/imageUtils";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8">
      <button className="flex items-center bg-transparent border-none cursor-pointer">
        <Image
          src="/web_assets/swap_button.png"
          alt="Alphanumeric"
          {...getImageDimensions(200)}
          className="object-contain absolute top-[10%] sm:top-[12%] md:top-[15%] -translate-y-1/2 right-[12%] sm:right-[10%] md:right-[8%] -translate-x-1/2 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px]"
        />
      </button>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <Image
          src="/web_assets/footer.png"
          alt="footer"
          {...getImageDimensions(1000)}
          className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
