"use client";
import Image from "next/image";
import React from "react";
import { getImageDimensions } from "../utils/imageUtils";
import ReactPlayer from "react-player";

const Showcase = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-1/2 text-center order-2 lg:order-1">
          <h2 className="text-[#8C6239] font-gooddog text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight font-extrabold px-2">
            Roaches Don&apos;t Die. They Multiply.
          </h2>
          <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-extrabold px-2 max-w-lg lg:max-w-none">
            $ROACH is for the survivors. The filth that never left. The culture
            that will never die. Are you a roach?
          </p>

          <button className="flex items-center bg-transparent border-none cursor-pointer mt-6 sm:mt-8 lg:mt-12 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 rounded-lg">
            <Image
              src="/web_assets/swap_button.png"
              alt="Swap tokens"
              {...getImageDimensions(180)}
              className="object-contain w-[100px] sm:w-[130px] md:w-[150px] lg:w-[180px]"
            />
          </button>
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
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 relative">
        <div className="relative w-full max-w-[500px] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1000px]">
          <Image
            src="/web_assets/tv.png"
            alt="Television showcase"
            className="w-full h-auto "
            {...getImageDimensions(1000)}
            priority
          />
          {/* Video Container */}
          <div className="absolute -z-10 top-[3%] left-[14%] w-[72%] h-[80%] overflow-hidden">
            <ReactPlayer
              url="/web_assets/roach-meme-video.mp4"
              width="100%"
              height="100%"
              playing={true}
              loop={true}
              controls={true}
              // muted={true}
              playsinline
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Roach Character with Bounce Animation */}
          <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[85%] lg:w-[90%] animate-bounce-subtle">
            <Image
              src="/web_assets/cock_watching.png"
              alt="Character watching TV"
              className="w-full h-auto"
              {...getImageDimensions(800)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
