import { useEffect, useState, useRef } from "react";
<<<<<<< HEAD

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
=======
import borderBox from "../../../src/assets/borderBox.svg";
import borderBoxFill from "../../../src/assets/borderBoxFill.svg";

function HomePagThree() {

    const ref = useRef();

    const data = [
        {
            id: 1,
            name: "Web Design & Development",
            description: "Crafting stunning and functional websites tailored to your business needs.",
        },
        {
            id: 2,
            name: "Software Development",
            description: "Building robust, scalable, and innovative software solutions for every challenge.",
        },
        {
            id: 3,
            name: "Digital Marketing",
            description: "Driving online visibility and growth with data-driven marketing strategies.",
        },
    ];
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)

    return (
        <div
            ref={ref}
            className="h-screen w-full relative flex items-center justify-center overflow-hidden"
        >
            {/* Grid Content */}
            <div className="px-4 sm:px-6 md:px-6 lg:px-12 w-full">
<<<<<<< HEAD

                <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
                    Core Services
                </h1>
                <div className="flex items-center gap-12 mt-8">
                    {data.map((item, index) => (
                        <div key={index} className="relative w-full h-64 group cursor-pointer">
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M 8 0 H 72 L 100 18 V 92 A 8 8 0 0 1 92 100 H 8 A 8 8 0 0 1 0 92 V 8 A 8 8 0 0 1 8 0 Z"
                                    fill="rgba(255,255,255,0.05)"
                                    stroke="rgba(255,255,255,0.2)"
                                    strokeWidth="0.8"
                                />
                            </svg>
                            <div className="relative z-10 px-6 py-4 flex flex-col h-full">
                                <p className="font-[600] text-[26px] text-white group-hover:text-white transition-colors duration-300">
                                    {item.name}
                                </p>
                                <p className="mt-4 font-[400] text-[20px] text-white group-hover:text-white transition-colors duration-300">
=======
                <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
                    Core Services
                </h1>

                <div className="flex items-center gap-12 mt-12">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full h-96 sm:h-[28rem] md:h-[30rem] lg:h-[20rem] group flex items-center justify-center"
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
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
<<<<<<< HEAD

=======
>>>>>>> f8e956a (Initial commit with GSAP rocket animations)
                </div>

            </div>
        </div>
    );
}

export default HomePagThree;
