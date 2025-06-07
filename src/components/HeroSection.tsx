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
      {/* Floating roach logo, always visible */}
      {/* Removed the floating roach logo for a cleaner, more creative look */}
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
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          20% {
            transform: rotate(2deg);
          }
          40% {
            transform: rotate(-2deg);
          }
          60% {
            transform: rotate(2deg);
          }
          80% {
            transform: rotate(-2deg);
          }
        }
        .wiggle:hover {
          animation: wiggle 0.5s linear;
        }
        .speech-bubble {
          position: absolute;
          left: 50%;
          top: -2.5em;
          transform: translateX(-50%);
          background: #fffbe6;
          color: #18120b;
          border-radius: 1em;
          padding: 0.5em 1.2em;
          font-family: inherit;
          font-size: 1.2em;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 10;
          white-space: nowrap;
        }
        .speech-bubble::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -12px;
          transform: translateX(-50%);
          border-width: 8px 8px 0 8px;
          border-style: solid;
          border-color: #fffbe6 transparent transparent transparent;
        }
      `}</style>
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-gooddog text-yellow-300 drop-shadow-lg mb-6">
          Roaches Don&apos;t Die.
          <br />
          They Multiply.
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ededed] max-w-3xl mx-auto mb-10 font-gooddog">
          Welcome to the Infestation.
          <br />
          Meme. Survive. Multiply.
        </p>
        <div className="relative flex flex-col items-center">
          <a
            href="#how-to-join"
            className="inline-block bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 text-[#18120b] font-gooddog text-3xl px-12 py-5 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] tracking-widest uppercase transition hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.35)] outline-none focus:ring-4 focus:ring-yellow-200 mb-10 relative group"
            style={{
              letterSpacing: "0.15em",
              textShadow: "0 2px 8px #fffbe6, 0 1px 0 #18120b",
            }}
          >
            JOIN THE SWARM
          </a>
        </div>
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
