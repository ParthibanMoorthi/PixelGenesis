import { useEffect, useState, useRef } from "react";

function ServicePageThree() {
  const data = [
    {
      id: 1,
      name: "Brand Presence & Trust",
      description: [
        "Your digital identity — first impressions matter",
        "Builds credibility and professionalism",
        "24/7 availability = always open for clients",
      ]
    },
    {
      id: 2,
      name: "Growth & Conversions",
      description: [
        "Generates leads and drives sales",
        "Central hub for marketing & SEO traffic",
        "Showcases your services, portfolio, and value clearly",
      ]
    },
    {
      id: 3,
      name: "Control & Insights",
      description: [
        "You own the platform (unlike social media)",
        "Track user behavior and improve experience",
        "Better customer support through forms, chat, FAQs",
      ]
    }
  ];

  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white mb-8 text-left w-full">
        Why a Website is Essential
      </h1>

      {/* Cards with vertical lines */}
      <div className="flex flex-col md:flex-row items-start md:items-stretch w-full divide-y md:divide-y-0 md:divide-x divide-white/30">
        {data.map((item, index) => (
           <div
      key={index}
      className={`flex-1 flex flex-col text-left px-0 md:px-6 py-6 
        ${index === 1 ? 'md:mt-12' : ''} 
        ${index === 2 ? 'md:mt-24' : ''}`}
    >
            <p className="font-[600] text-[26px] text-[#F4DB59] mb-4">{item.name}</p>
            <ul className="grid gap-2">
  {item.description.map((desc, idx) => (
    <li key={idx} className="grid grid-cols-[auto_1fr] gap-2 items-start">
      {/* Custom dot */}
      <span className="w-1 h-1 bg-white rounded-full mt-2"></span>
      {/* Text */}
      <span className="text-white font-[400] text-[17px]">
        {desc}
      </span>
    </li>
  ))}
</ul>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePageThree;
