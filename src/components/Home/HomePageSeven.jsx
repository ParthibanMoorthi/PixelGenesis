"use client"; // For Next.js or SSR environments

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function HomePageSeven() {
  const data = [
    { id: 1, question: "What technologies do you use for web development?", answer: "We use React, Node.js, TailwindCSS, and more depending on the project." },
    { id: 2, question: "Do you offer website maintenance?", answer: "Yes, we provide ongoing website maintenance and support packages." },
    { id: 3, question: "Will my website be mobile-friendly?", answer: "Absolutely! All websites are fully responsive and optimized for mobile devices." },
    { id: 4, question: "Do you provide end-to-end development services?", answer: "Yes, from design to deployment, we cover the entire development lifecycle." },
    { id: 5, question: "What kind of software do you develop?", answer: "We develop web apps, mobile apps, custom software solutions, and SaaS platforms." }
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="z-20 min-h-screen w-full flex flex-col items-start px-4 sm:px-6 md:px-12 py-12 bg-black">
      <h1 className="font-[600] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] text-white text-center sm:text-left mb-8">
        Frequently Asked Questions (FAQs)
      </h1>

      <div className="w-full px-6 sm:px-8 md:px-16 flex flex-col space-y-4">
        {data.map((item) => (
          <div key={item.id} className="w-full">
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full flex justify-between items-center py-4 sm:py-5 border-b border-white/20 transition-colors duration-700 cursor-pointer"
              aria-expanded={openId === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <h2 className="text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-6 sm:leading-7 md:leading-8">
                {item.question}
              </h2>
              <span
                className={`text-white text-2xl sm:text-3xl md:text-3xl transition-transform duration-700 ${openId === item.id ? "rotate-45" : "rotate-0"}`}
              >
                <AiOutlinePlus />
              </span>
            </button>

            {/* Answer */}
            <div
              id={`faq-answer-${item.id}`}
              className={`overflow-hidden transition-all duration-700 ${openId === item.id ? "max-h-[500px] mt-2 sm:mt-3" : "max-h-0"}`}
            >
              <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-6 sm:leading-7 md:leading-8">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageSeven;
