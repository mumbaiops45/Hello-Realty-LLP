"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Residential Properties",
    desc: "Helping clients find dream homes, apartments, and luxury villas with complete guidance and trusted support.",
  },
  {
    title: "Commercial Spaces",
    desc: "Providing strategic office spaces and commercial investments in prime business locations for maximum growth.",
  },
  {
    title: "Plotted Land Investments",
    desc: "Assisting in secure land investments for future development with strong legal and market verification.",
  },
  {
    title: "Real Estate Documentation",
    desc: "Complete documentation services including verification, creation, and legal scrutiny for safe transactions.",
  },
  {
    title: "Investment Advisory",
    desc: "Expert guidance to help buyers and investors make profitable and informed real estate decisions.",
  },
  {
    title: "Market Coverage",
    desc: "Serving Thane, Mumbai, Panvel, and Dubai with deep market knowledge and premium property access",
  },
];

export default function ServicesGrid({
  sectionBg = "bg-gray-50",
  cardBg = "bg-white",
  textColor = "text-black",
  descColor = "text-gray-600",
  headingMode = "light",
}) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
        }
      );

      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${sectionBg} py-20 px-6 md:px-16`}>

      {/* Heading */}
      <h2
        ref={headingRef}
        style={{ opacity: 0 }}
        className={`
          text-3xl md:text-4xl font-bold mb-12 border-l-4 pl-4 py-1
          ${headingMode === "dark"
            ? "text-white border-white"
            : "text-black border-[var(--primary)]"
          }
        `}
      >
        Our Real Estate <span className="text-[var(--primary)]">
            Services
          </span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ opacity: 0 }}
            className={`
              ${cardBg}
              rounded-2xl
              overflow-hidden
              shadow-md
              group
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300
              flex flex-col
              shadow-md

            `}
          >

            {/* Content */}
            <div className="p-6 md:p-8 flex-1">
              <p className={`text-sm md:text-base leading-relaxed ${descColor}`}>
                {item.desc}
              </p>
            </div>

            {/* Bottom Title Bar */}
            <div
              className={`
                px-5 py-4 flex items-center justify-center
                relative overflow-hidden
                ${headingMode === "dark"
                  ? "bg-white/80 text-black"
                  : "bg-[#0B1D3A] text-white"
                }
              `}
            >
              <h3 className="text-sm md:text-base font-semibold z-10">
                {item.title}
              </h3>


            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
