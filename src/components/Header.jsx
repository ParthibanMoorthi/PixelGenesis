<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
import { useEffect, useState } from "react";

function Header() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, []);

<<<<<<< HEAD
  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 flex justify-center bg-black items-center px-6 py-5
=======
  const activeClass = "text-[#F4DB59]"; // active link color

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 flex justify-center items-center px-6 py-5
        bg-black/10 backdrop-blur-md
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
        transition-transform duration-1000 ease-out
        ${animate ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}
      `}
    >
      <div className="flex items-center gap-12">
        {/* Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-12 text-white font-normal text-sm sm:text-base md:text-lg">
<<<<<<< HEAD
          <Link to="/home" className="hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about/us" className="hover:text-gray-300 transition-colors duration-300">
            About Us
          </Link>
          <Link to="/services" className="hover:text-gray-300 transition-colors duration-300">
            Services
          </Link>
          <Link to="/careers" className="hover:text-gray-300 transition-colors duration-300">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">
            Contact
          </Link>
=======
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors duration-300 ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about/us"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors duration-300 ${isActive ? activeClass : ""}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors duration-300 ${isActive ? activeClass : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors duration-300 ${isActive ? activeClass : ""}`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-gray-300 transition-colors duration-300 ${isActive ? activeClass : ""}`
            }
          >
            Contact
          </NavLink>
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
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
