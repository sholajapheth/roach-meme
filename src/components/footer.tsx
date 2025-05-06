import { getImageDimensions } from "@/utils/imageUtils";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      <button className="flex items-center bg-transparent border-none cursor-pointer">
        <Image
          src="/web_assets/swap_button.png"
          alt="Alphanumeric"
          {...getImageDimensions(300)}
          className="object-contain absolute top-1/6 -translate-y-1/2 right-1/8 -translate-x-1/2"
        />
      </button>
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/web_assets/footer.png"
          alt="footer"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
