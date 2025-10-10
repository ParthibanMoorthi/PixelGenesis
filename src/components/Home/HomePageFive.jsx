import React from "react";
import Marquee from "react-fast-marquee";

import StackT1 from "../../assets/StackT1.svg";
import StackT2 from "../../assets/StackT2.svg";
import StackT3 from "../../assets/StackT3.svg";
import StackT4 from "../../assets/StackT4.svg";
import StackT5 from "../../assets/StackT5.svg";
import StackT6 from "../../assets/StackT6.svg";
import StackT7 from "../../assets/StackT7.svg";
import StackT8 from "../../assets/StackT8.svg";
import StackT9 from "../../assets/StackT9.svg";
import StackT10 from "../../assets/StackT10.svg";
import StackT11 from "../../assets/StackT11.svg";
import StackT12 from "../../assets/StackT12.svg";
import StackT13 from "../../assets/StackT13.svg";
import StackT14 from "../../assets/StackT14.svg";
import StackT15 from "../../assets/StackT15.svg";

import StackB1 from "../../assets/StackB1.svg";
import StackB2 from "../../assets/StackB2.svg";
import StackB3 from "../../assets/StackB3.svg";
import StackB4 from "../../assets/StackB4.svg";
import StackB5 from "../../assets/StackB5.svg";
import StackB6 from "../../assets/StackB6.svg";
import StackB7 from "../../assets/StackB7.svg";
import StackB8 from "../../assets/StackB8.svg";
import StackB9 from "../../assets/StackB9.svg";
import StackB10 from "../../assets/StackB10.svg";
import StackB11 from "../../assets/StackB11.svg";
import StackB12 from "../../assets/StackB12.svg";
import StackB13 from "../../assets/StackB13.svg";
import StackB14 from "../../assets/StackB14.svg";
import StackB15 from "../../assets/StackB15.svg";

function HomePageFive() {
  const topStacks = [
    StackT1, StackT2, StackT3, StackT4, StackT5, StackT6, StackT7, StackT8,
    StackT9, StackT10, StackT11, StackT12, StackT13, StackT14, StackT15,
  ];

  const bottomStacks = [
    StackB1, StackB2, StackB3, StackB4, StackB5, StackB6, StackB7, StackB8,
    StackB9, StackB10, StackB11, StackB12, StackB13, StackB14, StackB15,
  ];

  // Repeat the stacks to make marquee continuous
  const repeatedTop = Array(3).fill(topStacks).flat();
  const repeatedBottom = Array(3).fill(bottomStacks).flat();

  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full">
        {/* Title */}
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          Our Technology Stack
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-6 text-white text-start">
          At Pixel Genesis, we use the latest, most reliable technologies to build
          powerful, scalable, and secure solutions. Our team is proficient across a
          wide range of tools and platforms — enabling us to tailor every project to
          meet your specific goals.
        </p>

        {/* Top moving marquee */}
        <div className="mt-12 w-full overflow-hidden">
          <Marquee speed={50} gradient={false} pauseOnHover={false}>
            <div className="flex gap-[8px] sm:gap-[10px] md:gap-[12px] px-[8px] sm:px-[10px] md:px-[12px]">
              {repeatedTop.map((src, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-[18px]"
                >
                  <img
                    src={src}
                    alt={`StackT${i + 1}`}
                    className="h-20 sm:h-22 md:h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Bottom moving marquee */}
        <div className="mt-6 w-full overflow-hidden">
          <Marquee speed={50} gradient={false} pauseOnHover={false} direction="right">
            <div className="flex gap-[8px] sm:gap-[10px] md:gap-[12px] px-[8px] sm:px-[10px] md:px-[12px]">
              {repeatedBottom.map((src, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-[18px]"
                >
                  <img
                    src={src}
                    alt={`StackB${i + 1}`}
                    className="h-20 sm:h-22 md:h-24 w-auto object-contain"
                  />
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
