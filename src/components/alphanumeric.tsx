import React from "react";
import Image from "next/image";
import { getImageDimensions } from "@/utils/imageUtils";

const Alphanumeric = () => {
  return (
    <div
      id="alphanumeric"
      className="flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-6 md:mb-8 relative px-4 sm:px-6 lg:px-8"
    >
      <button className="flex items-center bg-transparent border-none cursor-pointer relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
        <Image
          src="/web_assets/nav/alphanumeric.png"
          alt="Alphanumeric"
          {...getImageDimensions(300)}
          className="object-contain w-full"
        />
      </button>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 w-full">
        <Image
          src="/web_assets/alphanumeric.png"
          alt="alphanumeric"
          {...getImageDimensions(1000)}
          className="w-full max-w-[300px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]"
          priority
        />
      </div>
    </div>
  );
};

export default Alphanumeric;
