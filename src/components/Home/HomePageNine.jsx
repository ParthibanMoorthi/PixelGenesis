import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
<<<<<<< HEAD
import earth from "../../../src/assets/earthOne.svg";
=======
import earth from "../../../src/assets/earthBg.png";
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
import logo from "../../../src/assets/logo.svg";
import Footer from "../Footer";

function HomePageNine() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* First Section */}
      <section className="h-screen w-full relative flex flex-col justify-center items-center px-4 z-20">
        <div className="flex flex-col items-center text-center space-y-3">
          <h1 className="font-[600] text-[38px] sm:text-[46px] md:text-[50px] lg:text-[54px] text-white">
            Ready to Grow
          </h1>
          <p className="font-[500] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-7 sm:leading-8 text-white">
            Your Business Online?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="cursor-pointer bg-transparent text-white text-[16px] sm:text-[18px] border border-white font-[400] py-2.5 px-6 rounded-[12px] hover:text-black hover:bg-gray-200 transition-all duration-300">
              Free Consultation
            </button>
            <button className="cursor-pointer bg-[#C90000] border border-[#C90000] text-[16px] sm:text-[18px] text-white font-[400] py-2.5 px-6 rounded-[12px] hover:bg-black hover:text-white hover:border-white transition-all duration-300">
              Contact us
            </button>
          </div>
        </div>
      </section>

          {/* Earth Image Between Sections */}
      <div
        className="relative w-full -mt-32 sm:-mt-28 z-10 flex justify-center pointer-events-none
                   will-change-transform transform-gpu"
        style={{ transform: "translateZ(0)" }}
      >
        <img
          src={earth}
          alt="Earth"
          className="h-[60vh] sm:h-[70vh] md:h-[80vh] object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-black/40 to-transparent" />
      </div>




<Footer/>
    </div>
  );
}

export default HomePageNine;
