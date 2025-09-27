import { useEffect, useState, useRef } from "react";
import robot from "../../../src/assets/robot.svg";

function HomePagTwo() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
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
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Grid Content */}
      <div className="grid grid-cols-3 gap-3 px-4 sm:px-6 md:px-6 lg:px-12 w-full">
        {/* Text */}
        <div className="col-span-2">
          <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
            About us
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-4 text-white">
            At Pixel Genesis, we’re passionate about turning ideas into impactful digital solutions.
            As a full-service technology partner, we specialize in website development, custom
            software development, and digital marketing, helping businesses thrive in the digital age.
          </p>
          <p className="mt-6 sm:mt-8 text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 text-white">
            Founded with a vision to simplify technology, we bring together creativity, innovation, and
            technical expertise to deliver tailored solutions that meet your unique business goals.
            Whether you're a startup looking for your first online presence or an enterprise in need
            of complex systems, we have the tools and talent to bring your vision to life.
          </p>
        </div>

        {/* Robot Image */}
        <div className="col-span-1 flex justify-end items-end relative">
          <img
            src={robot}
            alt="robot"
            className={`
    transition-transform duration-1000 ease-out
    ${animate ? "translate-x-0 translate-y-0" : "translate-x-full translate-y-32"}
    w-[350px] sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[750px]
    object-contain
  `}
            style={{ transitionDelay: animate ? "500ms" : "0ms" }}
          />

        </div>
      </div>
    </div>
  );
}

export default HomePagTwo;
