import { useRef, useEffect, useState } from "react";
import FullScreenLayout from "../FullScreenLayout";
import aboutBg from "../../../src/assets/aboutBg.svg";
import AboutPageTwo from "./AboutPageTwo";
import AboutPageThree from "./AboutPageThree";
import AboutPageFour from "./AboutPageFour";
import AboutPageFive from "./AboutPageFive";
import Galaxy from "../../assets/Galaxy.svg";
import robot from "../../assets/robot.svg";
import AboutPageSix from "./AboutPageSix";
import Footer from "../Footer";

function AboutPage() {
  const pageRefs = [
    useRef(null), // Page 2
    useRef(null), // Page 3
    useRef(null), // Page 4
    useRef(null), // Page 5
    useRef(null), // Page 6
  ];

  const [opacities, setOpacities] = useState([0, 0, 0, 0, 0]);
  const [robotTransform, setRobotTransform] = useState("translate(0, 0) scale(1)");
  const [robotOpacity, setRobotOpacity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        // Update opacities for all pages
        const newOpacities = pageRefs.map((ref) => {
          if (!ref.current) return 0;
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const fractionVisible = visibleHeight / rect.height;
          return Math.max(0, Math.min(fractionVisible * 1.8, 1));
        });
        setOpacities(newOpacities);

        const currentScrollY = window.scrollY || window.pageYOffset;
        setLastScrollY(currentScrollY);

        const page5Top = pageRefs[3].current?.offsetTop || 0;
        const page6Top = pageRefs[4].current?.offsetTop || 0;

        // Robot opacity
        setRobotOpacity(currentScrollY >= page5Top ? 1 : 0);

        if (page5Top && page6Top && page6Top > page5Top) {
          if (currentScrollY < page5Top) {
            setRobotTransform("translate(0, 0) scale(1)");
          } else if (currentScrollY >= page6Top) {
            setRobotTransform("translate(-60vw, -24vh) scale(0.5)");
          } else {
            let progress = (currentScrollY - page5Top) / (page6Top - page5Top);
            progress = Math.min(Math.max(progress, 0), 1);

            // Scale horizontal movement with screen width
            const translateX = -progress * 60; 
            const translateY = -progress * 24;
            const scale = 1 - 0.5 * progress;
            setRobotTransform(`translate(${translateX}vw, ${translateY}vh) scale(${scale})`);
          }
        }

        ticking = false;
      });
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  // Responsive widths
  const robotWidth = windowWidth > 1024 ? "40%" : windowWidth > 768 ? "50%" : "70%";
  const galaxyWidth = windowWidth > 768 ? "50%" : "80%";

  return (
    <FullScreenLayout>
      <div className="w-full relative overflow-hidden">
        {/* Page 2 Background */}
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `url(${aboutBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "auto 100%",
            opacity: opacities[0],
            transition: "opacity 0.3s ease",
            zIndex: 0,
          }}
        />

        {/* Page 4 Background (Galaxy) */}
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            top: 60,
            right: 0,
            bottom: 0,
            width: galaxyWidth,
            backgroundImage: `url(${Galaxy})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 60px top",
            backgroundSize: "contain",
            opacity: opacities[2],
            transition: "opacity 0.3s ease",
            zIndex: 0,
          }}
        />

        {/* Page 5 & 6 Background (Robot) */}
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            right: 40,
            bottom: 0,
            width: robotWidth,
            backgroundImage: `url(${robot})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
            opacity: robotOpacity,
            transition: "opacity 1.5s ease-out, transform 0.6s ease-out",
            zIndex: 0,
            transform: robotTransform,
          }}
        />

        {/* Scrollable Pages */}
        <div ref={pageRefs[0]} className="relative w-full min-h-screen z-10">
          <AboutPageTwo />
        </div>
        <div ref={pageRefs[1]} className="relative w-full min-h-screen z-10">
          <AboutPageThree />
        </div>
        <div ref={pageRefs[2]} className="relative w-full min-h-screen z-10">
          <AboutPageFour />
        </div>
        <div ref={pageRefs[3]} className="relative w-full min-h-screen z-10">
          <AboutPageFive />
        </div>
        <div ref={pageRefs[4]} className="relative w-full min-h-screen z-10">
          <AboutPageSix />
        </div>

        <Footer />
      </div>
    </FullScreenLayout>
  );
}

export default AboutPage;
