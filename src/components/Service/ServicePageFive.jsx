import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import sectorOne from "../../assets/sectorOne.svg";
import sectorTwo from "../../assets/sectorOne.svg";
import sectorThree from "../../assets/sectorOne.svg";
import sectorFour from "../../assets/sectorOne.svg";
import sectorFive from "../../assets/sectorOne.svg";

function ServicePageFive() {
  const sectors = [
    { id: 1, name: "Healthcare", descr: "Healthcare solutions...", img: sectorOne },
    { id: 2, name: "FinTech", descr: "FinTech solutions...", img: sectorTwo },
    { id: 3, name: "E-Commerce", descr: "E-Commerce solutions...", img: sectorThree },
    { id: 4, name: "Education", descr: "Education solutions...", img: sectorFour },
    { id: 5, name: "Real Estate", descr: "Real Estate solutions...", img: sectorFive },
  ];

  const [active, setActive] = useState(0);

  // Config
  const slidesPerView = 4;
  const slideWidth = 220; // px
  const slideGap = 16; // px
  const totalSlideWidth = slideWidth + slideGap;

  // Calculate translateX:
  // Logic:
  // - When active index < slidesPerView - 1, don't move (0 translateX)
  // - When active index >= slidesPerView -1, translate left so active slide is visible at the right edge
  // - Also prevent overscroll beyond last slide

  let translateIndex = 0;
  if (active >= slidesPerView - 1) {
    // Move left by (active - (slidesPerView - 1))
    translateIndex = active - (slidesPerView - 1);
  }
  // Max translateIndex cannot exceed max slides overflow
  const maxTranslateIndex = sectors.length - slidesPerView;
  if (translateIndex > maxTranslateIndex) translateIndex = maxTranslateIndex;

  const translateX = -translateIndex * totalSlideWidth;

  // Handlers
  const prev = () => {
    setActive((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setActive((prev) => Math.min(prev + 1, sectors.length - 1));
  };

  const goToSlide = (index) => {
    setActive(index);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 bg-black text-white">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 w-full text-start">Sectors</h2>

      {/* Main Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full max-w-6xl">
        <div className="col-span-1 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src={sectors[active]?.img}
            alt={sectors[active]?.name}
            className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[330px] h-auto object-contain rounded-xl shadow-lg transition-transform duration-500"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-3 text-center md:text-left">
          <h3 className="text-[#F4DB59] text-2xl sm:text-3xl md:text-4xl font-semibold">
            {sectors[active]?.name}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">{sectors[active]?.descr}</p>
        </div>
      </div>

      {/* Custom Slider */}
      <div className="relative w-full mt-8 flex items-center">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          disabled={active === 0}
          className={`p-2 rounded-full transition-colors ${
            active === 0
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-black/50 text-white hover:bg-white hover:text-black cursor-pointer"
          }`}
          aria-label="Previous Slide"
        >
          <BiChevronLeft size={36} />
        </button>

        {/* Slides Container */}
        <div
          className="overflow-hidden flex-1 mx-4"
          style={{ maxWidth: slidesPerView * slideWidth + (slidesPerView - 1) * slideGap }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(${translateX}px)`, gap: `${slideGap}px` }}
          >
            {sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-[220px] rounded-lg overflow-hidden focus:outline-none
                  ${active === index ? "opacity-100" : "opacity-50 hover:opacity-80"}
                `}
                aria-current={active === index ? "true" : "false"}
                aria-label={`Go to ${sector.name} sector`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
              >
                <img
                  src={sector.img}
                  alt={sector.name}
                  className="w-full h-[100px] object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          disabled={active === sectors.length - 1}
          className={`p-2 rounded-full transition-colors ${
            active === sectors.length - 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-black/50 text-white hover:bg-white hover:text-black cursor-pointer"
          }`}
          aria-label="Next Slide"
        >
          <BiChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}

export default ServicePageFive;
