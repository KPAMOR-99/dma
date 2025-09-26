"use client";
import { useState } from "react";
import FaqItem from "./FaqItem";
import { FAQ } from "@/app/FAQ";

export default function FaqList() {
  // this is the state for exxpanding the FAQ's
  // when the index s null its collapeed
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    //this will generate the truth or false value sent intof the faqItem
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <ul className="flex flex-col items-start justify-start gap-4">
      {FAQ.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={expandedIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
}
