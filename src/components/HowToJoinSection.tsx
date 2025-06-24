"use client";

export default function HowToJoinSection() {
  return (
    <section id="how-to-join" className=" px-4 text-center">
      <div className="flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-gooddog text-[#d29620] font-extrabold">
          Join the Infestation
        </h2>
        <p className="text-2xl text-[#d29620]">
          Ready to crawl with us? The swarm awaits.
        </p>
        <button className="px-8 py-3 bg-stone-800 text-[#d29620] font-gooddog text-2xl rounded-lg border-2 border-stone-600 hover:bg-stone-700">
          Join the Infestation
        </button>
      </div>
    </section>
  );
}
