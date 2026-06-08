"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    HiOutlineShieldCheck,
    HiOutlineHome,
    HiOutlineLightningBolt,
    HiOutlineSupport,
} from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <HiOutlineHome className="text-3xl text-[var(--primary)] transition-transform duration-500 group-hover:scale-110" />,
        title: "30+ Years Expertise",
        description:
            "Decades of experience in residential, commercial, and land investments with proven market knowledge.",
    },
    {
        icon: <HiOutlineShieldCheck className="text-3xl text-[var(--primary)] transition-transform duration-500 group-hover:scale-110" />,
        title: "Verified & Secure Deals",
        description:
            "All properties are legally verified ensuring safe, transparent, and risk-free transactions.",
    },
    {
        icon: <HiOutlineLightningBolt className="text-3xl text-[var(--primary)] transition-transform duration-500 group-hover:scale-110" />,
        title: "Premium Property Access",
        description:
            "Exclusive listings across Thane, Mumbai, Panvel, and Dubai with high-value investment options.",
    },
    {
        icon: <HiOutlineSupport className="text-3xl text-[var(--primary)] transition-transform duration-500 group-hover:scale-110" />,
        title: "End-to-End Support",
        description:
            "Complete assistance from property search to final documentation and ownership transfer.",
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(tagRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: tagRef.current, start: "top 85%", once: true },
                }
            );

            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.15,
                    scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
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
        <section ref={sectionRef} className="relative w-full py-24 px-6 lg:px-12">

            {/* BACKGROUND VIDEO */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/Home/14370408_3840_2160_24fps.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* HEADING */}
            <div className="relative z-10 mb-14 max-w-3xl text-white">
                <p ref={tagRef} style={{ opacity: 0 }} className="text-[var(--primary)] uppercase tracking-[5px] text-sm mb-4">
                    Why Choose Us
                </p>

                <h2 ref={headingRef} style={{ opacity: 0 }} className="text-4xl md:text-5xl font-bold leading-tight">
                    Built on Trust & Experience
                </h2>
            </div>

            {/* CARDS */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {features.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        style={{ opacity: 0 }}
                        className="group relative border border-white/10 bg-white/10 backdrop-blur-md p-6 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                    >

                        {/* subtle glow overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[var(--primary)]/10 to-transparent"></div>

                        {/* ICON */}
                        <div className="mb-5 relative z-10">
                            {item.icon}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                            {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-400 text-sm leading-relaxed flex-1 relative z-10">
                            {item.description}
                        </p>

                        {/* HOVER STRIP */}
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></div>

                    </div>
                ))}

            </div>

        </section>
    );
}
