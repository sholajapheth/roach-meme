import Image from "next/image";
import React from "react";
import { getImageDimensions } from "../utils/imageUtils";

const Showcase = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="/web_assets/showcase_text.png"
            alt="showcase"
            {...getImageDimensions(500)}
          />
          <Image
            src="/web_assets/showcase_subtext.png"
            alt="showcase"
            {...getImageDimensions(500)}
          />

          <button className="flex items-center bg-transparent border-none cursor-pointer mt-28">
            <Image
              src="/web_assets/swap_button.png"
              alt="swap"
              {...getImageDimensions(180)}
              className="object-contain"
            />
          </button>
        </div>
        <Image
          src="/web_assets/cock_head.gif"
          alt="showcase"
          {...getImageDimensions(500)}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 mt-10 relative">
        <Image
          src="/web_assets/tv.png"
          alt="showcase"
          className="z-"
          {...getImageDimensions(1000)}
        />

        <Image
          src="/web_assets/cock_watching.png"
          alt="showcase"
          className="absolute -bottom-3 "
          {...getImageDimensions(800)}
        />
      </div>
    </div>
  );
};

export default Showcase;
