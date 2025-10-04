import React from "react";

function CareerPageThree() {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden  px-4 sm:px-6 md:px-6 lg:px-12">
      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-7xl">
        {/* Text Content */}
        <div className="md:col-span-3 flex flex-col justify-center space-y-12">
          {/* Why Join Us */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-snug text-white">
              Why Join Us?
            </h1>
            <p className="font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
                          Because we don’t believe in “fitting in” — we believe in standing out. We build things that matter, and we do it together. Here, your work won’t just go live — it will come alive.
            </p>
          </div>

          {/* Who We Hire */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-snug text-white">
              Who We Hire
            </h1>
           <p className="font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
                           We’re looking for passionate minds across multiple domains:
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="text-[16px] sm:text-[18px] md:text-[20px] font-medium px-6 sm:px-8 py-1.5 border border-white/40 text-white rounded-lg hover:bg-white/10 transition">
                React
              </button>
              <button className="text-[16px] sm:text-[18px] md:text-[20px] font-medium px-6 sm:px-8 py-1.5 border border-white/40 text-white rounded-lg hover:bg-white/10 transition">
                Python
              </button>
              {/* Add more buttons here if needed */}
            </div>
          </div>
        </div>

        {/* Empty column for spacing on larger screens */}
        <div className="hidden md:block md:col-span-2"></div>
      </div>
    </div>
  );
}

export default CareerPageThree;
