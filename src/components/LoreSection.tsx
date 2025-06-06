import Image from "next/image";

export default function LoreSection() {
  return (
    <section className="py-16 px-4 bg-[#22180e] text-[#ededed] text-center relative overflow-hidden">
      <div className="flex justify-center mb-8">
        <Image
          src="/web_assets/nav/about.png"
          alt="About Roach Culture"
          width={220}
          height={80}
          className="object-contain"
          unoptimized
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <Image
            src="/web_assets/cockroach_world_meeting.jpg"
            alt="Roach Council Meme"
            width={400}
            height={300}
            className="rounded-xl shadow-2xl border-4 border-yellow-300 bg-[#18120b]"
            unoptimized
          />
        </div>
        <div className="flex-1 text-left md:text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-gooddog text-yellow-300 mb-6 font-extrabold">
            Roaches Assemble
          </h2>
          <p className="max-w-xl mx-auto text-lg sm:text-xl md:text-2xl mb-6 font-gooddog">
            We outlast, we outmeme, we outcope. In the darkest corners, the
            swarm grows stronger. Our only utility is survival&mdash;and memes.
            If you can&apos;t handle the filth, you&apos;re not ready for the
            culture.
          </p>
          <p className="max-w-xl mx-auto text-lg sm:text-xl font-gooddog text-yellow-200">
            🪳 &quot;One roach is a pest. A million is a movement.&quot;
          </p>
        </div>
      </div>
      {/* Roach TV Meme Block */}
      <div className="flex flex-col items-center mt-16">
        <div className="font-gooddog text-2xl text-yellow-300 mb-2">
          Roach TV
        </div>
        <div className="relative w-full max-w-[500px] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto">
          <Image
            src="/web_assets/tv.png"
            alt="Roach TV Frame"
            width={1000}
            height={600}
            className="w-full h-auto"
            unoptimized
          />
          {/* Video inside TV */}
          <div className="absolute top-[8%] left-[13%] w-[74%] h-[68%] overflow-hidden rounded-lg shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="/web_assets/roach-meme-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
          {/* Roach watching TV overlay */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[85%] lg:w-[90%] pointer-events-none">
            <Image
              src="/web_assets/cock_watching.png"
              alt="Roach Watching TV"
              width={800}
              height={200}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
