"use client";

import { useState } from "react";
import Image from "next/image";

const experts = [
    {
        name: "Rahul Mehta",
        role: "Senior Property Consultant",
        image: "/Home/1.jpg",
        description:
            "Rahul has 10+ years of experience in luxury real estate and has helped 500+ families find their dream homes in Mumbai.",
    },
    {
        name: "Priya Sharma",
        role: "Real Estate Advisor",
        image: "/Home/3.jpg",
        description:
            "Priya specializes in residential investments and guides clients for high ROI properties across Pune and Mumbai.",
    },
    {
        name: "Amit Deshmukh",
        role: "Commercial Property Expert",
        image: "/Home/2.jpg",
        description:
            "Amit focuses on commercial spaces, office leasing, and investment-grade properties with strong market insights.",
    },
];

export default function PropertyExperts() {
    const [active, setActive] = useState(0);
    const expert = experts[active];

    return (
        <section className="w-full bg-white py-20 px-6 lg:px-12">

            {/* Heading */}
            <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-black pl-4 py-1 border-l-2">
                    Meet Our{" "}
                    <span className="text-[var(--primary)]">
                        Property Experts
                    </span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Trusted professionals guiding your real estate journey
                </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

                {/* LEFT - Expert List */}
                <div className="space-y-4">

                    {experts.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border
              
              ${active === index
                                    ? "border-[var(--primary)] bg-[var(--primary)]/10"
                                    : "border-gray-200 hover:bg-gray-50"
                                }
              `}
                        >
                            <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src={item.image}
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
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">

                    <div className="flex items-center gap-4 mb-6">

                        <div className="relative w-100 h-60 rounded-md overflow-hidden">
                            <Image
                                src={expert.image}
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