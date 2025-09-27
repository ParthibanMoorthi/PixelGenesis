import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import earth from "../../../src/assets/earth.svg";
import logo from "../../../src/assets/logo.svg";

function HomePageNine() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* First Screen */}
      <section className="h-screen w-full flex items-center justify-center relative z-10 px-4">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center text-center space-y-3">
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



    <div className="relative w-full -mt-32 sm:-mt-40 z-10">
        <img
          src={earth}
          alt="Earth"
          className="mx-auto h-[60vh] sm:h-[70vh] md:h-[80vh] scale-110 object-contain relative z-10"
        />
        {/* Extra tall and smooth gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/80 to-transparent z-40" />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black/70 to-transparent z-50" />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black/60 to-transparent z-60" />
        <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-black/40 to-transparent z-70" />
      </div>

      {/* Second Screen / Footer */}
      <section className="py-12 w-full px-6 sm:px-10 md:px-20 lg:px-24 relative z-10 bg-transparent">
        <div className="w-full flex items-start justify-between gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              className="h-50 w-50 object-contain -mt-12 mx-auto sm:mx-0"
              alt="Logo"
            />
            <p className="text-white text-[20px] font-[600] mt-3">Pixel Genesis</p>
            <p className="text-white text-[14px] sm:text-[16px] font-[400] mt-1">
              “Always a step Ahead”
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-white text-[18px] font-[600] mb-4">Company</p>
            <div className="flex flex-col gap-3 text-[14px] sm:text-[15px] text-white font-[400] cursor-pointer">
              <p>About Us</p>
              <p>Services</p>
              <p>Careers</p>
              <p>Testimonials</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-[18px] font-[600] mb-4">Contact</p>
            <div className="flex flex-col gap-3 text-[14px] sm:text-[15px] text-white font-[400] cursor-pointer">
              <p>Web Development & Design</p>
              <p>Software Development</p>
              <p>Digital Marketing</p>
            </div>
          </div>

          {/* Other Links */}
          <div>
            <p className="text-white text-[18px] font-[600] mb-4">Other Links</p>
            <div className="flex flex-col gap-3 text-[14px] sm:text-[15px] text-white font-[400] cursor-pointer">
              <p>Case Studies</p>
              <p>Testimonials</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex items-center justify-center sm:justify-end gap-6">
          <a href="#" className="text-white text-[22px] sm:text-[24px] hover:text-gray-400 cursor-pointer transition-colors">
            <TbBrandX />
          </a>
          <a href="#" className="text-white text-[22px] sm:text-[24px] hover:text-gray-400 cursor-pointer transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-[22px] sm:text-[24px] hover:text-gray-400 cursor-pointer transition-colors">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePageNine;
