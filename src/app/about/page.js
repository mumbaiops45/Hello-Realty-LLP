"use client";

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesGrid from '@/components/Services'
import PropertyExperts from '@/components/AgentExpert'
import Testimonials from '@/components/Testimonial'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'

gsap.registerPlugin(ScrollTrigger);

function About() {
    const headerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: -40 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );

            gsap.fromTo(imageRef.current,
                { opacity: 0, x: -70 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: imageRef.current, start: "top 85%", once: true },
                }
            );

            gsap.fromTo(contentRef.current,
                { opacity: 0, x: 70 },
                {
                    opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.15,
                    scrollTrigger: { trigger: contentRef.current, start: "top 85%", once: true },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div
                ref={headerRef}
                style={{ opacity: 0 }}
                className="w-full bg-[#0B1D3A] py-16 px-6 md:px-16 flex items-center justify-center"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    <span className="text-[var(--primary)]">About</span> Us
                </h1>
            </div>

            <div className="abuot w-full bg-white py-14 px-6 md:px-16">

                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] items-center gap-10">

                    {/* LEFT IMAGE */}
                    <div ref={imageRef} style={{ opacity: 0 }} className="w-full h-[350px] md:h-full overflow-hidden">
                        <img
                            src="/Home/About.jpg"
                            alt="About Us"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div ref={contentRef} style={{ opacity: 0 }} className="flex flex-col justify-center">

                        {/* HEADING */}
                        <h2 className=" font-bold mb-5 leading-snug pl-4 py-1 border-l-2">
                            <span className="text-black">Building </span>
                            <span className="text-[var(--primary)]">Trust</span>{" "}
                            in <span className="text-[var(--primary)]"> Real Estate</span>
                        </h2>

                        {/* TEXT */}
                        <p className="text-gray-600 leading-tight">
                            With over <strong className="text-black">30 years of experience</strong> in the real estate industry, we have built a strong reputation for delivering trusted property solutions and exceptional client service. Our expertise spans across <strong className="text-black">Residential Properties, Commercial Spaces, and Plotted Land Investments</strong>, helping buyers, sellers, investors, and businesses make informed real estate decisions.

                            <br /><br />

                            We proudly serve clients across <strong className="text-black">Thane, Mumbai, Panvel, and Dubai</strong>, offering deep market knowledge, personalized guidance, and access to premium real estate opportunities. Whether you are looking for your dream home, a strategic commercial investment, or land for future development, our team is committed to finding the right solution tailored to your needs.

                            <br /><br />

                            Beyond property transactions, we specialize in <strong className="text-black">Real Estate Documentation Services</strong>, including the creation, verification, and scrutiny of property documents. Our expertise ensures that every transaction is legally compliant, transparent, and secure, giving our clients complete peace of mind.

                            <br /><br />

                            At our core, we believe in building long-term relationships based on trust, integrity, and results. With three decades of industry experience and a client-first approach, we continue to help individuals and businesses achieve their real estate goals with confidence.
                        </p>

                    </div>

                </div>

            </div>
            <ServicesGrid
                sectionBg="bg-[#0B1D3A]"
                cardBg="bg-white/10 backdrop-blur-md border border-white/20"
                textColor="text-white"
                descColor="text-white/80"
                headingMode="dark"
            />
            <PropertyExperts />
            <Testimonials />
            <FAQSection />
            <CTASection />

        </>
    )
}

export default About
