import Image from "next/image";

export default function HowToJoinSection() {
  return (
    <section
      id="how-to-join"
      className="py-16 px-4 bg-[#18120b] text-[#ededed] text-center relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-10 max-w-5xl mx-auto mb-10">
        <div className="flex-1 text-left md:text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gooddog text-yellow-300 mb-6 font-extrabold">
            Join the Swarm
          </h2>
          <ol className="max-w-xl mx-auto text-lg sm:text-xl font-gooddog mb-10 text-left list-decimal list-inside text-yellow-200">
            <li>Sniff out the crumbs. (Memes are everywhere.)</li>
            <li>Find your fellow roaches. (Telegram/Discord below.)</li>
            <li>Post memes. (Bonus points for roach puns.)</li>
            <li>Never die. (Roaches are forever.)</li>
          </ol>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            <a
              href="https://t.me/the_infestation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 text-[#18120b] font-gooddog text-xl px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition"
            >
              Join Telegram
            </a>
            <a
              href="#"
              className="bg-yellow-300 text-[#18120b] font-gooddog text-xl px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition"
            >
              Join Discord
            </a>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <Image
              src="/web_assets/1.png"
              alt="Meme Step 1"
              width={60}
              height={60}
              className="rounded-full border-2 border-yellow-300 bg-[#22180e]"
              unoptimized
            />
            <Image
              src="/web_assets/2.png"
              alt="Meme Step 2"
              width={60}
              height={60}
              className="rounded-full border-2 border-yellow-300 bg-[#22180e]"
              unoptimized
            />
            <Image
              src="/web_assets/3.png"
              alt="Meme Step 3"
              width={60}
              height={60}
              className="rounded-full border-2 border-yellow-300 bg-[#22180e]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
