import React from "react";

function CareerPageSix() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-7xl">
        {/* Text Content */}
        <div className="md:col-span-3 flex flex-col justify-start space-y-5">
          {/* Heading */}
          <div className="mt-5 flex flex-col gap-3">
            <h1 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[38px] leading-snug text-white">
              Let’s Grow Together
            </h1>
            <p className="font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
              The future doesn’t belong to followers — It belongs to the creators, the disruptors, the explorers, and the ones who ask,
            </p>
          </div>

          {/* Quote */}
          <p className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-7 sm:leading-8 text-white">
            “What if?”
          </p>

          {/* Paragraph */}
          <p className="font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
            At Pixel genesis, growth isn’t just a goal — it’s our culture. Here, you don’t just sharpen your skills — you evolve as a visionary, a teammate, a leader, and a lifelong learner.
          </p>

          {/* Bullet List */}
          <ul className="list-disc list-inside font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white space-y-2">
            <li>You’ll work on game-changing projects.</li>
            <li>Collaborate with curious, kind humans.</li>
            <li>And push boundaries in tech, design, AI, and beyond.</li>
          </ul>

          {/* Closing Paragraph */}
          <p className="mt-2 font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
            Whether you're building your first app or scaling your 50th, this is where your journey accelerates.
          </p>
        </div>

        {/* Empty column for spacing on larger screens */}
        <div className="hidden md:block md:col-span-2"></div>
      </div>
    </div>
  );
}

export default CareerPageSix;
