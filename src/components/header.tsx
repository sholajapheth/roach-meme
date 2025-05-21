"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { name: "ABOUT", section: "#about" },
  { name: "GALLERY", section: "#gallery" },
  { name: "HOW TO LOAD", section: "#how-to-load" },
  { name: "ALPHANUMERIC", section: "#alphanumeric" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Better responsive breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Changed to lg breakpoint for better mobile experience
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // Smooth scroll function instead of hash navigation
  const scrollToSection = useCallback(
    (sectionId) => {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if (isModalOpen) {
        closeModal();
      }
    },
    [isModalOpen, closeModal]
  );

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      <header className="relative w-full bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={isMobile ? 140 : 180}
              height={isMobile ? 70 : 90}
              className="rounded-full transition-transform duration-200 hover:scale-105"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item.name}
                className="group relative bg-transparent border-none cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50"
                onClick={() => scrollToSection(item.section)}
                aria-label={`Navigate to ${item.name.toLowerCase()} section`}
              >
                <span className="text-amber-800 font-gooddog text-2xl xl:text-3xl font-extrabold group-hover:text-amber-900 transition-colors duration-200">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></div>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300"
            onClick={openModal}
            aria-label="Open navigation menu"
            aria-expanded={isModalOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-5 h-0.5 bg-amber-800 transition-all duration-300 ${
                  isModalOpen ? "rotate-45 translate-y-1" : "mb-1"
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-amber-800 transition-all duration-300 ${
                  isModalOpen ? "opacity-0" : "mb-1"
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-amber-800 transition-all duration-300 ${
                  isModalOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></div>
            </div>
          </button>
        )}
      </header>

      {/* Mobile Navigation Modal */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div className="relative flex items-center justify-center min-h-screen p-4">
            <div
              className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto transform transition-all duration-300 ${
                isModalOpen
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 translate-y-4"
              }`}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2
                  id="mobile-menu-title"
                  className="text-lg font-semibold text-gray-900"
                >
                  Navigation
                </h2>
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  onClick={closeModal}
                  aria-label="Close navigation menu"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <ul className="space-y-4">
                  {NAV_LINKS.map((item, index) => (
                    <li key={item.name}>
                      <button
                        className="w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-amber-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 group"
                        onClick={() => scrollToSection(item.section)}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="text-amber-800 font-gooddog text-xl font-extrabold group-hover:text-amber-900 transition-colors duration-200">
                          {item.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
