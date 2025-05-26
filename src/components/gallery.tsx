import { getImageDimensions } from "@/utils/imageUtils";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-10 px-4 sm:px-6 lg:px-8"
    >
      <Image
        src="/web_assets/nav/gallery.png"
        alt="gallery"
        {...getImageDimensions(200)}
        className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
      />
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 w-full">
        <button className="flex items-center bg-transparent border-none cursor-pointer">
          <Image
            src="/web_assets/arrow.png"
            alt="previous"
            className="rotate-180 w-[30px] sm:w-[40px] md:w-[50px]"
            {...getImageDimensions(50)}
          />
        </button>
        <div className="flex-1 max-w-[300px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]">
          <Image
            src="/web_assets/border_gallery.png"
            alt="gallery"
            {...getImageDimensions(1000)}
            className="w-full"
          />
        </div>
        <button className="flex items-center bg-transparent border-none cursor-pointer">
          <Image
            src="/web_assets/arrow.png"
            alt="next"
            className="w-[30px] sm:w-[40px] md:w-[50px]"
            {...getImageDimensions(50)}
          />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
