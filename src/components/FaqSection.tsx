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
      "It's the center of our universe. The stage where the memes are born and the legends are made. The Roach Show is our community's home.",
    bgImage: "/web_assets/faq/faq_1.png",
  },
  {
    question: "Is this just another meme coin?",
    answer:
      "We're not just a coin, we're a culture. We thrive in chaos and survive the unsurvivable. Roaches were here before the bullrun, and we'll be here after.",
    bgImage: "/web_assets/faq/faq_2.png",
  },
  {
    question: "What's the utility?",
    answer:
      "Utility? The only utility is survival. And memes. We outlast, we out-meme, we out-cope. That's the roach way.",
    bgImage: "/web_assets/faq/faq_3.png",
  },
  {
    question: "How do I join the infestation?",
    answer:
      "Find us in the darkest corners of the internet. Join our socials, spread the memes, and prove you're unkillable. The button is right above.",
    bgImage: "/web_assets/faq/faq_4.png",
  },
  {
    question: "When did roaches get so tough?",
    answer:
      "We were always this tough. You're just now noticing because everything else is starting to crumble. We were born in the dirt.",
    bgImage: "/web_assets/faq/faq_5.png",
  },
  {
    question: "Who is the leader of the roaches?",
    answer:
      "There are no leaders in the swarm, only survivors. We move as one, a decentralized force of nature that can't be stopped.",
    bgImage: "/web_assets/faq/faq_6.png",
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
      <h2 className="text-4xl text-yellow-300 font-gooddog text-center mb-8">
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
