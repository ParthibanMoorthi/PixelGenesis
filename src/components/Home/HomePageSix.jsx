import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HomePageSix() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const dotsRef = useRef([]);
  const textsRef = useRef([]);

  const steps = ["hai", "hello", "happy", "bye"];

  useEffect(() => {
    const container = containerRef.current;

    // Animate line from right to center when container enters viewport
    gsap.fromTo(
      lineRef.current,
      { width: 0 },
      {
        width: "50%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    );

    // Animate dots and text sequentially
    steps.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: container,
        start: `top+=${i * 100} center`,
        end: `top+=${(i + 1) * 100} center`,
        onEnter: () => {
          gsap.to(dotsRef.current[i], { x: -(i * 30), opacity: 1, duration: 0.5 });
          gsap.to(textsRef.current[i], { opacity: 1, y: 0, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to(dotsRef.current[i], { opacity: 0, duration: 0.3 });
          gsap.to(textsRef.current[i], { opacity: 0, y: -10, duration: 0.3 });
        },
      });
    });
  }, [steps]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Title */}
      <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full text-center">
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          Our Work Process
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-4 text-white">
          We follow a transparent, efficient, and collaborative approach to ensure
          every project meets expectations on time and on budget.
        </p>
      </div>

      {/* Line and dots */}
      <div className="relative mt-10 w-full flex justify-center items-center h-24">
        {/* Line */}
        <div
          ref={lineRef}
          className="absolute h-1 bg-white top-1/2 right-0"
          style={{ transform: "translateX(0%)" }}
        />

        {/* Dots */}
        {steps.map((_, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="absolute h-4 w-4 bg-white rounded-full top-1/2 opacity-0"
            style={{ right: 0, transform: "translateY(-50%)" }}
          />
        ))}

        {/* Texts */}
        <div className="absolute top-16 text-white text-lg flex flex-col items-center">
          {steps.map((step, i) => (
            <p
              key={i}
              ref={(el) => (textsRef.current[i] = el)}
              className="absolute opacity-0"
              style={{ y: -10 }}
            >
              {step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageSix;
