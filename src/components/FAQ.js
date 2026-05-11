"use client";

import { useState, useEffect, useRef } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState([]);
  const cardsRef = useRef([]);

  const faqs = [
    {
      q: "What services does this platform provide?",
      a: "Our platform helps you buy, sell, and rent properties easily. We connect verified buyers, sellers, and agents to ensure a smooth real estate experience."
    },
    {
      q: "How can I search for properties?",
      a: "You can search properties using filters like location, budget, property type, and amenities. This makes it easy to find your ideal home or investment property."
    },
    {
      q: "Are the property listings verified?",
      a: "Yes. We ensure that all listed properties are verified by our team or trusted agents to maintain transparency and avoid fake listings."
    },
    {
      q: "Do you offer assistance for property documentation?",
      a: "Yes, we provide full support for legal paperwork, documentation, and ownership transfer to make your property transaction hassle-free."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      className="px-8 md:px-15 lg:px-30 pt-16 pb-20 relative bg-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent z-0"></div>

      {/* Heading (LEFT ALIGNED WITH BORDER) */}
      <div className="relative z-10 mb-12 text-left ">
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
          const isVisible = visible[i];

          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                bg-white/70 backdrop-blur-lg
                border border-gray-200
                rounded-xl p-6
                cursor-pointer
                transition-all duration-700 ease-out
                shadow-sm hover:shadow-md
                ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
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