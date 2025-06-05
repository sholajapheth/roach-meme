"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

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
    <div className="flex flex-col md:flex-row mt-[2em] items-center justify-between px-4 md:px-8 sticky z-[20] top-0">
      <div className="md:ml-[4em]">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={isMobile ? 150 : 200}
          height={isMobile ? 75 : 100}
          className=""
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50"
        onClick={toggleSidebar}
      >
        <Image
          src={
            isSidebarOpen ? "/web_assets/close-icon.png" : "/web_assets/bar.png"
          }
          alt="menu"
          width={24}
          height={24}
        />
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-[2em] md:gap-6 lg:gap-8 mr-[3em]">
        {[
          { name: "THE CULTURE", section: "#movement" },
          { name: "GALLERY", section: "#gallery" },
          // { name: "HOW TO LOAD", section: "#how-to-load" },
          // { name: "ALPHANUMERIC", section: "#alphanumeric" },
        ].map((item) => (
          <button
            key={item.name}
            className="flex items-center bg-transparent border-none cursor-pointer"
            onClick={() => {
              const el = document.querySelector(item.section);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <h1 className="text-[#8C6239] font-GoodDog text-[2.5em] font-extrabold">
              {item.name}
            </h1>
          </button>
        ))}
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {[
            { name: "ABOUT", section: "#about" },
            { name: "GALLERY", section: "#gallery" },
            // { name: "HOW TO LOAD", section: "#how-to-load" },
            // { name: "ALPHANUMERIC", section: "#alphanumeric" },
          ].map((item) => (
            <button
              key={item.name}
              className="flex items-center bg-transparent border-none cursor-pointer"
              onClick={() => {
                const el = document.querySelector(item.section);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
                setIsSidebarOpen(false);
              }}
            >
              <h1 className="text-[#8C6239] font-gooddog text-[1.8em] font-extrabold">
                {item.name}
              </h1>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
