import React from "react";

function CareerPageFour() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-6 lg:px-12 py-12">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-7xl">
    {/* Text Content */}
    <div className="md:col-span-3 flex flex-col justify-start space-y-6">
      {/* Don’t See a Role That Fits? */}
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-snug text-white">
          Don’t See a Role That Fits?
        </h1>
        <p className="font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] sm:leading-8 text-white">
          No worries. We love surprises. <br />
          Email us your resume & portfolio at <span className="underline">careers@pixel.com</span> or send a voice note telling us why you’d love to join us!
          We’ll create roles for the right humans.
        </p>
      </div>

      {/* Learning Never Stops */}
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-snug text-white">
          Learning Never Stops Here
        </h1>
        <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] text-white">
          We invest in you.
        </h3>
        <ul className="list-disc list-inside font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] sm:leading-8 text-white space-y-1">
          <li>Monthly Learning Stipends</li>
          <li>Access to Premium Courses (Udemy, Coursera, MasterClass)</li>
          <li>Weekly Learning Circles & Tech Talks</li>
          <li>Internal Growth Tracks & Leadership Labs</li>
        </ul>
      </div>
    </div>

    {/* Empty column for spacing */}
    <div className="hidden md:block md:col-span-2"></div>
  </div>
</div>
  );
}

export default CareerPageFour;
