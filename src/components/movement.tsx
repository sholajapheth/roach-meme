"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import { getImageDimensions } from "../utils/imageUtils";

const Movement = () => {
  return (
    <section
      id="movement"
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#8C6239] font-gooddog text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4">
            THE CULTURE
          </h2>
          <div className="w-24 sm:w-32 lg:w-40 h-1 bg-[#8C6239] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}

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
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-6 sm:space-y-8">
            {/* Opening Statement */}
            <div className="bg-gradient-to-br from-[#1a120b] to-[#8C6239] p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  ROACH CULTURE
                </span>{" "}
                is a movement of the unbreakable.
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-relaxed text-center mt-4">
                It&apos;s for{" "}
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  the ones who stayed together.
                </span>
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-relaxed text-center mt-4">
                The ones who endured every storm, every setback, and every
                challenge—and kept crawling forward.
              </p>
            </div>

            {/* Core Philosophy */}
            <div className="bg-gradient-to-br from-[#2d1a0e] to-[#7A5533] p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <p className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center mb-6">
                We don&apos;t cope. We crawl.
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center">
                This isn&apos;t about profit or loss.
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center mt-2">
                This is about surviving the worst parts of life and still
                showing up for your community.
              </p>
            </div>

            {/* Culture Statement */}
            <div className="bg-gradient-to-br from-[#1a120b] to-[#8C6239] p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-center mb-4">
                Roach culture is for the unkillable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold">
                  Built resilient.
                </p>
                <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold">
                  Multiply on impact.
                </p>
              </div>
            </div>

            {/* What It Means Section */}
            <div className="bg-gradient-to-br from-[#2d1a0e] to-[#7A5533] p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <h3 className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6">
                To be a roach means:
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You&apos;ve endured things that would break others
                </p>
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You&apos;ve faced setbacks, obstacles, and kept going
                </p>
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You&apos;ve adapted to every environment
                </p>
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You probably deserve a break
                </p>
                <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl font-extrabold leading-relaxed text-center mt-6 pt-4 border-t-2 border-[#8C6239]">
                  And yet… you&apos;re still here
                </p>
              </div>
            </div>

            {/* Final Statement */}
            <div className="bg-gradient-to-br from-[#8C6239] to-[#7A5533] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
              <p className="text-white font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center mb-4">
                That&apos;s why roach culture isn&apos;t just a meme — it&apos;s
                a <span className="text-yellow-300">badge</span>.
              </p>
              <p className="text-white font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center mb-4">
                A <span className="text-yellow-300">culture</span>.
              </p>
              <p className="text-white font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center">
                A way of <span className="text-yellow-300">coping</span> and
                thriving together.
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-center space-y-6 lg:sticky lg:top-8">
            {/* Main Character Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#8C6239] rounded-full blur-2xl opacity-20 scale-110"></div>
              <Image
                src="/web_assets/roach-coin.jpg"
                alt="The Movement - Roach Survivor"
                width={400}
                height={400}
                className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] rounded-full animate-pulse"
                priority
              />
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-white p-4 rounded-lg border-2 border-[#8C6239] text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl font-extrabold">
                  100%
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  SURVIVAL
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-[#8C6239] text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl font-extrabold">
                  ∞
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  RESILIENCE
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-[#8C6239] text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl font-extrabold">
                  0
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  RUGS
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-[#8C6239] text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl font-extrabold">
                  1
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  COMMUNITY
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <a
                href="https://t.me/the_infestation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#8C6239] hover:bg-[#7A5533] text-white font-gooddog text-lg sm:text-xl font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-50"
              >
                JOIN THE MOVEMENT
                <svg
                  className="ml-3 w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movement;
