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
  const [robotTransform, setRobotTransform] = useState("translate(0, 0)");
  const [lastScrollY, setLastScrollY] = useState(0);

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

        if (page5Top && page6Top && page6Top > page5Top) {
          if (currentScrollY < page5Top) {
            // Before page 5: robot on right-top (original position)
            setRobotTransform("translate(0, 0)");
          } else if (currentScrollY >= page6Top) {
            // After page 6: robot fixed at left center
            setRobotTransform("translate(-100vw, 50vh)"); // left offscreen 100vw but vertically center 50vh
          } else {
            // Between page 5 and 6: smooth move from right-top to left-center
            let progress = (currentScrollY - page5Top) / (page6Top - page5Top);
            progress = Math.min(Math.max(progress, 0), 1);
            const translateX = -progress * 100; // vw units, moves fully left out of viewport
            const translateY = progress * 50;  // vh units, moves down to vertical center
            setRobotTransform(`translate(${translateX}vw, ${translateY}vh)`);
          }
        } else {
          // fallback reset
          setRobotTransform("translate(0, 0)");
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <FullScreenLayout>
      <div className="w-full relative overflow-hidden">
        {/* Fixed Backgrounds */}

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
            width: "50%",
            backgroundImage: `url(${Galaxy})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 60px top",
            backgroundSize: "contain",
            opacity: opacities[2],
            transition: "opacity 0.3s ease",
            zIndex: 0,
          }}
        />

        {/* Page 5 Background (Robot) */}
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            right: 40,
            bottom: 0,
            width: "40%",
            backgroundImage: `url(${robot})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
            opacity: opacities[3], // Visible when page 5 is visible
            transition: "opacity 1.5s ease-out, transform 0.3s ease-out",
            zIndex: 0,
            transform: robotTransform,
          }}
        />

        {/* Scrollable Content */}

        {/* Page 2 */}
        <div ref={pageRefs[0]} className="relative w-full min-h-screen z-10">
          <AboutPageTwo />
        </div>

        {/* Page 3 */}
        <div ref={pageRefs[1]} className="relative w-full min-h-screen z-10">
          <AboutPageThree />
        </div>

        {/* Page 4 */}
        <div ref={pageRefs[2]} className="relative w-full min-h-screen z-10">
          <AboutPageFour />
        </div>

        {/* Page 5 */}
        <div ref={pageRefs[3]} className="relative w-full min-h-screen z-10">
          <AboutPageFive />
        </div>

        {/* Page 6 */}
        <div ref={pageRefs[4]} className="relative w-full min-h-screen z-10">
          <AboutPageSix />
        </div>

        <Footer />
      </div>
    </FullScreenLayout>
  );
}

export default AboutPage;
