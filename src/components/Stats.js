"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "1000+", label: "Property Deals" },
    { number: "4+", label: "Locations Served" },
    { number: "360°", label: "Real Estate Services" },
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-6 bg-[#0B1D3A]">
      <div className=" mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ opacity: 0 }}
              className="text-center p-6 bg-white/10 backdrop-blur-3xl rounded-2xl shadow-sm border hover:shadow-md transition-all duration-300"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
                {item.number}
              </h2>

              <p className="mt-2 text-gray-400 font-medium">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
