import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import ufo from "../../../src/assets/ufo.svg";
=======
import ufo from "../../../src/assets/ufo.png";
import ufoLight from "../../../src/assets/ufoLight.svg";
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)

function ServicePageOne() {
  const [showText, setShowText] = useState(false);
  const [ufoVisible, setUfoVisible] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    // Start UFO animation
    const ufoTimer = setTimeout(() => setUfoVisible(true), 100); 
    // Show text after UFO reached center
    const textTimer = setTimeout(() => setShowText(true), 2000); 

    return () => {
      clearTimeout(ufoTimer);
=======
  const [lightVisible, setLightVisible] = useState(false);

  useEffect(() => {
    // UFO appears first
    const ufoTimer = setTimeout(() => setUfoVisible(true), 100);

    // Light appears slightly after UFO
    const lightTimer = setTimeout(() => setLightVisible(true), 1200);

    // Text appears after UFO + light
    const textTimer = setTimeout(() => setShowText(true), 1400);

    return () => {
      clearTimeout(ufoTimer);
      clearTimeout(lightTimer);
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center overflow-hidden">
<<<<<<< HEAD
      {/* UFO */}
      <img
        src={ufo}
        alt="ufo"
        className={`absolute transition-all duration-[2000ms] ease-out z-20
          ${ufoVisible 
            ? "top-[15%] sm:top-[18%] md:top-[20%] lg:top-[22%] right-[50%] translate-x-1/2" 
            : "top-[-20%] right-[-20%]"} 
          w-48 sm:w-64 md:w-80 lg:w-[500px]`}
      />

      {/* Text content below UFO */}
      <div
        className={`relative z-30 flex flex-col gap-6 justify-start items-center 
          mt-[40vh] sm:mt-[45vh] md:mt-[50vh] lg:mt-[55vh] px-4 sm:px-6 md:px-12 transition-opacity duration-[1000ms] 
=======

      {/* UFO */}
      <img
        src={ufo}
        alt="UFO"
        className={`absolute transition-all duration-[1200ms] ease-out z-20
          ${ufoVisible
            ? "top-[15%] sm:top-[18%] md:top-[20%] lg:top-[22%] right-1/2 translate-x-1/2 opacity-100"
            : "top-[-20%] right-[-20%] opacity-0"} 
          w-48 sm:w-64 md:w-80 lg:w-[500px]`}
      />

      {/* UFO Light */}
      <img
        src={ufoLight}
        alt="UFO Light"
        className={`absolute transition-all duration-[1000ms] ease-out z-10
          ${lightVisible
            ? "top-[30%] sm:top-[35%] md:top-[38%] lg:top-[40%] right-1/2 translate-x-1/2 opacity-100"
            : "top-[30%] sm:top-[35%] md:top-[38%] lg:top-[40%] right-1/2 translate-x-1/2 opacity-0"} 
          w-60 sm:w-72 md:w-80 lg:w-[520px]`}
      />

      {/* Text content */}
      <div
        className={`relative z-30 flex flex-col gap-4 justify-start items-center
          mt-[44vh] sm:mt-[49vh] md:mt-[54vh] lg:mt-[60vh] px-4 sm:px-6 md:px-12 transition-opacity duration-[1000ms] 
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
          ${showText ? "opacity-100" : "opacity-0"}`}
      >
        <p className="font-bold leading-tight text-[18px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white text-center">
          Services
        </p>
        <p className="font-medium leading-relaxed text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px] text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
<<<<<<< HEAD
          From bold design systems to futuristic code, Pixel Genesis navigates
          galaxies of innovation to deliver stellar digital solutions.
=======
          From bold design systems to futuristic code, Pixel Genesis navigates galaxies of innovation to deliver stellar digital solutions.
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="cursor-pointer bg-transparent text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] border border-white font-[400] py-2.5 px-6 rounded-[12px] hover:text-black hover:bg-gray-200 transition-all duration-300">
            Free Consultation
          </button>
          <button className="cursor-pointer bg-[#C90000] border border-[#C90000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-white font-[400] py-2.5 px-6 rounded-[12px] hover:bg-black hover:text-white hover:border-white transition-all duration-300">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicePageOne;
