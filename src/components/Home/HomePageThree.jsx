import { useRef } from "react";
import borderBox from "../../../src/assets/borderBox.svg";
import borderBoxFill from "../../../src/assets/borderBoxFill.svg";

function HomePagThree() {
  const ref = useRef();

  const data = [
    {
      id: 1,
      name: "Web Design & Development",
      description:
        "Crafting stunning and functional websites tailored to your business needs.",
    },
    {
      id: 2,
      name: "Software Development",
      description:
        "Building robust, scalable, and innovative software solutions for every challenge.",
    },
    {
      id: 3,
      name: "Digital Marketing",
      description:
        "Driving online visibility and growth with data-driven marketing strategies.",
    },
  ];

  return (
    <div
      ref={ref}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Grid Content */}
      <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full max-w-7xl">
        <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
          Core Services
        </h1>

        <div className="flex items-center gap-12 mt-12">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="relative w-full h-96 sm:h-[28rem] md:h-[30rem] lg:h-[20rem] group flex items-center justify-center cursor-pointer"
            >
              {/* Default border box */}
              <img
                src={borderBox}
                alt="border box"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Filled border box on hover */}
              <img
                src={borderBoxFill}
                alt="border box fill"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-0 transition-opacity scale-105 duration-300 group-hover:opacity-100"
              />

              {/* Index number */}
              <div className="absolute top-2 right-14 z-20 text-white font-bold text-lg sm:text-xl md:text-2xl">
                0{index + 1}
              </div>

              {/* Content inside the box - centered */}
              <div className="relative z-10 px-6 mx-4 py-8 flex flex-col items-start justify-center text-start h-full w-full">
                <p className="font-[600] text-[26px] text-white mb-4 group-hover:text-black transition-colors duration-300">
                  {item.name}
                </p>
                <p className="mt-4 font-[400] text-[20px] text-white group-hover:text-black transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePagThree;
