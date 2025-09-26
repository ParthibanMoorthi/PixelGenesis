import React, { useEffect, useState } from "react";

function Header() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setAnimate(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <header
            className={`
        w-full fixed top-0 left-0 z-50 flex justify-center items-center px-6 py-5
        transition-transform duration-1000 ease-out
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}
      `}
        >
            <div className="flex items-center gap-12">
                {/* Navigation */}
                <nav className="hidden md:flex gap-6 lg:gap-12 text-white font-normal text-sm sm:text-base md:text-lg">
                    <a href="#home" className="hover:text-gray-300 transition-colors duration-300">Home</a>
                    <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About Us</a>
                    <a href="#services" className="hover:text-gray-300 transition-colors duration-300">Services</a>
                    <a href="#careers" className="hover:text-gray-300 transition-colors duration-300">Careers</a>
                    <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
                </nav>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-4 sm:right-6 text-white cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
            </div>
        </header>
    );
}

export default Header;
