import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const FullScreenLayout = ({ children }) => {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    // ✅ Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      smooth: true,
    });
    lenisRef.current = lenis;

    // ✅ Keyboard scroll support (safe way)
    const handleKeyDown = (e) => {
      const scrollAmount = window.innerHeight * 0.3;
      const current = lenis.scroll; // safer than window.scrollY

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          lenis.scrollTo(current + scrollAmount);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          lenis.scrollTo(current - scrollAmount);
          break;
        case "Home":
          e.preventDefault();
          lenis.scrollTo(0);
          break;
        case "End":
          e.preventDefault();
          lenis.scrollTo(document.body.scrollHeight);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // ✅ Smooth scroll loop
    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    // ✅ Resize Lenis when window size changes
    const handleResize = () => lenis.resize();
    window.addEventListener("resize", handleResize);

    // ✅ Force a re-calc once after mount (fixes “stuck” pages)
    setTimeout(() => {
      lenis.resize();
    }, 500);

    // ✅ Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-visible"> {/* ❗ overflow-hidden removed */}
      {children}
    </div>
  );
};

export default FullScreenLayout;
