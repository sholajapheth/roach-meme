import Image from "next/image";
import React from "react";
import { getImageDimensions } from "../utils/imageUtils";

const Showcase = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-8 min-h-screen relative">
      <div className="flex flex-col items-center justify-center  absolute w-full h-full -z-[50]">
        {/* <div className="absolute inset-0 bg-black/65"></div> */}
        <Image
          src="/web_assets/join_infestation.jpg"
          alt="footer"
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-1/2 text-center order-2 lg:order-1 bg-black/65">
          <h2 className="text-[#8C6239] font-gooddog text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight font-extrabold px-2">
            Roaches Don&apos;t Die. They Multiply.
          </h2>
          <p className="text-[#8C6239] font-gooddog text-2xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-extrabold px-2 max-w-lg lg:max-w-none">
            $ROACH is for the survivors. The filth that never left. The culture
            that will never die. Are you a roach?
          </p>

          {/* <button className="flex items-center bg-transparent border-none cursor-pointer mt-6 sm:mt-8 lg:mt-12 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 rounded-lg">
            <Image
              src="/web_assets/swap_button.png"
              alt="Swap tokens"
              {...getImageDimensions(180)}
              className="object-contain w-[100px] sm:w-[130px] md:w-[150px] lg:w-[180px]"
            />
          </button> */}
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="relative">
            <Image
              src="/web_assets/cock_head.gif"
              alt="Roach character showcase"
              {...getImageDimensions(500)}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* TV Section */}
    </div>
  );
};

export default Showcase;
