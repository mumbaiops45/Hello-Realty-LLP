"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 85%", once: true },
        }
      );

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
        }
      );

      gsap.fromTo(textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="w-full py-20 bg-white">

      <div className="mx-auto px-6 lg:px-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div
          ref={imageRef}
          style={{ opacity: 0 }}
          className="relative w-full h-[400px] md:h-[400px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/Home/pexels-shox-29174529.jpg"
            alt="Real Estate"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>

          {/* HEADING */}
          <h2
            ref={headingRef}
            style={{ opacity: 0 }}
            className="text-3xl md:text-4xl font-bold leading-tight pl-4 py-1 border-l-2"
          >
            Trusted Real Estate{" "}
            <span className="text-[var(--primary)]">
              Experts
            </span>
          </h2>

          {/* CONTENT */}
          <p ref={textRef} style={{ opacity: 0 }} className="mt-6 text-gray-600 leading-relaxed">

            With over <strong>30 years of experience</strong> in real estate, we provide trusted solutions across <strong>Residential, Commercial, and Plotted Land investments</strong>.

            <br /><br />

            We serve clients in <strong>Thane, Mumbai, Panvel, and Dubai</strong>, offering expert guidance and premium property opportunities tailored to every need.

            <br /><br />

            Along with buying and selling, we also specialize in <strong>property documentation services</strong> including verification, creation, and legal scrutiny for safe and transparent transactions.

            <br /><br />

            Our focus is simple — <strong>trust, transparency, and long-term relationships</strong> that help clients achieve confident real estate decisions.

          </p>

        </div>

      </div>

    </section>
  );
}
