<<<<<<< HEAD
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import sectorOne from "../../assets/sectorOne.svg";
import sectorTwo from "../../assets/sectorOne.svg";
import sectorThree from "../../assets/sectorOne.svg";
import sectorFour from "../../assets/sectorOne.svg";
import sectorFive from "../../assets/sectorOne.svg";

function ServicePageFive() {
  const sectors = [
    { id: 1, name: "Healthcare", descr: "Healthcare solutions...", img: sectorOne },
    { id: 2, name: "FinTech", descr: "FinTech solutions...", img: sectorTwo },
    { id: 3, name: "E-Commerce", descr: "E-Commerce solutions...", img: sectorThree },
    { id: 4, name: "Education", descr: "Education solutions...", img: sectorFour },
    { id: 5, name: "Real Estate", descr: "Real Estate solutions...", img: sectorFive },
  ];

  const [active, setActive] = useState(0);

  // Config
  const slidesPerView = 4;
  const slideWidth = 220; // px
  const slideGap = 16; // px
  const totalSlideWidth = slideWidth + slideGap;

  // Calculate translateX:
  // Logic:
  // - When active index < slidesPerView - 1, don't move (0 translateX)
  // - When active index >= slidesPerView -1, translate left so active slide is visible at the right edge
  // - Also prevent overscroll beyond last slide

  let translateIndex = 0;
  if (active >= slidesPerView - 1) {
    // Move left by (active - (slidesPerView - 1))
    translateIndex = active - (slidesPerView - 1);
  }
  // Max translateIndex cannot exceed max slides overflow
  const maxTranslateIndex = sectors.length - slidesPerView;
  if (translateIndex > maxTranslateIndex) translateIndex = maxTranslateIndex;

  const translateX = -translateIndex * totalSlideWidth;

  // Handlers
  const prev = () => {
    setActive((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setActive((prev) => Math.min(prev + 1, sectors.length - 1));
  };

  const goToSlide = (index) => {
    setActive(index);
=======
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

// Images
import sector1 from "../../assets/sector1.png";
import sector2 from "../../assets/sector2.png";
import sector3 from "../../assets/sector3.png";
import sector4 from "../../assets/sector4.png";
import sector5 from "../../assets/sector5.png";
import sector6 from "../../assets/sector6.png";
import sector7 from "../../assets/sector7.png";
import sector8 from "../../assets/sector8.png";

// Custom Arrows — now control both slider and active sector
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 text-white hover:bg-white hover:text-black p-2 rounded-full"
  >
    <BiChevronRight size={30} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 text-white hover:bg-white hover:text-black p-2 rounded-full"
  >
    <BiChevronLeft size={30} />
  </button>
);

const ServicePageFive = () => {

  const sectors = [
    {
      id: 1,
      name: "Healthcare",
      descr: "We help healthcare providers go digital with secure, user-friendly solutions. From hospital websites and online appointment booking systems to patient portals and mobile apps, we craft experiences that improve patient engagement and trust. Our digital marketing strategies boost visibility, build credibility, and attract the right audience whether it’s a local clinic, specialty hospital, or telehealth platform.",
      img: sector1
    },
    {
      id: 2,
      name: "Fintech & Banking",
      descr: "We craft secure, user-centric digital solutions for the fintech and banking sector. From banking websites and customer portals to investment apps and digital wallets, we ensure seamless functionality, trust, and compliance. Our design and development approach focuses on intuitive UX, real-time performance, and data security, while our digital marketing strategies help financial products stand out and connect with the right audience.",
      img: sector2
    },
    {
      id: 3,
      name: "Food & Beverage",
      descr: "We help restaurants, cafés, cloud kitchens, and F&B brands build a strong digital presence. From interactive websites and online ordering systems to mobile apps and reservation platforms, we create experiences that delight customers and drive orders. Our digital marketing strategies—including social media campaigns, local SEO, and influencer tie-ups—ensure your brand gets noticed and stays top-of-mind.",
      img: sector3
    },
    {
      id: 4,
      name: "Education & E-learning",
      descr: "We empower educational institutions and e-learning platforms with modern digital solutions. From school and university websites to online course platforms and mobile learning apps, we create tools that make education more accessible and engaging. Our digital marketing strategies help attract students, promote courses, and build strong online communities around your brand.",
      img: sector4
    },
    {
      id: 5,
      name: "Hospitality & Travel",
      descr: "We help hotels, resorts, and travel businesses create immersive digital experiences that drive bookings and build trust. From responsive websites with integrated booking systems to travel planning apps and virtual tours, we design solutions that inspire exploration. Our digital marketing campaigns boost visibility, attract global travelers, and turn visits into unforgettable journeys.",
      img: sector5
    },
    {
      id: 6,
      name: "Fitness & Wellness",
      descr: "Empowering healthier lifestyles through innovative fitness and wellness solutions. From state-of-the-art gyms and personalized training programs to holistic wellness practices, we offer services that help individuals achieve physical, mental, and emotional well-being. Our sector supports active living, guided self-care, and a balanced approach to health for all ages and abilities.",
      img: sector6
    },
    {
      id: 7,
      name: "Real Estate",
      descr: "Connecting people with properties through innovative real estate solutions. Our real estate sector offers a broad range of services, from residential and commercial property sales to leasing, property management, and investment opportunities. We empower clients to find their ideal space whether it’s a new home, business location, or investment property by providing up-to-date listings, virtual tours, expert guidance, and local market insights.",
      img: sector7
    },
    {
      id: 8,
      name: "E-commerce & Retail",
      descr: "Delivering seamless shopping experiences through cutting-edge technology and diverse marketplaces. Our E-commerce & Retail sector connects consumers and businesses by offering a wide range of products and services online, as well as through physical stores. We empower shoppers to explore, compare, and purchase from anywhere, any time, while supporting retailers with powerful digital tools, secure transactions, and efficient logistics.",
      img: sector8
    },
  ];

  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (active < sectors.length - 1) {
      setActive((prev) => prev + 1);
      sliderRef.current?.slickNext();
    }
  };

  const prevSlide = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);
      sliderRef.current?.slickPrev();
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    lazyLoad: "ondemand",
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={nextSlide} />,
    prevArrow: <PrevArrow onClick={prevSlide} />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 bg-black text-white">
<<<<<<< HEAD
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 w-full text-start">Sectors</h2>

      {/* Main Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full max-w-6xl">
        <div className="col-span-1 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src={sectors[active]?.img}
            alt={sectors[active]?.name}
            className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[330px] h-auto object-contain rounded-xl shadow-lg transition-transform duration-500"
          />
        </div>
        <div className="col-span-2 flex flex-col space-y-3 text-center md:text-left">
          <h3 className="text-[#F4DB59] text-2xl sm:text-3xl md:text-4xl font-semibold">
            {sectors[active]?.name}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">{sectors[active]?.descr}</p>
        </div>
      </div>

      {/* Custom Slider */}
      <div className="relative w-full mt-8 flex items-center">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          disabled={active === 0}
          className={`p-2 rounded-full transition-colors ${
            active === 0
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-black/50 text-white hover:bg-white hover:text-black cursor-pointer"
          }`}
          aria-label="Previous Slide"
        >
          <BiChevronLeft size={36} />
        </button>

        {/* Slides Container */}
        <div
          className="overflow-hidden flex-1 mx-4"
          style={{ maxWidth: slidesPerView * slideWidth + (slidesPerView - 1) * slideGap }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(${translateX}px)`, gap: `${slideGap}px` }}
          >
            {sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-[220px] rounded-lg overflow-hidden focus:outline-none
                  ${active === index ? "opacity-100" : "opacity-50 hover:opacity-80"}
                `}
                aria-current={active === index ? "true" : "false"}
                aria-label={`Go to ${sector.name} sector`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
=======
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 w-full text-start">Sectors</h2>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full max-w-6xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={sectors[active]?.id}
            className="col-span-1 flex justify-center md:justify-start mb-4 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[330px] h-[260px]">
              <img
                src={sectors[active]?.img}
                alt={sectors[active]?.name}
                className="w-full h-full object-contain rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={sectors[active]?.name + "-text"}
            className="col-span-2 flex flex-col space-y-3 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-[#F4DB59] text-2xl sm:text-3xl md:text-4xl font-semibold">
              {sectors[active]?.name}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              {sectors[active]?.descr}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Section */}
      <div className="relative w-full max-w-7xl mt-10">
        <Slider ref={sliderRef} {...settings}>
          {sectors.map((sector, index) => (
            <div key={sector.id} className="px-2">
              <button
                onClick={() => setActive(index)}
                className={`w-full h-[110px] rounded-lg overflow-hidden focus:outline-none transition-all duration-300 ${active === index ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
              >
                <img
                  src={sector.img}
                  alt={sector.name}
<<<<<<< HEAD
                  className="w-full h-[100px] object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          disabled={active === sectors.length - 1}
          className={`p-2 rounded-full transition-colors ${
            active === sectors.length - 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-black/50 text-white hover:bg-white hover:text-black cursor-pointer"
          }`}
          aria-label="Next Slide"
        >
          <BiChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}
=======
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </button>
            </div>
          ))}
        </Slider>
        <PrevArrow onClick={prevSlide} />
        <NextArrow onClick={nextSlide} />
      </div>
    </div>
  );
};
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)

export default ServicePageFive;
