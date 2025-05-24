import Image from "next/image";
import React from "react";

const AreYouRoach = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 ">
      <div className="max-w-6xl mx-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-[#8C6239] to-transparent"></div>
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-[#8C6239] font-gooddog text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6">
              Are You a Roach?
            </h2>
            <div className="w-32 sm:w-40 lg:w-48 h-1 bg-[#8C6239] mx-auto rounded-full"></div>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Side - Character Visual */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#8C6239] rounded-full blur-3xl opacity-30 scale-125 animate-pulse"></div>

                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/web_assets/cock_head.gif"
                    alt="Roach Character"
                    width={350}
                    height={350}
                    className="relative w-[250px] sm:w-[300px] lg:w-[350px] rounded-full border-4 border-[#8C6239] shadow-2xl"
                    priority
                  />

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white font-gooddog text-sm sm:text-base font-extrabold px-3 py-1 rounded-full shadow-lg animate-bounce">
                    RUGGED 3X
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-2/3 space-y-6 sm:space-y-8">
              {/* Quiz Questions */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-8 border-red-500 shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed">
                    If you&apos;ve been{" "}
                    <span className="text-red-600">
                      rugged 3 times this week
                    </span>{" "}
                    and you&apos;re still scrolling charts...
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-8 border-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed">
                    If your{" "}
                    <span className="text-orange-600">
                      MetaMask is a museum of dead tokens
                    </span>
                    ...
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-8 border-yellow-500 shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed">
                    If you&apos;ve ever told yourself{" "}
                    <span className="text-yellow-600">
                      &quot;maybe it&apos;ll bounce&quot;
                    </span>
                    ...
                  </p>
                </div>
              </div>

              {/* Revelation */}
              <div className="bg-gradient-to-r from-[#8C6239] to-[#7A5533] p-8 sm:p-10 lg:p-12 rounded-2xl shadow-2xl text-center">
                <p className="text-white font-gooddog text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                  You&apos;re not a trader.
                </p>
                <p className="text-yellow-300 font-gooddog text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  You&apos;re a roach.
                </p>
                <p className="text-white font-gooddog text-xl sm:text-2xl md:text-3xl font-extrabold leading-relaxed">
                  Welcome home.
                </p>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-6">
                <a
                  href="https://t.me/the_infestation" // Updated with actual Telegram link
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-gooddog text-xl sm:text-2xl font-extrabold px-8 sm:px-12 py-4 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 group"
                >
                  <svg
                    className="mr-3 w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  JOIN THE NEST
                  <svg
                    className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
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

                <p className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold mt-4 opacity-80">
                  Connect with fellow survivors on Telegram
                </p>
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6 mt-4">
                  <a
                    href="https://x.com/your_x_handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                  >
                    <Image
                      src="/web_assets/x-icon.png"
                      alt="X social icon"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a
                    href="https://tiktok.com/@your_tiktok_handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <Image
                      src="/web_assets/tiktok.png"
                      alt="TikTok social icon"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-red-500 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-red-600 font-gooddog text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  99%
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  RUGGED
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-orange-500 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-600 font-gooddog text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  100+
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  DEAD TOKENS
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-yellow-500 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-yellow-600 font-gooddog text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  ∞
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  FALSE HOPE
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-green-500 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 font-gooddog text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  1
                </div>
                <div className="text-[#8C6239] font-gooddog text-sm sm:text-base font-bold">
                  TRUE HOME
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreYouRoach;
