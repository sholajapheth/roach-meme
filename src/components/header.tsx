"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getImageDimensions } from "../utils/imageUtils";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 
      py-4 md:py-8 w-full"
    >
      <div className="flex w-full md:w-auto justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={isMobile ? 150 : 200}
          height={isMobile ? 75 : 100}
          className="rounded-full"
        />

        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="flex flex-col justify-center items-center gap-1 p-2"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        )}
      </div>

      {isMobile ? (
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col pt-16 px-6`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>

          <div className="flex flex-col items-center justify-start gap-6 mt-6 w-full">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={100}
              height={50}
              className="rounded-full mb-4"
            />

            <button className="flex items-center bg-transparent border-none cursor-pointer">
              <Image
                src="/web_assets/nav/about.png"
                alt="About"
                width={60}
                height={15}
                className="object-contain"
              />
            </button>

            <button className="flex items-center bg-transparent border-none cursor-pointer">
              <Image
                src="/web_assets/nav/gallery.png"
                alt="Gallery"
                width={90}
                height={15}
                className="object-contain"
              />
            </button>

            <button className="flex items-center bg-transparent border-none cursor-pointer">
              <Image
                src="/web_assets/nav/how-to-load.png"
                alt="How to load"
                width={160}
                height={15}
                className="object-contain"
              />
            </button>

            <button className="flex items-center bg-transparent border-none cursor-pointer">
              <Image
                src="/web_assets/nav/alphanumeric.png"
                alt="Alphanumeric"
                width={135}
                height={15}
                className="object-contain"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
          <button className="flex items-center bg-transparent border-none cursor-pointer">
            <Image
              src="/web_assets/nav/about.png"
              alt="About"
              {...getImageDimensions(80)}
              className="object-contain"
            />
          </button>

          <button className="flex items-center bg-transparent border-none cursor-pointer">
            <Image
              src="/web_assets/nav/gallery.png"
              alt="Gallery"
              {...getImageDimensions(120)}
              className="object-contain"
            />
          </button>

          <button className="flex items-center bg-transparent border-none cursor-pointer">
            <Image
              src="/web_assets/nav/how-to-load.png"
              alt="How to load"
              {...getImageDimensions(210)}
              className="object-contain"
            />
          </button>

          <button className="flex items-center bg-transparent border-none cursor-pointer">
            <Image
              src="/web_assets/nav/alphanumeric.png"
              alt="Alphanumeric"
              {...getImageDimensions(180)}
              className="object-contain"
            />
          </button>
        </div>
      )}

      {/* Overlay when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Header;
