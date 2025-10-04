import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePageEight() {
  const testimonials = [
    {
      id: 1,
      name: "Kishore",
      date: "Jul",
      via: "18 2025, Facebook",
      description:
        "Pixel Genesis delivered exactly what we needed. Professional, efficient, and creative team!",
    },
    {
      id: 2,
      name: "Anita",
      date: "Aug",
      via: "5 2025, LinkedIn",
      description:
        "Amazing experience! The team understood our vision and executed it perfectly.",
    },
    {
      id: 3,
      name: "Ramesh",
      date: "Sep",
      via: "12 2025, Google Reviews",
      description:
        "Highly recommend Pixel Genesis. Their attention to detail and communication is top-notch.",
    },
    {
      id: 4,
      name: "Sita",
      date: "Oct",
      via: "1 2025, Twitter",
      description:
        "Professional team and great support throughout the project. Loved working with them!",
    },
    {
      id: 5,
      name: "Rahul",
      date: "Oct 20, 2025",
      via: "LinkedIn",
      description:
        "Creative solutions and fast delivery. Pixel Genesis exceeded our expectations.",
    },
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: false, // Disable infinite for proper arrow behavior
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const Arrow = ({ direction, onClick }) => (
    <div
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-20 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 text-black p-3 md:p-4 transition-all duration-300 ${
        direction === "left" ? "-left-3 md:-left-5" : "-right-3 md:-right-5"
      }`}
    >
      {direction === "left" ? <FaChevronLeft className="text-[18px] text-white"/> : <FaChevronRight className="text-[18px] text-white"/>}
    </div>
  );

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-12 py-16">
      {/* Title */}
      <div className="w-full text-start mb-12 max-w-6xl">
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          Testimonials
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-4 text-white max-w-3xl">
          We build more than software—we build trust. Here’s what our partners are saying about working with Pixel Genesis.
        </p>
      </div>

      {/* Slider */}
      <div className="w-full relative max-w-6xl">
        {/* Left Arrow */}
        {currentSlide > 0 && (
          <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()} />
        )}

        {/* Right Arrow */}
        {currentSlide < testimonials.length - 2 && (
          <Arrow direction="right" onClick={() => sliderRef.current.slickNext()} />
        )}

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-3">
              <div className="bg-white/6 border-[0.5px] border-white/30 backdrop-blur-md rounded-[34px] p-6 flex flex-col gap-3 h-full transition-transform duration-300">
                {/* Top row: User icon + Name + Date/Via */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FaUserCircle className="text-white text-3xl" />
                    <span className="text-white text-[22px] font-light">{t.name}</span>
                  </div>
                  <div className="text-white text-[14px]">
                    {t.date} <span className="text-white/80 text-[13px] pl-1">via {t.via}</span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] leading-7">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomePageEight;
