"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experts = [
    {
        name: "Darshil Shah",
        role: "Partner",
        image: "/Home/avtar.png",
        description:
            "With 5+ years of experience in the real estate industry - specializes in residential and commercial property consulting, investment advisory, client relationship management, and digital marketing strategies that help clients identify the right opportunities in a dynamic market.",
    },
    {
        name: "Bhanu Nisar",
        role: "Partner",
        image: "/Home/avtar.png",
        description:
            "With 30+ years of experience in the real estate industry - brings deep market expertise, strong industry relationships, and extensive knowledge of property transactions, documentations and investment opportunities. Her decades of experience have helped countless clients make informed and profitable real estate decisions.",
    },
];

export default function PropertyExperts() {
    const [active, setActive] = useState(0);
    const expert = experts[active];

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const listRef = useRef(null);
    const detailRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headingRef.current,
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
                }
            );

            gsap.fromTo(listRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.15,
                    scrollTrigger: { trigger: listRef.current, start: "top 85%", once: true },
                }
            );

            gsap.fromTo(detailRef.current,
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.25,
                    scrollTrigger: { trigger: detailRef.current, start: "top 85%", once: true },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white py-20 px-6 lg:px-12">

            {/* Heading */}
            <div ref={headingRef} style={{ opacity: 0 }} className="mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-black pl-4 py-1 border-l-2">
                    Meet Our{" "}
                    <span className="text-[var(--primary)]">
                        Partners
                    </span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Trusted professionals guiding your real estate journey
                </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[30vw_1fr] gap-10 mx-auto">

                {/* LEFT - Expert List */}
                <div ref={listRef} style={{ opacity: 0 }} className="space-y-4">

                    {experts.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`flex flex-1 items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border

              ${active === index
                                    ? "border-[var(--primary)] bg-[var(--primary)]/10"
                                    : "border-gray-200 hover:bg-gray-50"
                                }
              `}
                        >
                            <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src={item.image || "/Home/avtar.png"}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="font-semibold text-black">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* RIGHT - Details */}
                <div ref={detailRef} style={{ opacity: 0 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">

                    <div className="flex items-center gap-4 mb-6">

                        <div className="relative w-100 h-60 rounded-md overflow-hidden">
                            <Image
                                src={expert.image || "/Home/avtar.png"}
                                alt={expert.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-black">
                                {expert.name}
                            </h3>
                            <p className="text-[var(--primary)] font-medium">
                                {expert.role}
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                {expert.description}
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
