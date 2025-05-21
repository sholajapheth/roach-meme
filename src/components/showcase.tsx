import Image from "next/image";
import React from "react";
import { getImageDimensions } from "../utils/imageUtils";

const Showcase = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 ">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full md:w-1/2">
          <Image
            src="/web_assets/showcase_text.png"
            alt="showcase"
            {...getImageDimensions(500)}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            priority
          />
          <Image
            src="/web_assets/showcase_subtext.png"
            alt="showcase"
            {...getImageDimensions(500)}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />

          <button className="flex items-center bg-transparent border-none cursor-pointer mt-12 sm:mt-20 md:mt-28">
            <Image
              src="/web_assets/swap_button.png"
              alt="swap"
              {...getImageDimensions(180)}
              className="object-contain w-[120px] sm:w-[150px] md:w-[180px]"
            />
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/web_assets/cock_head.gif"
            alt="showcase"
            {...getImageDimensions(500)}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 relative">
        <Image
          src="/web_assets/tv.png"
          alt="showcase"
          className="z-0 w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px]"
          {...getImageDimensions(1000)}
        />

        {/* <Image
          src="/web_assets/cock_watching.png"
          alt="showcase"
          className="absolute -bottom-3 w-full max-w-[500px] sm:max-w-[650px] md:max-w-[800px]"
          {...getImageDimensions(800)}
        /> */}
      </div>
    </div>
  );
};

export default Showcase;
