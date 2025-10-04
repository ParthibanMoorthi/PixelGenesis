import FullScreenLayout from "../FullScreenLayout";
import aboutBg from "../../../src/assets/aboutBg.svg";
import AboutPageTwo from "./AboutPageThree";

function AboutTwo() {
    return (
        <div className="m-h-screen w-full relative overflow-hidden">


            <div className="relative z-10 grid grid-cols-1 md:grid-cols-8 h-full px-4 sm:px-6 md:px-6 lg:px-12">
                <div className="col-span-6">
                    <div className="h-screen flex flex-col justify-center items-start">
                        <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                            Crafting the Future of <br /> Human-Centric Digital Intelligence
                        </p>

                        <p className="mt-6 font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
                            Welcome to Pixel Genesis the convergence point of intelligence, design, and
                            technology. We are a next-generation digital innovation partner helping companies
                            transform into adaptive, AI-driven, and human-focused digital ecosystems.
                        </p>

                        <p className="mt-6 font-[500] leading-[2] text-[8px] sm:text-[12px] md:text-[15px] text-white">
                            Our universe
                            spans across web development, app engineering, UI/UX design, digital marketing, and
                            next-gen HR consulting. We're not just building software. We're building intuitive
                            experiences, evolved strategies, and smart infrastructuresOur universe
                            spans across web development, app engineering, UI/UX design, digital marketing, and
                            next-gen HR consulvg. We're not just building software. We're building intuitive
                            experiences, evolved strategies, and smart infrastructures that help businesses think,
                            adapt, and grow in real time. that help businesses think,
                            adapt, and grow in real time.
                        </p>
                    </div>

                    <div className="h-screen flex flex-col gap-6 justify-center items-start">
                        <div>
                            <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                                Our Digital Evolution Philosophy
                            </p>
                            <p className="mt-4 font-[500] leading-[2] text-[8px] sm:text-[12px] md:text-[15px] text-white">
                                The digital era isn’t coming it’s already here. Businesses must evolve beyond static
                                platforms and generic interfaces. They need fluid, intelligent, and emotionally aware
                                products that speak the user’s language, predict behaviour, and respond to demand before
                                it arises. At pixel genesis, our philosophy is rooted in creating experiences that
                                adapt to the human pulse experiences that are visually stunning, functionally brilliant,
                                and emotionally intuitive. Every website we build, every app we develop, every campaign
                                we launch is crafted not just for the eyes, but for the soul of the user and business.
                            </p>
                        </div>
                        <div>
                            <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                                Human + Machine: Our Vision for Tomorrow
                            </p>
                            <p className="mt-4 font-[500] leading-[2] text-[8px] sm:text-[12px] md:text-[15px] text-white">
                                We believe the next generation of digital leadership belongs to those who balance human
                                empathy with machine intelligence. That's why we infuse artificial intelligence into the core
                                of every product. Our vision is to help brands evolve beyond transactions  to build trust,
                                loyalty, and immersive engagement through data, automation, and design. Imagine a
                                world where your app greets users by mood, your website evolves with behavior, and your
                                marketing adapts with emotion. That world isn't distant it's here. And we’re building it.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutTwo;
