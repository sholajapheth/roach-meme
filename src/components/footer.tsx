// import { getImageDimensions } from "@/utils/imageUtils";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-screen text-center">
      <Image
        src="/web_assets/footer_standing_roachs_bg.png"
        alt="Roaches in a desolate city"
        fill
        className="object-cover w-full h-full"
      />
      <div className="w-full h-full flex justify-center items-center">
        <div className="absolute z-10 flex flex-col items-center justify-center h-full -top-20 md:top-0 ">
          <h2 className="text-3xl text-[#d29620] font-gooddog mb-4">
            oUR Social Media
          </h2>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/web_assets/tiktok.png"
                alt="TikTok"
                width={40}
                height={40}
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/web_assets/x-icon.png"
                alt="X"
                width={40}
                height={40}
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Image
                src="/web_assets/instagram-icon.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
