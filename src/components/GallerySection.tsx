"use client";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  {
    src: "/web_assets/cockroach_world_meeting.jpg",
    alt: "Roach World Meeting",
  },
  { src: "/web_assets/roach_fighting_dog.jpg", alt: "Roach fighting dog" },
  { src: "/web_assets/roach_gm.jpg", alt: "Roach GM" },
  { src: "/web_assets/roach_squeezing_dog.jpg", alt: "Roach squeezing dog" },
  { src: "/web_assets/roach_on_money.jpg", alt: "Roach on money" },
];

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 z-10"
    >
      <div className="hidden sm:block">
        <Image
          src="/web_assets/gallery/gallery_arrow_right.png"
          alt="Next"
          width={48}
          height={48}
        />
      </div>
      <div className="sm:hidden">
        <Image
          src="/web_assets/gallery/gallery_arrow_right.png"
          alt="Next"
          width={32}
          height={32}
        />
      </div>
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 z-10"
    >
      <div className="hidden sm:block">
        <Image
          src="/web_assets/gallery/gallery_arrow_left.png"
          alt="Previous"
          width={48}
          height={48}
        />
      </div>
      <div className="sm:hidden">
        <Image
          src="/web_assets/gallery/gallery_arrow_left.png"
          alt="Previous"
          width={32}
          height={32}
        />
      </div>
    </button>
  );
}

export default function GallerySection() {
  const settings = {
    className: "gallery-carousel",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SlickSlider = Slider as any;

  return (
    <section className="py-16 px-4 text-center overflow-hidden">
      <div className="flex justify-center mb-8">
        <h2 className="text-4xl text-yellow-300 font-gooddog">Gallery</h2>
      </div>

      <div className="max-w-4xl mx-auto md:py-12">
        <SlickSlider {...settings}>
          {galleryImages.map((image, idx) => (
            <div key={idx} className="px-2">
              <div className="relative w-full h-[250px] sm:h-[400px]">
                <Image
                  src="/web_assets/gallery/gallery_picture_frame.png"
                  alt="Frame"
                  fill
                  className="absolute z-0 object-contain"
                />
                <div className="absolute inset-8 sm:inset-12">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
}
