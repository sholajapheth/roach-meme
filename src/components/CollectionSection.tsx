"use client";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const collectionImages = [
  { src: "/web_assets/roach-siked.jpg", alt: "Siked Roach" },
  { src: "/web_assets/roach-thinking.jpg", alt: "Thinking Roach" },
  { src: "/web_assets/gladiator-roach.jpg", alt: "Gladiator Roach" },
  { src: "/web_assets/roach-crowned.jpg", alt: "Crowned Roach" },
  { src: "/web_assets/roach_fighting_dog.jpg", alt: "Roach fighting dog" },
  { src: "/web_assets/roach_gm.jpg", alt: "Roach GM" },
];

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-8 sm:-right-16 transform -translate-y-1/2 z-10"
    >
      <Image
        src="/web_assets/collection/collection_section_right_chevron.png"
        alt="Next"
        width={32}
        height={32}
      />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-8 sm:-left-16 transform -translate-y-1/2 z-10"
    >
      <Image
        src="/web_assets/collection/collection_section_left_chevron.png"
        alt="Previous"
        width={32}
        height={32}
      />
    </button>
  );
}

export default function CollectionSection() {
  const settings = {
    className: "collection-carousel",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",

    slidesToShow: 3,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
          arrows: false,
        },
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SlickSlider = Slider as any;

  return (
    <section id="collection" className="py-16 px-4 text-center overflow-hidden">
      <div className="flex justify-center mb-8">
        <h2 className="text-4xl text-yellow-300 font-gooddog">collection</h2>
      </div>

      <div className="max-w-4xl mx-auto py-12">
        <SlickSlider {...settings}>
          {collectionImages.map((image, idx) => (
            <div key={idx} className="px-2 md:px-4">
              <div className="relative w-full h-[300px] mx-auto">
                <Image
                  src="/web_assets/collection/collection_section_item_frame.png"
                  alt="Frame"
                  fill
                  className="absolute z-0"
                />
                <div className="absolute inset-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-4xl text-yellow-300 font-gooddog mb-4">
          ABOUT COLLECTION
        </h3>
        <p className="text-2xl text-yellow-300 mt-8">
          This isn&apos;t just a collection; it&apos;s a testament to survival.
          Each roach is a survivor, a pixelated warrior hardened by market
          winters and rugged landscapes. They&apos;ve crawled through the filth
          to emerge stronger, tougher, and ready for the next apocalypse. Owning
          one doesn&apos;t make you a collector, it makes you part of the swarm.
        </p>
      </div>
    </section>
  );
}
