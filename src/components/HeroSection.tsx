"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[90vh] py-16 px-4 text-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #18120b 60%, #2d1a0e 100%)",
      }}
    >
      {/* Background meme apocalypse */}
      <img
        src="/web_assets/join_infestation.jpg"
        alt="Roach apocalypse"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-70 pointer-events-none"
        draggable="false"
      />
      {/* Floating meme coin */}
      <img
        src="/web_assets/roach-coin.jpg"
        alt="Roach Coin"
        className="absolute top-10 right-10 w-24 h-24 animate-bounce-subtle z-10 hidden md:block"
        style={{ filter: "drop-shadow(0 0 16px #ffe066)" }}
        draggable="false"
      />
      <style jsx global>{`
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-gooddog text-yellow-300 drop-shadow-lg mb-4">
          Roaches Don&apos;t Die.
          <br />
          They Multiply.
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-[#ededed] max-w-2xl mx-auto mb-8 font-gooddog">
          Welcome to the Infestation.
          <br />
          Meme. Survive. Multiply.
        </p>
        <a
          href="#how-to-join"
          className="inline-block bg-yellow-300 text-[#18120b] font-gooddog text-2xl px-10 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition mb-10 animate-pulse"
        >
          JOIN THE SWARM
        </a>
        <div className="flex justify-center">
          <Image
            src="/web_assets/cock_head.gif"
            alt="Roach Mascot"
            width={220}
            height={220}
            className="rounded-full border-4 border-yellow-300 shadow-2xl bg-[#18120b] animate-bounce-subtle"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
