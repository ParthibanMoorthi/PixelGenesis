import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import logo from "../../src/assets/logo.svg";

function Footer() {
  return (
    <div className="w-full relative overflow-hidden">

      {/* Second Screen / Footer */}
      <section className="pt-12 pb-8 w-full px-6 sm:px-10 md:px-20 lg:px-24 relative z-10 bg-transparent">
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
        <div className="mt-7 flex items-center justify-center sm:justify-end gap-6">
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
<<<<<<< HEAD
=======

         <p className="mt-2 text-center text-[14px] sm:text-[15px] text-white font-[400]">WAC ©2025 All rights reserved</p>

>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
      </section>
    </div>
  );
}

export default Footer;
