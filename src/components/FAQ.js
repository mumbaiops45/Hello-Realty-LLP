"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What real estate services do you provide?",
      a: "We offer residential, commercial, and plotted land investments along with end-to-end real estate solutions including buying, selling, and investment guidance.",
    },
    {
      q: "Which locations do you serve?",
      a: "We serve clients across Thane, Mumbai, Panvel, and Dubai, providing access to premium property opportunities in key real estate markets.",
    },
    {
      q: "Are your property listings verified?",
      a: "Yes, all properties are carefully verified to ensure legal clarity, transparency, and safe transactions for buyers and investors.",
    },
    {
      q: "Do you provide documentation support?",
      a: "Yes, we specialize in complete real estate documentation including verification, creation, scrutiny, and ownership transfer assistance.",
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
        }
      );

      gsap.fromTo(cardsRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current[0], start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="px-8 md:px-15 lg:px-30 pt-16 pb-20 relative bg-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent z-0"></div>

      {/* Heading */}
      <div ref={headingRef} style={{ opacity: 0 }} className="relative z-10 mb-12 text-left ">
        <span className="text-[13px] px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/10 uppercase tracking-wider inline-block mb-3">
          FAQ's
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-black border-l-2 border-[var(--primary)] pl-4 py-1">
          Frequently Asked <span className="text-[var(--primary)]">Questions</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl">
          Everything you need to know about buying, selling, and renting properties with us.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ opacity: 0 }}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl p-6 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setActiveIndex(isActive ? null : i)}
            >
              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h5
                  className={`font-medium transition-colors duration-300
                    ${isActive ? "text-[var(--primary)]" : "text-black"}
                  `}
                >
                  {faq.q}
                </h5>

                <span
                  className={`text-2xl text-[var(--primary)] transition-transform duration-300
                    ${isActive ? "rotate-45" : "rotate-0"}
                  `}
                >
                  +
                </span>
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
