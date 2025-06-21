"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#collection", label: "collection" },
  { href: "#how-to-join", label: "join me" },
  { href: "#", label: "infestation" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#2b1d0e] bg-opacity-80 backdrop-blur-sm min-h-[100px] flex items-center">
        <div className="container mx-auto px-4 py-2">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/web_assets/cock_head.gif"
                alt="Roach Meme Logo"
                width={120}
                height={120}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-yellow-300 font-gooddog text-2xl lg:text-4xl hover:text-white hover:scale-105 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/web_assets/cock_head.gif"
                alt="Roach Meme Logo"
                width={80}
                height={80}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:scale-110 transition-transform duration-300 relative z-60"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  // Close icon (X)
                  <div className="w-8 h-8 relative">
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 rotate-45 transition-all duration-300"></span>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -rotate-45 transition-all duration-300"></span>
                  </div>
                ) : (
                  // Hamburger icon
                  <Image
                    src="/web_assets/bar.png"
                    alt="menu"
                    width={32}
                    height={32}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#2b1d0e] bg-opacity-98 backdrop-blur-lg">
          {/* Close Button */}
          <div className="absolute top-4 right-4 p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:scale-110 transition-transform duration-300"
              aria-label="Close menu"
            >
              <div className="w-8 h-8 relative">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 rotate-45 transition-all duration-300"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 -rotate-45 transition-all duration-300"></span>
              </div>
            </button>
          </div>

          {/* Centered Menu Content */}
          <div className="flex flex-col items-center justify-center h-full px-8">
            {/* Logo in Menu */}
            <div className="mb-12">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/web_assets/cock_head.gif"
                  alt="Roach Meme Logo"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col items-center space-y-8 w-full">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-yellow-300 font-gooddog text-4xl sm:text-5xl hover:text-white hover:scale-110 transition-all duration-300 text-center w-full py-4 border-b border-yellow-300 border-opacity-20 last:border-b-0"
                  onClick={handleLinkClick}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "slideInFromRight 0.5s ease-out forwards",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Optional: Add social links or additional content */}
            <div className="mt-12 text-center">
              <p className="text-yellow-300 font-gooddog text-xl opacity-70">
                Welcome to the Roach Kingdom
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
