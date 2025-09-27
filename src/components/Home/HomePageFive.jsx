import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";

function HomePageFive() {
  const icons = [FaReact, FaNodeJs, FaJs]; // Tech icons
  const repeatedIcons = Array(20).fill(icons).flat(); // Repeat for continuous scroll

  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full">
        {/* Title */}
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          Our Technology Stack
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-6 text-white text-start">
          At Pixel genesis, we use the latest, most reliable technologies to build
          powerful, scalable, and secure solutions. Our team is proficient across a
          wide range of tools and platforms — enabling us to tailor every project to
          meet your specific goals.
        </p>

        {/* Left moving marquee */}
        <div className="mt-10 w-full overflow-hidden">
          <Marquee speed={50} gradient={false} pauseOnHover={false}>
            <div className="flex gap-[10px] sm:gap-[15px] md:gap-[20px] px-[6px] sm:px-[8px] md:px-[12px]">
              {repeatedIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="h-14 w-24 sm:h-18 sm:w-28 md:h-20 md:w-30 flex items-center justify-center rounded-[12px] bg-white"
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 text-blue-500" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Right moving marquee */}
        <div className="mt-6 w-full overflow-hidden">
          <Marquee speed={50} gradient={false} pauseOnHover={false} direction="right">
            <div className="flex gap-[10px] sm:gap-[15px] md:gap-[20px] px-[6px] sm:px-[8px] md:px-[12px]">
              {repeatedIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="h-14 w-24 sm:h-18 sm:w-28 md:h-20 md:w-30 flex items-center justify-center rounded-[12px] bg-white"
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 text-blue-500" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default HomePageFive;
