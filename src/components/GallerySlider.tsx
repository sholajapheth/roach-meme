"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { PrevArrow, NextArrow } from "./GallerySection";

const slides = [
  { id: 1, src: "/web_assets/roach_fighting_dog.jpg", alt: "Roach fighting dog" },
  { id: 2, src: "/web_assets/roach_gm.jpg", alt: "Roach GM" },
  { id: 3, src: "/web_assets/roach_squeezing_dog.jpg", alt: "Roach squeezing dog" },
  { id: 4, src: "/web_assets/roach_on_money.jpg", alt: "Roach on money" },
  { id: 4, src: "/web_assets/roach-crowned.jpg", alt: "Roach on money" },
  { id: 4, src: "/web_assets/roach-fx.jpg", alt: "Roach on money" },
  { id: 4, src: "/web_assets/roach-thinking.jpg", alt: "Roach on money" },
  { id: 4, src: "/web_assets/gladiator-roach.jpg", alt: "Roach on money" },
  // Add more as needed
];

const totalSlides = slides.length;

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) nextSlide();
      else prevSlide();
    }
  };

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalSlides / 2) {
      normalizedDiff = diff > 0 ? diff - totalSlides : diff + totalSlides;
    }
    const isCenter = normalizedDiff === 0;
    const absIndex = Math.abs(normalizedDiff);

    if (absIndex > 3) {
      return { transform: "scale(0.7)", opacity: 0, zIndex: 0 };
    }

    const baseTranslateX = normalizedDiff * 120;
    const baseScale = isCenter ? 1 : Math.max(0.6, 1 - absIndex * 0.2);
    const baseOpacity = isCenter ? 1 : Math.max(0.4, 1 - absIndex * 0.2);

    return {
      transform: `translateX(${baseTranslateX}px) scale(${baseScale})`,
      opacity: baseOpacity,
      zIndex: isCenter ? 10 : 10 - absIndex,
    };
  };

  return (
    <section
      id="gallery"
      className="py-16 px-2 sm:px-4 text-center overflow-hidden"
    >
      <h2 className="text-4xl text-[#d29620] font-gooddog mb-8">Gallery</h2>
      <div className="relative w-full max-w-5xl mx-auto">
        <div
          className="relative h-72 sm:h-96 flex items-center justify-center"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute w-[20em] sm:w-[30em] h-[13em] sm:h-[18em] transition-all duration-700 ease-out rounded-xl cursor-pointer  overflow-hidden"
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              <div className="absolute inset-0 z-10 pointer-events-none">
                <Image
                  src="/web_assets/gallery/gallery_picture_frame.png"
                  alt="Frame"
                  width={100}
                  height={100}
                  className="w-[20em] sm:w-[30em] h-[13em] sm:h-[18em]"
                />
              </div>
              <div className="absolute inset-4 z-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
      
          <PrevArrow onClick={prevSlide}/>

    
          <NextArrow   onClick={nextSlide}/>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex

                ? "bg-[#a88031] scale-125"
                : "bg-[#322820] hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 