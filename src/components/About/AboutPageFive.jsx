import React from "react";


function AboutPageFive() {


    return (
        <div
            className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
        >

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full px-4 sm:px-6 md:px-6 lg:px-12">
                <div className="col-span-1">
                    <div className="h-screen flex flex-col gap-12 justify-center items-start">

                        <div className="flex flex-col gap-6 justify-center">
                            <p className="font-[600] leading-[1.2] text-[20px] sm:text-[32px] md:text-[40px] text-white">
                                Let’s Co-Create the Future
                            </p>

                            <p className="font-[500] leading-[2] text-[8px] sm:text-[12px] md:text-[15px] text-white">
                                The future is not automated. It’s augmented.
We don’t just automate tasks — we enhance creativity, empower humans, and amplify
results. Whether you're a startup building MVPs or an enterprise reshaping legacy
systems, we are your digital growth architects. From ideation to launch — and beyond —
we stay with you at every stage of your transformation. </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default AboutPageFive;
