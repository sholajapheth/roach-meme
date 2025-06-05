"use client";
import { getImageDimensions } from "@/utils/imageUtils";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/web_assets/roach_fighting_dog.jpg", alt: "Roach fighting dog" },
  { src: "/web_assets/roach_gm.jpg", alt: "Roach GM" },
  { src: "/web_assets/roach_squeezing_dog.jpg", alt: "Roach squeezing dog" },
  { src: "/web_assets/roach_on_money.jpg", alt: "Roach on money" },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (idx: number) => {
    setCurrentIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);
  const showNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, showPrev, showNext]);

  return (
    <div
      id="gallery"
      className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-10 px-4 sm:px-6 lg:px-8"
    >
      <Image
        src="/web_assets/nav/gallery.png"
        alt="gallery"
        {...getImageDimensions(200)}
        className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {galleryImages.map((img, idx) => (
          <button
            key={img.src}
            className="focus:outline-none"
            onClick={() => openModal(idx)}
            tabIndex={0}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            />
          </button>
        ))}
      </div>
      {/* Modal/Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl px-2 focus:outline-none"
              onClick={showPrev}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={800}
              height={600}
              className="rounded-xl max-h-[80vh] w-auto h-auto mx-auto shadow-2xl"
              priority
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl px-2 focus:outline-none"
              onClick={showNext}
              aria-label="Next image"
            >
              &#8594;
            </button>
            <div className="mt-4 text-white text-center text-lg font-gooddog">
              {galleryImages[currentIndex].alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
