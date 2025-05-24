import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 "
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-[#8C6239] font-gooddog text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6">
            ROADMAP
          </h2>
          <div className="w-24 sm:w-32 lg:w-40 h-1 bg-[#8C6239] mx-auto rounded-full mb-6"></div>
          <p className="text-[#8C6239] font-gooddog text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            The survival plan for total market domination
          </p>
        </div>

        {/* Placeholder for Custom Graphic */}
        <div className="flex justify-center items-center">
          <Image
            src="/web_assets/road_map.jpg"
            alt="Roadmap"
            width={1000}
            height={1000}
          />
        </div>

        {/* Roadmap Timeline */}

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="bg-gradient-to-r from-[#8C6239] to-[#7A5533] p-8 sm:p-10 lg:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-white font-gooddog text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              READY TO SURVIVE THE JOURNEY?
            </h3>
            <p className="text-amber-100 font-gooddog text-lg sm:text-xl md:text-2xl font-bold mb-8">
              Join the movement and help us achieve immortality
            </p>
            <a
              href="https://t.me/the_infestation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#8C6239] hover:bg-gray-100 font-gooddog text-xl sm:text-2xl font-extrabold px-8 sm:px-12 py-4 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              JOIN THE NEST
              <svg
                className="ml-3 w-6 h-6 sm:w-8 sm:h-8"
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
    </section>
  );
};

export default Roadmap;
