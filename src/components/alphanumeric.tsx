import React from "react";
import Image from "next/image";
import { getImageDimensions } from "@/utils/imageUtils";

const Alphanumeric = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[8em] mb-[1em] relative">
      <button className="flex items-center bg-transparent border-none cursor-pointer">
        <Image
          src="/web_assets/nav/alphanumeric.png"
          alt="Alphanumeric"
          {...getImageDimensions(300)}
          className="object-contain absolute top-1/6 -translate-y-1/2 left-1/3 -translate-x-1/2"
        />
      </button>
      <div className="flex flex-col items-center justify-center gap-8 mt-[8em] ">
        <Image
          src="/web_assets/alphanumeric.png"
          alt="alphanumeric"
          {...getImageDimensions(1000)}
          priority
        />
      </div>
    </div>
  );
};

export default Alphanumeric;
