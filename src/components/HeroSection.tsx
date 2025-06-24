"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Main Red Curtain Background */}
      <Image
        src="/web_assets/roach_show/the_raoch_show_main_red_curtain_bg.png"
        alt="Roach Show Red Curtain Background"
        fill
        className="object-cover"
        quality={100}
      />

      {/* The Roach Show Text and Light Bulb Display */}
      <div className="absolute top-1/4 md:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[80%] md:w-1/2">
        <Image
          src="/web_assets/roach_show/the_raoch_show_text_and_light_bulb_display.png"
          alt="The Roach Show Sign"
          width={800}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="absolute   z-40 w-full h-full">
        <Image
          src="/web_assets/roach_show/the_raoch_show_full_curtain_dsiaplay.png"
          alt="The Roach Show Sign"
          width={800}
          height={400}
          objectFit="contain"
          className="w-full h-full"
        />
      </div>

      {/* Left Curtain */}
      {/* <div className="absolute top-0 left-0 h-full w-1/2 z-20">
        <Image
          src="/web_assets/roach_show/the_raoch_show_left_curtain.png"
          alt="Left Curtain"
          fill
          className="object-contain object-left"
        />
      </div> */}

      {/* Right Curtain */}
      {/* <div className="absolute top-0 right-0 h-full w-1/2 z-20">
        <Image
          src="/web_assets/roach_show/the_raoch_show_right_curtain.png"
          alt="Right Curtain"
          fill
          className="object-contain object-right"
        />
      </div> */}

      {/* Floor */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 z-10">
        <Image
          src="/web_assets/roach_show/the_raoch_show_floor.png"
          alt="Stage Floor"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Lightening Effect */}
      <div className="absolute -top-10 sm:top-0 left-0 w-full h-full z-40 pointer-events-none">
        <Image
          src="/web_assets/roach_show/the_raoch_show_lightening.png"
          alt="Lighting Effect"
          fill
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}
