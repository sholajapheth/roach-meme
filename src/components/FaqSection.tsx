"use client";
import { useState } from "react";
import Image from "next/image";

interface FaqItemData {
  question: string;
  answer: string;
  bgImage: string;
}

const faqData: FaqItemData[] = [
  {
    question: "What is The Roach Show?",
    answer:
      "It's a PFP collection. It's a cult. It's a comedy. It's a cry for help. Mint one and you'll understand. Or you won't. That's part of the fun.",
    bgImage: "/web_assets/faq_1.png",
  },
  {
    question: "Why are you called The Roach Show?",
    answer:
      "Because this ain't a JPEG drop — it's the first act of something much darker, funnier, and way more unhinged. Let's just say… the title will make a lot more sense after mint. 👀",
    bgImage: "/web_assets/faq_2.png",
  },
  {
    question: "When is mint?",
    answer:
      "When the swarm is ready. Follow the crumbs, join Discord, and you might get early access. Or just keep scratching the walls.",
    bgImage: "/web_assets/faq_3.png",
  },
  {
    question: "How do I get WL or OG role?",
    answer:
      "Boost the server, raid the timeline, meme like your life depends on it. Or bribe us with snacks. Full details in Discord (unless you're too scared of the light).",
    bgImage: "/web_assets/faq_4.png",
  },
  {
    question: "What chain is this on?",
    answer:
      "$SUI — because only the strongest survive underwater.",
    bgImage: "/web_assets/faq_5.png",
  },
  {
    question: "What's the utility?",
    answer:
      "Culture. Chaos. A little XP system crawling in the background. There may or may not be more — but we'd rather you speculate and spiral. 🌀",
    bgImage: "/web_assets/faq_6.png",
  },
  {
    question: "Are there token rewards?",
    answer:
      "If there were, we wouldn't tell you. But if we weren't doing anything… why are we tracking your XP? 👀",
    bgImage: "/web_assets/faq_1.png",
  },
  {
    question: "What's next after mint?",
    answer:
      "Let's just say this pilot episode won't be our last. The real show? Still being written. You might even star in it.",
    bgImage: "/web_assets/faq_2.png",
  },
  {
    question: "Why roaches?",
    answer:
      "Because they survive everything. Rugs. Scams. Bear markets. Exes. We're not here to moon. We multiply.",
    bgImage: "/web_assets/faq_3.png",
  },
];

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ item, isOpen, onClick }: FaqItemProps) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className="w-full text-left p-4 rounded-lg relative overflow-hidden h-24 sm:h-20"
    >
      <Image
        src={item.bgImage}
        fill
        alt="faq background"
        className="z-0 object-cover"
      />
      <div className="relative z-10 flex justify-between items-center text-white font-gooddog text-lg sm:text-xl">
        <span>{item.question}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </div>
    </button>
    {isOpen && (
      <div className="p-4 bg-black bg-opacity-20 rounded-b-lg text-white font-gooddog text-base sm:text-lg">
        {item.answer}
      </div>
    )}
  </div>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4">
      <h2 className="text-4xl text-[#d29620] font-gooddog text-center mb-8">
        FAQ
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
