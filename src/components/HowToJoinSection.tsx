"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HowToJoinSection() {
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    function updateConstraints() {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setConstraints({
          left: 0,
          right: width - 80,
          top: 0,
          bottom: height - 80,
        });
      }
    }
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section
      id="how-to-join"
      className="py-16 px-4 bg-[#18120b] text-[#ededed] text-center relative overflow-hidden"
    >
      {/* Background roach pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/web_assets/roach_pattern.png"
          alt="Roach pattern background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 max-w-5xl mx-auto mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left md:text-center w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gooddog text-yellow-300 mb-6 font-extrabold">
            The Culture
          </h2>

          {/* Timeline/Roach Trail for The Culture */}
          <div className="relative flex flex-col items-center mt-10 mb-16">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-300/80 to-yellow-700/40 rounded-full -translate-x-1/2 z-0"
              style={{ minHeight: "420px" }}
            />

            {/* Timeline stops */}
            <div className="relative z-10 w-full max-w-xl mx-auto">
              {/* The Movement */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center mb-12"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#18120b] border-4 border-yellow-300 flex items-center justify-center shadow-xl mr-6">
                  <Image
                    src="/web_assets/nft.jpg"
                    alt="Meme icon"
                    width={80}
                    height={80}
                    className="w-14 h-14 object-contain rounded-full"
                    unoptimized
                  />
                </div>
                <div className="flex-1 bg-[#22180e]/80 p-6 rounded-xl border-2 border-yellow-300/30">
                  <h3 className="text-2xl font-gooddog text-yellow-300 mb-2">
                    The Movement
                  </h3>
                  <p>
                    ROACH CULTURE is a movement of the unbreakable. It&apos;s
                    for the ones who stayed together. The ones who endured every
                    storm, every setback, and every challenge—and kept crawling
                    forward. We don&apos;t cope. We crawl.
                  </p>
                </div>
              </motion.div>
              {/* The Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center mb-12 flex-row-reverse"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#18120b] border-4 border-yellow-300 flex items-center justify-center shadow-xl ml-6">
                  <Image
                    src="/web_assets/nft.jpg"
                    alt="Meme icon"
                    width={80}
                    height={80}
                    className="w-14 h-14 object-contain rounded-full"
                    unoptimized
                  />
                </div>
                <div className="flex-1 bg-[#22180e]/80 p-6 rounded-xl border-2 border-yellow-300/30 text-right">
                  <h3 className="text-2xl font-gooddog text-yellow-300 mb-2">
                    The Purpose
                  </h3>
                  <p>
                    This isn&apos;t about profit or loss. This is about
                    surviving the worst parts of life and still showing up for
                    your community. Roach culture is for the unkillable. Built
                    resilient. Multiply on impact.
                  </p>
                </div>
              </motion.div>
              {/* To Be a Roach */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center mb-12"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#18120b] border-4 border-yellow-300 flex items-center justify-center shadow-xl mr-6">
                  <Image
                    src="/web_assets/nft.jpg"
                    alt="Meme icon"
                    width={80}
                    height={80}
                    className="w-14 h-14 object-contain rounded-full"
                    unoptimized
                  />
                </div>
                <div className="flex-1 bg-[#22180e]/80 p-6 rounded-xl border-2 border-yellow-300/30">
                  <h3 className="text-2xl font-gooddog text-yellow-300 mb-2">
                    To Be a Roach
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You&apos;ve endured things that would break others</li>
                    <li>
                      You&apos;ve faced setbacks, obstacles, and kept going
                    </li>
                    <li>You&apos;ve adapted to every environment</li>
                    <li>You probably deserve a break</li>
                  </ul>
                  <p className="mt-2">And yet… you&apos;re still here</p>
                </div>
              </motion.div>
              {/* The Badge */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex items-center flex-row-reverse"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#18120b] border-4 border-yellow-300 flex items-center justify-center shadow-xl ml-6">
                  <Image
                    src="/web_assets/nft.jpg"
                    alt="Meme icon"
                    width={80}
                    height={80}
                    className="w-14 h-14 object-contain rounded-full"
                    unoptimized
                  />
                </div>
                <div className="flex-1 bg-[#22180e]/80 p-6 rounded-xl border-2 border-yellow-300/30 text-right">
                  <h3 className="text-2xl font-gooddog text-yellow-300 mb-2">
                    The Badge
                  </h3>
                  <p>
                    That&apos;s why roach culture isn&apos;t just a meme —
                    it&apos;s a badge. A culture. A way of coping and thriving
                    together.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#22180e]/80 p-6 rounded-xl border-2 border-yellow-300/30"
            >
              <h3 className="text-2xl font-gooddog text-yellow-300 mb-4">
                The Path
              </h3>
              <ol className="text-lg sm:text-xl font-gooddog text-yellow-200 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-3xl">🪳</span>
                  <span>Sniff out the crumbs. (Memes are everywhere.)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">👥</span>
                  <span>
                    Find your fellow roaches. (Telegram/Discord below.)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">🎭</span>
                  <span>Post memes. (Bonus points for roach puns.)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-3xl">💪</span>
                  <span>Never die. (Roaches are forever.)</span>
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#22180e]/80 p-6 rounded-xl border-2 border-yellow-300/30"
            >
              <h3 className="text-2xl font-gooddog text-yellow-300 mb-4">
                The Community
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://t.me/the_infestation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-yellow-300 text-[#18120b] font-gooddog text-xl px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/20"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-2xl">📱</span>
                    Join Telegram
                  </span>
                </a>
                <a
                  href="#"
                  className="group bg-yellow-300 text-[#18120b] font-gooddog text-xl px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/20"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🎮</span>
                    Join Discord
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6 justify-center mt-8"
          >
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative group">
                <Image
                  src={`/web_assets/${num}.png`}
                  alt={`Meme Step ${num}`}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-yellow-300 bg-[#22180e] transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-[#18120b] px-3 py-1 rounded-full text-sm font-gooddog opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Step {num}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Removed Television Showcase Section */}

      {/* Floating Interactive Roach Coin */}
      <style jsx global>{`
        .roach-coin-floating {
          position: fixed;
          right: 2vw;
          bottom: 2vw;
          z-index: 50;
          width: 80px;
          height: 80px;
          cursor: grab;
          touch-action: none;
        }
        @media (max-width: 640px) {
          .roach-coin-floating {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
      <motion.div
        className="roach-coin-floating"
        drag
        dragMomentum={false}
        whileTap={{ scale: 1.2, rotate: 12 }}
        whileHover={{ scale: 1.1 }}
        dragElastic={0.4}
        dragConstraints={constraints}
      >
        <Image
          src="/web_assets/roach-coin.jpg"
          alt="Roach Coin"
          width={80}
          height={80}
          draggable={false}
          unoptimized
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </section>
  );
}
