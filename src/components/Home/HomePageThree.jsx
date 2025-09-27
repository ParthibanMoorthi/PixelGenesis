import { useEffect, useState, useRef } from "react";
import robot from "../../../src/assets/robot.svg";

function HomePagThree() {
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

    const data = [
        { id: 1, name: "Web Design & Development", description: "Crafting stunning andfunctional websitestailored to your business needs." },
        { id: 2, name: "Software Development", description: "Building robust, scalable, and innovative software solutions for every challenge." },
        { id: 3, name: "Digital Marketing", description: "Driving online visibility and growth with data-driven marketing strategies." },
    ]

    return (
        <div
            ref={ref}
            className="h-screen w-full relative flex items-center justify-center overflow-hidden"
        >
            {/* Grid Content */}
            <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full">

                <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
                    Core Services
                </h1>
                <div className="flex items-center gap-12 mt-8">
                 {data.map((item, index) => (
  <div className="group relative h-64 rounded-[24px] px-6 py-4 bg-white/5 backdrop-blur-md border border-white/20 transition-all duration-500 hover:bg-white">
    <p className="font-[600] text-[26px] text-white group-hover:text-black transition-colors duration-300">
      {item.name}
    </p>
    <p className="mt-4 font-[400] text-[20px] text-white group-hover:text-black transition-colors duration-300">
      {item.description}
    </p>
  </div>
))}


                    <div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default HomePagThree;
