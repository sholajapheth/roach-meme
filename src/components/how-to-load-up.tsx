import { getImageDimensions } from "@/utils/imageUtils";
import Image from "next/image";
import React from "react";

const HowToLoadUp = () => {
  return (
    <div
      id="how-to-load"
      className="flex flex-col items-center justify-center gap-4 mt-10"
    >
      <Image
        src="/web_assets/how-to-load-up-text.png"
        alt="how to load up"
        {...getImageDimensions(250)}
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-8">
        <Image
          src="/web_assets/1.png"
          alt="how to load up"
          {...getImageDimensions(250)}
        />
        <Image
          src="/web_assets/2.png"
          alt="how to load up"
          {...getImageDimensions(200)}
        />

        <Image
          src="/web_assets/3.png"
          alt="how to load up"
          {...getImageDimensions(250)}
        />
      </div>
    </div>
  );
};

export default HowToLoadUp;
