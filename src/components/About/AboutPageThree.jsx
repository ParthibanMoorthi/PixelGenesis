import React, { useEffect, useRef, useState } from "react";
import uiAbout from '../../assets/uiAbout.svg';
import aiAbout from '../../assets/aiAbout.svg';
import mobileAbout from '../../assets/mobileAbout.svg';
import digitalAbout from '../../assets/digitalAbout.svg';
import { motion } from "framer-motion";

function AboutPageThree() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // trigger animation
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const el = ref.current;
    if (!el) return;

    observer.observe(el);

    // Force a check after a short delay (Lenis may adjust scroll after mount)
    const timeoutId = setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.7) {
        setAnimate(true);
        observer.unobserve(el);
      }
    }, 200); // 200ms delay to allow Lenis to initialize

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const data = [
    { id: 1, name: "Intelligent websites & mobile applications", img: mobileAbout, content: [
        { id: 1, name: "Headless CMS, Jamstack, and micro frontends" },
        { id: 2, name: "Cloud-native architecture & serverless computing" }
      ]
    },
    { id: 2, name: "UI/UX Design", img: uiAbout, content: [
        { id: 1, name: "Emotionally intelligent interfaces" },
        { id: 2, name: "Adaptive design systems & digital storytelling" }
      ]
    },
    { id: 3, name: "AI-Driven Engineering", img: aiAbout, content: [
        { id: 1, name: "Predictive UX with behavioral modeling" },
        { id: 2, name: "Smart chatbots, NLP systems, and automation" }
      ]
    },
    { id: 4, name: "Digital Marketing & Growth Intelligence", img: digitalAbout, content: [
        { id: 1, name: "SEO, SEM & programmatic marketing" },
        { id: 2, name: "Data-driven content & AI copywriting" }
      ]
    },
  ];

  const directions = [
    { x: -50, y: -50 }, 
    { x: 50, y: -50 }, 
    { x: -50, y: 50 },
    { x: 50, y: 50 },
  ];

  return (
    <div ref={ref} className="h-screen w-full relative flex items-center justify-center">
      <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full">
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          What We Build Future-Ready Digital Solutions
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-3 text-white">
          We offer a robust ecosystem of intelligent solutions that are built for scale, speed, and soul.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-start">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              className="border border-white/50 rounded-[40px] px-4 py-2 sm:px-6 sm:py-3 flex flex-col sm:flex-row gap-4 items-center"
              initial={{ opacity: 0, x: directions[index % 4].x, y: directions[index % 4].y }}
              animate={animate ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: index * 0.5, duration: 0.6 }}
            >
              <div className="flex-1">
                <h2 className="text-white font-[600] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
                  {item.name}
                </h2>
                <ul className="text-white list-disc ml-4 mt-2 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] marker:text-[8px] sm:marker:text-[10px]">
                  {item.content.map((c) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
                </ul>
              </div>
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPageThree;
