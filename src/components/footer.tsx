// import { getImageDimensions } from "@/utils/imageUtils";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-[#18120b] text-center border-t border-[#2d1a0e] mt-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 justify-center mb-2">
          <a
            href="https://t.me/the_infestation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-yellow-300 transition"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Discord"
            className="hover:text-yellow-300 transition"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.074.074 0 0 0-.079.037c-.34.607-.719 1.396-.984 2.01a18.524 18.524 0 0 0-5.453 0 12.51 12.51 0 0 0-.997-2.01.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.684 4.369a.069.069 0 0 0-.032.027C.533 8.159-.32 11.81.099 15.404a.082.082 0 0 0 .031.056c2.052 1.507 4.041 2.422 5.992 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .078.009c.12.099.245.198.372.292a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.891.076.076 0 0 0-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 0 0 .03-.055c.5-4.073-.838-7.666-3.548-10.998a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
            </svg>
          </a>
        </div>
        <div className="text-yellow-300 font-gooddog text-lg">
          © {new Date().getFullYear()} Roach Infestation
        </div>
        <div className="text-[#6d4c1a] text-xs">
          Built with inspiration from{" "}
          <a
            href="https://www.catbal.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-300"
          >
            catbal.io
          </a>
        </div>
      </div>
    </footer>
  );
}
