import React, { useState, useEffect } from "react";
import sun from "../../assets/sun.png";
import mercury from "../../assets/mercury.png";
import venus from "../../assets/venus.png";
import earth from "../../assets/earth.png";
import mars from "../../assets/mars.png";
import mask from "../../assets/Mask.png";
import FullScreenLayout from "../FullScreenLayout";
import Footer from "../Footer";
import CareerPageTwo from "./CareerPageTwo";
import CareerPageThree from "./CareerPageThree";
import CareerPageFour from "./CareerPageFour";
import CareerPageFive from "./CareerPageFive";
import CareerPageSix from "./CareerPageSix";

const sections = [
  { name: "Sun", img: sun },
  { name: "Mercury", img: mercury },
  { name: "Venus", img: venus },
  { name: "Earth", img: earth },
  { name: "Mask", img: mask },
  { name: "Mars", img: mars },
];

const positions = [
  { top: 85, left: 85, scale: 3.0 },
  { top: 40, left: 40, scale: 0.5 },
  { top: 25, left: 25, scale: 0.3 },
  { top: 10, left: 5, scale: 0.1 },
];

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (start, end, t) => start + (end - start) * t;

const sectionComponents = [
  CareerPageTwo,
  CareerPageThree,
  CareerPageFour,
  CareerPageFive,
  CareerPageSix,
  Footer,
];

const CareerPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setVh(window.innerHeight);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const stage = scrollY / vh;

  const renderPlanet = (sec, idx) => {
    let top = 0;
    let left = 0;
    let scale = 1;
    let opacity = 0;

    if (sec.name === "Mars") {
      const showMars = stage >= sections.length - 1 - 0.2;
      return (
        <img
          key={sec.name}
          src={sec.img}
          alt={sec.name}
          draggable={false}
          className="absolute z-10 pointer-events-none"
          style={{
            top: "10vh",
            left: "95vw",
            transform: "translate(-50%, -50%) scale(2.5)",
            width: "180px",
            height: "auto",
            opacity: showMars ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      );
    }

    const animationStart = idx;
    const animationEnd = idx + (positions.length - 1);
    const duration = animationEnd - animationStart;

    const progress = clamp01((stage - animationStart) / duration);
    const segmentLength = 1 / (positions.length - 1);
    let segmentIndex = Math.floor(progress / segmentLength);

    segmentIndex = Math.max(0, Math.min(segmentIndex, positions.length - 2));
    const segmentProgress =
      (progress - segmentIndex * segmentLength) / segmentLength;

    const posStart = positions[segmentIndex];
    const posEnd = positions[segmentIndex + 1];

    top = lerp(posStart.top, posEnd.top, segmentProgress);
    left = lerp(posStart.left, posEnd.left, segmentProgress);
    scale = lerp(posStart.scale, posEnd.scale, segmentProgress);

    const isVisible = stage >= animationStart - 0.4 && stage <= animationEnd + 0.4;
    opacity = isVisible ? 1 : 0;

    return (
      <img
        key={sec.name}
        src={sec.img}
        alt={sec.name}
        draggable={false}
        className="absolute z-10 pointer-events-none"
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          width: "180px",
          height: "auto",
          opacity,
          transition: "opacity 0.4s ease-out, transform 0.3s ease-out",
        }}
      />
    );
  };

  const renderSection = (sec, idx) => {
    const SectionComponent = sectionComponents[idx];
    const isFooter = SectionComponent === Footer;

    return (
      <div
        key={idx}
        className={`relative z-20 h-screen w-full flex ${
          isFooter ? "items-end" : "items-center"
        } justify-center text-white text-5xl font-bold`}
      >
        {SectionComponent ? <SectionComponent /> : sec.name}
      </div>
    );
  };

  return (
    <FullScreenLayout>
      <div className="relative w-full">
        {/* Planets (background, fixed) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {sections.map(renderPlanet)}
        </div>

        {/* Sections */}
        {sections.map(renderSection)}
      </div>
    </FullScreenLayout>
  );
};

export default CareerPage;
