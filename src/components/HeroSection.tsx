import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center bg-gradient-to-b from-[#18120b] to-[#2d1a0e]">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-gooddog text-yellow-300 drop-shadow-lg mb-6">
        They keep denying
        <br />
        the truth!
      </h1>
      <p className="text-lg sm:text-2xl md:text-3xl text-[#ededed] max-w-2xl mx-auto mb-8 font-gooddog">
        Step Into the Infestation
        <br />
        Are you ready to connect the dots?
      </p>
      <a
        href="#how-to-join"
        className="inline-block bg-yellow-300 text-[#18120b] font-gooddog text-2xl px-10 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition mb-10"
      >
        Join the Infestation
      </a>
      <div className="flex justify-center">
        <Image
          src="/web_assets/cock_head.gif"
          alt="Roach Mascot"
          width={220}
          height={220}
          className="rounded-full border-4 border-yellow-300 shadow-2xl bg-[#18120b]"
          priority
        />
      </div>
    </section>
  );
}
