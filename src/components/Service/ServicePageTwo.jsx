import { useEffect, useState, useRef } from "react";

function ServicePageTwo() {
  const data = [
    {
      id: 1,
      name: "Types of Websites",
      description: [
        "Static Websites",
        "Dynamic Websites",
        "E-commerce Websites",
        "Business/Corporate Websites",
        "Landing Pages / Microsites",
        "Web Applications"
      ]
    },
    {
      id: 2,
      name: "Types of Mobile Apps",
      description: [
        "Native Apps",
        "Cross-Platform Apps",
        "Progressive Web Apps (PWAs)",
        "E-commerce Apps",
        "Utility & Service Apps",
        "Custom Business Apps"
      ]
    },
    {
      id: 3,
      name: "Types of Digital Marketing",
      description: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Email Marketing",
        "Content Marketing",
        "Analytics & Performance Tracking"
      ]
    }
  ];

  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white mb-8 text-left w-full">
        What We Do?
      </h1>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10 md:gap-20 w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/3 h-auto group cursor-pointer
              bg-white/5 backdrop-blur-lg border border-white/50 rounded-xl p-6
              transition-all duration-300 hover:bg-white hover:text-black"
          >
            <p className="font-[600] text-[26px] text-white mb-4 group-hover:text-black transition-colors duration-300 text-left">
              {item.name}
            </p>

            <ul className="list-disc list-inside space-y-2 text-white font-[400] text-[15px] group-hover:text-black transition-colors duration-300 text-left">
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePageTwo;
