"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Find & Shortlist Property",
        description:
            "Explore verified residential, commercial, and land listings across Thane, Mumbai, Panvel, and Dubai.",
    },
    {
        number: "02",
        title: "Expert Site Visits",
        description:
            "Schedule guided property visits with our experts for clear evaluation and decision-making.",
    },
    {
        number: "03",
        title: "Legal Documentation",
        description:
            "Complete assistance in verification, documentation, and legal compliance for safe transactions.",
    },
    {
        number: "04",
        title: "Hassle-Free Ownership",
        description:
            "Smooth ownership transfer with full transparency and end-to-end support from our team.",
    },
];

export default function Process() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const subRef = useRef(null);
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

            gsap.fromTo(subRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2,
                    scrollTrigger: { trigger: subRef.current, start: "top 85%", once: true },
                }
            );

            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 70 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: { trigger: cardsRef.current[0], start: "top 85%", once: true },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#0B1D3A] py-24 px-6 lg:px-12">

            {/* Heading */}
            <div className=" mb-14">
                <h2 ref={headingRef} style={{ opacity: 0 }} className="text-3xl md:text-4xl font-bold text-white pl-4 py-1 border-l-2">
                    Our <span className="text-[var(--primary)]">Process</span>
                </h2>
                <p ref={subRef} style={{ opacity: 0 }} className="text-white/60 mt-2">
                    From search to ownership in just a few easy steps
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {steps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        style={{ opacity: 0 }}
                        className="group relative rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 overflow-hidden"
                    >

                        {/* Number */}
                        <div className="text-[var(--primary)]/50 text-4xl font-bold mb-6">
                            {step.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 leading-relaxed">
                            {step.description}
                        </p>

                        {/* Bottom line animation */}
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>

                    </div>
                ))}

            </div>
        </section>
    );
}
