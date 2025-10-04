import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function AboutPageSix() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // trigger animation
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center bg-transparent px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {inView && (
        <motion.div
          className="w-full max-w-2xl flex flex-col items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} // smooth fade in with small delay
        >
          <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
            Connect with Us
          </p>
          <p className="font-[500] leading-[1.8] text-[10px] sm:text-[12px] md:text-[15px] text-white">
            Let’s build experiences that live, learn, and lead. Let’s create apps that are delightful,
            websites that are meaningful, and brands that feel human.
            Pixel genesis — Designing the most human version of the digital future.
            Let’s evolve — together.
          </p>

          <button className="cursor-pointer bg-[#C90000] border border-[#C90000] text-[14px] sm:text-[16px] md:text-[18px] text-white font-[400] py-2.5 px-6 rounded-[12px] hover:bg-black hover:text-white hover:border-white transition-all duration-300">
            Contact us
          </button>
        </motion.div>
      )}

    </div>
  );
}

export default AboutPageSix;
