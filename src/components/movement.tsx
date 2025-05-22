import Image from "next/image";
import React from "react";

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
            THE MOVEMENT
          </h2>
          <div className="w-24 sm:w-32 lg:w-40 h-1 bg-[#8C6239] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-2/3 space-y-6 sm:space-y-8">
            {/* Opening Statement */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  $ROACH
                </span>{" "}
                is a memecoin — and a movement.
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-relaxed text-center mt-4">
                It&apos;s for{" "}
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  the ones who stayed.
                </span>
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-relaxed text-center mt-4">
                The ones who held through{" "}
                <span className="text-red-600">
                  rugs, nukes, scams, zero liquidity,
                </span>{" "}
                and Discord mods named{" "}
                <span className="text-blue-600">&quot;Steve.&quot;</span>
              </p>
            </div>

            {/* Core Philosophy */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <p className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center mb-6">
                We don&apos;t cope. We crawl.
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center">
                This isn&apos;t about utility.
              </p>
              <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center mt-2">
                This is about surviving the worst parts of crypto and still
                hitting the{" "}
                <span className="text-green-600">&quot;buy&quot;</span> button.
              </p>
            </div>

            {/* Culture Statement */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-relaxed text-center mb-4">
                $ROACH is a culture for the unkillable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold">
                  Built disgusting.
                </p>
                <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold">
                  Multiply on impact.
                </p>
              </div>
            </div>

            {/* What It Means Section */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#8C6239] shadow-lg">
              <h3 className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6">
                To be a roach means:
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You&apos;ve bagheld things that never launched
                </p>
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You&apos;ve been rugged, sniped, front-run, and still aped
                </p>
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You&apos;ve added on red candles
                </p>
                <p className="text-[#8C6239] font-gooddog text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  ✗ You probably deserve zero
                </p>
                <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl font-extrabold leading-relaxed text-center mt-6 pt-4 border-t-2 border-[#8C6239]">
                  And yet… you&apos;re still here
                </p>
              </div>
            </div>

            {/* Final Statement */}
            <div className="bg-gradient-to-br from-[#8C6239] to-[#7A5533] p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
              <p className="text-white font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center mb-4">
                That&apos;s why $ROACH isn&apos;t just a coin — it&apos;s a{" "}
                <span className="text-yellow-300">badge.</span>
              </p>
              <p className="text-white font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center mb-4">
                A <span className="text-yellow-300">culture.</span>
              </p>
              <p className="text-white font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-center">
                A way of <span className="text-yellow-300">coping.</span>
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-center space-y-6 lg:sticky lg:top-8">
            {/* Main Character Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#8C6239] rounded-full blur-2xl opacity-20 scale-110"></div>
              <Image
                src="/web_assets/cock_head.gif"
                alt="The Movement - Roach Survivor"
                width={400}
                height={400}
                className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] rounded-full"
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
