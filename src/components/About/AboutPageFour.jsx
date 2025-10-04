import React from "react";


function AboutPageFour() {


    return (
        <div
            className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
        >

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-4 sm:px-6 md:px-6 lg:px-12">
                <div className="col-span-1">
                    <div className="h-screen flex flex-col gap-12 justify-center items-start">

                        <div className="flex flex-col gap-6 justify-center">
                            <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                                Our Digital Blueprint
                            </p>

                            <p className="font-[500] leading-[2] text-[8px] sm:text-[12px] md:text-[15px] text-white">
                                Our delivery blueprint merges agile methodology with cognitive computing, ensuring that
                                every solution is not just built it evolves. We combine design sprints with real-time
                                analytics and AI iteration to launch products that are smarter with every interaction.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 justify-center">
                            <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                                Why Brands Choose Us
                            </p>

                            <ul className="list-disc list-inside text-white text-[8px] sm:text-[12px] md:text-[15px] leading-[2]">
                                <li>Unified Innovation Hub from engineering to marketing to human systems</li>
                                <li>Built-in AI across all services</li>
                                <li>Deep understanding of behavioral science, design psychology, and user flow</li>
                                <li>Transparent delivery, continuous optimization, and empathetic collaboration</li>
                                <li>Sustainable, scalable, and secure solutions for long-term impact</li>
                            </ul>
                        </div>

                    </div>

                    <div className="h-screen flex flex-col gap-6 justify-center items-start">
                        <div>
                            <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                                Industry-Specific Intelligence
                            </p>
                            <p className="mt-4 font-[500] leading-[2] text-[8px] sm:text-[12px] md:text-[15px] text-white">
                                Whether it's a fintech platform, an e-commerce app, a wellness brand, or a virtual learning
                                environment we have the cross-domain expertise and tools to elevate any industry. Our
                                solutions are already powering transformation in:
                            </p>
                            <ul className="list-disc list-inside text-white text-[8px] sm:text-[12px] md:text-[15px] leading-[2]">
                                <li>HealthTech & Wellness</li>
                                <li>EdTech & E-Learning</li>
                                <li>Retail & D2C</li>
                                <li>SaaS & Startups</li>
                                <li>HRTech & PeopleOps</li>
                                <li>Logistics, Real Estate, and Manufacturing</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutPageFour;
