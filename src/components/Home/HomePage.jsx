import { useEffect, useState } from "react";
import saturn from "../../../src/assets/saturn.svg";
import HomePagTwo from "./HomePagTwo";
import Lenis from "@studio-freight/lenis";
import HomePagThree from "./HomePageThree";

function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, []);

    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Section 1: Splash/Home */}
      <div className="h-screen w-full overflow-hidden relative">
        {/* Splash Saturn */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-y-1/2 transition-transform duration-[1500ms] ease-in-out ${
            animate
              ? "translate-x-[10vw] scale-[1.5]"
              : "-translate-x-1/2 scale-[3]"
          }`}
        >
          <img
            src={saturn}
            alt="splash"
            className="
              w-[180vw] sm:w-[140vw] md:w-[120vw] lg:w-[100vw] 
              h-auto object-contain
            "
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full px-4 sm:px-6 md:px-6 lg:px-12">
          <div className="flex flex-col justify-center items-start h-full">
            {/* Slide in from left */}
            <p
              className={`font-cocogoose text-white font-[600] leading-[1] transition-all duration-1000 ease-out
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
              text-[48px] sm:text-[60px] md:text-[72px]
            `}
              style={{ transitionDelay: "0ms" }}
            >
              Welcome
              <span
                className={`block font-extralight transition-all duration-1000 ease-out
                ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
                text-[40px] sm:text-[52px] md:text-[64px]
              `}
                style={{ transitionDelay: "300ms" }}
              >
                Voyager
              </span>
            </p>

            <p
              className={`text-white/65 font-[400] mt-8 transition-all duration-1000 ease-out
                ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
                text-[18px] sm:text-[20px] md:text-[22px]
              `}
              style={{ transitionDelay: "600ms" }}
            >
              Prepare for launch! Your journey to innovative software solutions
              begins now. Discover our universe of solutions.
            </p>

            {/* Slide in from bottom */}
            <p
              className={`text-white font-[400] mt-16 transition-all duration-1000 ease-out
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                text-[28px] sm:text-[32px] md:text-[36px]
              `}
              style={{ transitionDelay: "900ms" }}
            >
              Innovate. Develop. Grow.
            </p>

            {/* Button */}
            <button
              className={`mt-4 rounded-[12px] px-5 pt-1.5 pb-2.5 text-white border border-white
                transform transition-opacity cursor-pointer duration-1000 ease-out
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                hover:bg-white hover:text-black transition-colors duration-300
                text-[16px] sm:text-[18px] md:text-[20px]
              `}
              style={{ transitionDelay: "1200ms" }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

    
      <div className="h-screen w-full overflow-hidden">
        <HomePagTwo />
      </div>

        <div className="h-screen w-full overflow-hidden">
        <HomePagThree />
      </div>
    </div>
  );
}

export default HomePage;
