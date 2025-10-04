import React from "react";

function ServicePageFour() {
  return (
    <div className="min-h-screen w-full relative flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 overflow-hidden">
      {/* Text container */}
      <div className="flex flex-col items-start">
        <p className="font-bold leading-tight text-[18px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white mb-10">
          Features of a Website
        </p>

        <p className="font-medium leading-relaxed text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white mb-6">
          A modern website comes packed with features designed to attract, engage, and convert visitors. At its core, it should be fully responsive,
          ensuring seamless performance across desktops, tablets, and mobile devices. Speed and performance are critical—fast-loading pages
          reduce bounce rates and improve user satisfaction. Intuitive navigation and a clean, well-structured layout make it easy for users to explore
          content and find what they need. SEO optimization is built-in, helping the site rank better on search engines and driving organic traffic.
        </p>

        <p className="font-medium leading-relaxed text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white">
          In addition to that, websites often include integrated contact forms, chat support, and lead capture tools to improve communication and
          conversions. Security features like SSL certificates and data protection ensure trust and safety. Many modern sites support CMS platforms
          (like WordPress) for easy content updates and scalability.
        </p>
      </div>
    </div>
  );
}

export default ServicePageFour;
