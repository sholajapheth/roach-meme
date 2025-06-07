// import { getImageDimensions } from "@/utils/imageUtils";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Image
        src={"/web_assets/footer.jpeg"}
        alt="cock head"
        width={100}
        height={100}
        className="w-full h-auto"
        unoptimized
      />
      <footer className="w-full py-8 px-4 bg-[#18120b] text-center border-t border-[#2d1a0e] mt-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 justify-center mb-2">
            <a
              href="https://x.com/your_x_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/web_assets/x-icon.png"
                alt="X"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://tiktok.com/@your_tiktok_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/web_assets/tiktok.png"
                alt="TikTok"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/web_assets/instagram-icon.png"
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="text-yellow-300 font-gooddog text-lg">
            © {new Date().getFullYear()} Roach Infestation
          </div>
        </div>
      </footer>
    </>
  );
}
