import React from "react";

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "INFESTATION",
      status: "COMPLETED",
      items: [
        "Token Launch",
        "Community Building",
        "Meme Creation",
        "First Survivors Gather",
      ],
      color: "green",
    },
    {
      phase: "Phase 2",
      title: "MULTIPLICATION",
      status: "IN PROGRESS",
      items: [
        "Marketing Campaign",
        "Telegram Community Growth",
        "Influencer Partnerships",
        "Viral Spread",
      ],
      color: "yellow",
    },
    {
      phase: "Phase 3",
      title: "DOMINATION",
      status: "UPCOMING",
      items: [
        "Major Exchange Listings",
        "Ecosystem Development",
        "Partnerships",
        "Global Recognition",
      ],
      color: "blue",
    },
    {
      phase: "Phase 4",
      title: "IMMORTALITY",
      status: "FUTURE",
      items: [
        "Cross-Chain Expansion",
        "DeFi Integrations",
        "Roach NFT Collection",
        "Survival Protocol Launch",
      ],
      color: "purple",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-600 bg-green-100 border-green-300";
      case "IN PROGRESS":
        return "text-yellow-600 bg-yellow-100 border-yellow-300";
      case "UPCOMING":
        return "text-blue-600 bg-blue-100 border-blue-300";
      case "FUTURE":
        return "text-purple-600 bg-purple-100 border-purple-300";
      default:
        return "text-gray-600 bg-gray-100 border-gray-300";
    }
  };

  const getPhaseColor = (color: string) => {
    const colors: Record<string, string> = {
      green: "from-green-500 to-green-600 border-green-400",
      yellow: "from-yellow-500 to-orange-500 border-yellow-400",
      blue: "from-blue-500 to-blue-600 border-blue-400",
      purple: "from-purple-500 to-purple-600 border-purple-400",
    };
    return colors[color] || "from-gray-500 to-gray-600 border-gray-400";
  };

  return (
    <section
      id="roadmap"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-amber-50"
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
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 border-4 border-dashed border-[#8C6239] rounded-2xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
            <div className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              🎨 CUSTOM ROADMAP GRAPHIC
            </div>
            <p className="text-[#8C6239] font-gooddog text-lg sm:text-xl font-bold">
              Awaiting @Bv19std&apos;s artistic masterpiece
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#8C6239] rounded-full opacity-20 animate-pulse flex items-center justify-center">
                <span className="text-white font-gooddog text-4xl sm:text-5xl">
                  🪳
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#8C6239] hidden lg:block"></div>

          {/* Roadmap Phases */}
          <div className="space-y-12 lg:space-y-16">
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12 relative">
                  <div className="bg-white rounded-2xl border-2 border-[#8C6239] shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow">
                    {/* Phase Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`bg-gradient-to-r ${getPhaseColor(
                          phase.color
                        )} text-white px-4 py-2 rounded-lg border-2 font-gooddog text-lg sm:text-xl font-extrabold`}
                      >
                        {phase.phase}
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full border-2 font-gooddog text-sm font-bold ${getStatusColor(
                          phase.status
                        )}`}
                      >
                        {phase.status}
                      </div>
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-[#8C6239] font-gooddog text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
                      {phase.title}
                    </h3>

                    {/* Phase Items */}
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center text-[#8C6239] font-gooddog text-base sm:text-lg font-bold"
                        >
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPhaseColor(
                              phase.color
                            )} mr-3 flex-shrink-0`}
                          ></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow Connector for Desktop */}
                  <div
                    className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? "-right-8" : "-left-8"
                    }`}
                  >
                    <div
                      className={`w-0 h-0 ${
                        index % 2 === 0
                          ? "border-l-8 border-l-[#8C6239] border-y-8 border-y-transparent"
                          : "border-r-8 border-r-[#8C6239] border-y-8 border-y-transparent"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-[#8C6239] rounded-full border-4 border-white shadow-lg relative z-10">
                    <div className="absolute inset-0 bg-[#8C6239] rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

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
