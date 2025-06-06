export default function HowToJoinSection() {
  return (
    <section
      id="how-to-join"
      className="py-16 px-4 bg-[#18120b] text-[#ededed] text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-gooddog text-yellow-300 mb-8 font-extrabold">
        Join the Infestation
      </h2>
      <ol className="max-w-xl mx-auto text-lg sm:text-xl font-gooddog mb-10 text-left list-decimal list-inside">
        <li>Embrace the swarm. Accept the culture.</li>
        <li>Connect with fellow survivors.</li>
        <li>Share your story. Multiply the legend.</li>
      </ol>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
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
    </section>
  );
}
