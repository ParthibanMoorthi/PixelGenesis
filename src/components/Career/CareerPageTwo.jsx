import React from "react";

function CareerPageTwo() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-6 lg:px-12">
      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-7xl">
        {/* Text Content */}
        <div className="md:col-span-3 flex flex-col justify-center">
           <h1 className="font-[600] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] sm:leading-12 text-white">
          Careers at Pixel genesis Where Passion Meets Purpose and Innovation Has No Limits
          </h1>

          <p className="mt-6 sm:mt-10 text-[24px] sm:text-[26px] md:text-[28px] font-bold leading-7 sm:leading-8 text-white">
            We’re not just hiring for jobs
          </p>

           <p className="mt-4 font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
                          We’re building a community of innovators, thinkers, coders, designers, strategists, storytellers, and dreamers who want to shape the digital world one breakthrough at a time.
          </p>

          <p className="mt-4 font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
                          Whether you're a frontend genius, a backend wizard, a creative storyteller, or a people-first HR strategist, this is your launchpad.
          </p>
        </div>

        {/* Empty column for spacing */}
        <div className="hidden md:block md:col-span-2"></div>
      </div>
    </div>
  );
}

export default CareerPageTwo;
