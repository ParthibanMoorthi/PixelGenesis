import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import rocket from "../../../src/assets/rocket.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    line1:
      "We begin by understanding your business, goals, target audience, and project requirements. This is where we listen, learn, and plan.",
    line2:
      "Business needs analysis | Competitor research | Goal setting & solution mapping",
  },
  {
    id: 2,
    line1:
      "Once we understand your objectives, we define the roadmap. For software or website projects, we create a sitemap, wireframes, or project specs.",
    line2:
      "Timeline & milestones | Tech stack decisions | KPI-based marketing strategy",
  },
  {
    id: 3,
    line1:
      "Our creative team designs user-friendly, visually compelling layouts that reflect your brand and drive engagement.",
    line2:
      "UI/UX design | Prototypes | Feedback & revisions",
  },
  {
    id: 4,
    line1:
      "Now the idea becomes reality. Our developers build, integrate features, and ensure performance, scalability, and security.",
    line2:
      "Frontend + Backend | API integrations | QA & Testing",
  },
];

export default function StepsOverview() {
  const containerRef = useRef(null);

useEffect(() => {
  const container = containerRef.current;
  const sections = gsap.utils.toArray(".step-section");
  const totalWidth = container.scrollWidth;

  if (window.innerWidth >= 768) {
    const horizontalScroll = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        id: "horizontal",
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + (totalWidth - window.innerWidth),
      },
    });

    // Subtle rocket movement on scroll
    sections.forEach((section, index) => {
      const rocketEl = section.querySelector(`.rocket-${index + 1}`);
      if (!rocketEl) return;

      gsap.fromTo(
        rocketEl,
        {
          x: -50,
          y: -50,
          rotation: -5,
          scale: 1,
          autoAlpha: 0.8,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          autoAlpha: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: horizontalScroll,
            start: "left center",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  }

  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
}, []);


  return (
    <section id="steps" className="relative w-full">
      {/* Static Header */}


      {/* Horizontal Scrollable Section */}
      <div
        ref={containerRef}
        className="w-full relative flex flex-col md:flex-row md:overflow-hidden"
      >

        <div className="absolute top-16 w-full px-6 md:px-12 py-12 text-center md:text-left max-w-6xl mx-auto">
          <h1 className="font-[600] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-white">
            Our Work Process
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 mt-4 text-white">
            We follow a transparent, efficient, and collaborative approach to ensure every project meets expectations on time and on budget. Whether you're building a website, custom software, or launching a marketing campaign, we guide you every step of the way.
          </p>
        </div>

        {steps.map((step, index) => (
          <article
            key={step.id}
            className="step-section flex-shrink-0 w-full md:w-screen h-auto md:h-screen py-16 px-6 md:px-12 flex flex-col items-center justify-end text-center md:text-left"
          >
            <img
              src={rocket}
              alt="Rocket"
              className={`rocket-img rocket-${index + 1} w-80 md:w-96`}
            />
            <div className="max-w-2xl mb-4">
              <p className="text-white mb-4 text-center text-base md:text-lg">{step.line1}</p>
              <p className="text-white text-center text-sm md:text-base">{step.line2}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

