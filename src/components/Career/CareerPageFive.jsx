import React from "react";

function CareerPageFive() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-6 lg:px-12 py-12">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-7xl">
    {/* Text Content */}
    <div className="md:col-span-3 flex flex-col justify-start space-y-6">
      {/* Don’t See a Role That Fits? */}
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-snug text-white">
         How We Hire
        </h1>
     <ul className="list-disc list-inside font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] sm:leading-8 text-white space-y-1">
  <li>We believe hiring should be transparent, respectful, and bias-free.</li>
  <li>You Apply: Tell us who you are beyond the resume.</li>
  <li>We Talk First: a casual intro chat.</li>
  <li>We Explore: Role-specific challenge or case study.</li>
  <li>We Align: Final conversation with leadership.</li>
  <li>We Welcome You: Offer, onboarding, and your journey begins.</li>
</ul>

      </div>

      {/* Learning Never Stops */}
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-snug text-white">
          Our goal?
        </h1>
       <p className="font-[500] leading-[1.5] text-[10px] sm:text-[14px] md:text-[18px] text-white">
          To hire not just the most talented — but the most curious, kind, and committed humans.
        </p>
     
      </div>
    </div>

    {/* Empty column for spacing */}
    <div className="hidden md:block md:col-span-2"></div>
  </div>
</div>
  );
}

export default CareerPageFive;
