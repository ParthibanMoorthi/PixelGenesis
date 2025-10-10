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
<<<<<<< HEAD
    useRef(null), // Page 2
    useRef(null), // Page 3
    useRef(null), // Page 4
    useRef(null), // Page 5
    useRef(null), // Page 6
  ];
  const [opacities, setOpacities] = useState([0, 0, 0, 0, 0]);
  const [robotTransform, setRobotTransform] = useState("translate(0, 0)");
  const [lastScrollY, setLastScrollY] = useState(0);
=======
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [opacities, setOpacities] = useState([0, 0, 0, 0, 0]);
  const [robotTransform, setRobotTransform] = useState("translate(0, 0) scale(1)");
  const [robotOpacity, setRobotOpacity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
<<<<<<< HEAD
        // Update opacities for all pages
=======
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
        const newOpacities = pageRefs.map((ref) => {
          if (!ref.current) return 0;
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
<<<<<<< HEAD
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
=======
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
          const fractionVisible = visibleHeight / rect.height;
          return Math.max(0, Math.min(fractionVisible * 1.8, 1));
        });
        setOpacities(newOpacities);

        const currentScrollY = window.scrollY || window.pageYOffset;
        setLastScrollY(currentScrollY);

        const page5Top = pageRefs[3].current?.offsetTop || 0;
        const page6Top = pageRefs[4].current?.offsetTop || 0;

<<<<<<< HEAD
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
=======
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
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
        }

        ticking = false;
      });
    };

<<<<<<< HEAD
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
=======
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
<<<<<<< HEAD
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
=======
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  // Responsive robot width based on screen size
  const robotWidth = windowWidth > 1024 ? "40%" : windowWidth > 768 ? "50%" : "70%";
  const galaxyWidth = windowWidth > 768 ? "50%" : "80%";
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)

  return (
    <FullScreenLayout>
      <div className="w-full relative overflow-hidden">
<<<<<<< HEAD
        {/* Fixed Backgrounds */}

=======
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
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
<<<<<<< HEAD
            width: "50%",
=======
            width: galaxyWidth,
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
            backgroundImage: `url(${Galaxy})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 60px top",
            backgroundSize: "contain",
            opacity: opacities[2],
            transition: "opacity 0.3s ease",
            zIndex: 0,
          }}
        />

<<<<<<< HEAD
        {/* Page 5 Background (Robot) */}
=======
        {/* Page 5 & 6 Background (Robot) */}
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            right: 40,
            bottom: 0,
<<<<<<< HEAD
            width: "40%",
=======
            width: robotWidth,
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
            backgroundImage: `url(${robot})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
<<<<<<< HEAD
            opacity: opacities[3], // Visible when page 5 is visible
            transition: "opacity 1.5s ease-out, transform 0.3s ease-out",
=======
            opacity: robotOpacity,
            transition: "opacity 1.5s ease-out, transform 0.6s ease-out",
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
            zIndex: 0,
            transform: robotTransform,
          }}
        />

<<<<<<< HEAD
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
=======
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
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
        <div ref={pageRefs[4]} className="relative w-full min-h-screen z-10">
          <AboutPageSix />
        </div>

        <Footer />
      </div>
    </FullScreenLayout>
  );
}

export default AboutPage;
