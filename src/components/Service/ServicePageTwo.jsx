import { useEffect, useState, useRef } from "react";
<<<<<<< HEAD

function ServicePageTwo() {
=======
import borderBox from "../../../src/assets/borderBox.svg";
import borderBoxFill from "../../../src/assets/borderBoxFill.svg";

function ServicePageTwo() {

  const ref = useRef();

>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
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

<<<<<<< HEAD
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
=======


  return (
    <div
      ref={ref}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Grid Content */}
      <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full">
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          Core Services
        </h1>

        <div className="flex items-center gap-12 mt-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-96 sm:h-[28rem] md:h-[30rem] lg:h-[24rem] group flex items-center justify-center"
            >
              {/* Default border box */}
              <img
                src={borderBox}
                alt="border box"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Filled border box on hover */}
              <img
                src={borderBoxFill}
                alt="border box fill"
                className="absolute inset-0 w-full h-full scale-95 object-contain pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Index number */}
              <div className="absolute top-2 right-14 z-20 text-white font-bold text-lg sm:text-xl md:text-2xl">
                0{index + 1}
              </div>

              {/* Content inside the box - centered */}
              <div className="relative z-10 px-6 mx-4 py-8 flex flex-col items-start justify-center text-start h-full w-full">
                <p className="font-[600] text-[26px] text-white mb-4 group-hover:text-black transition-colors duration-300">
                  {item.name}
                </p>
                <ul className="list-disc list-inside space-y-2 text-white font-[400] text-[15px] group-hover:text-black transition-colors duration-300">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
      </div>
    </div>
  );
}

export default ServicePageTwo;
