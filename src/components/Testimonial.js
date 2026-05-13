"use client";

import { useState } from "react";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const testimonials = [
  {
    name: "Mr. Amit Deshmukh",
    role: "Home Buyer, Mumbai",
    date: "12 Jan, 2025",
    description:
      `Buying my first home felt overwhelming, but this platform made it simple and smooth. The team guided me at every step and ensured complete transparency throughout the process.

I found my dream apartment in Powai without any hassle. Highly professional service and trusted listings made all the difference.`,
    rating: 5,
  },
  {
    name: "Mrs. Neha Sharma",
    role: "Property Investor, Pune",
    date: "05 Aug, 2024",
    description:
      `I have invested in multiple properties through this service. Every listing is verified and genuine.

The support team is extremely responsive and helped me choose high-return properties with confidence.`,
    rating: 5,
  },
];

const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "var(--primary)" : "none"}
    stroke="var(--primary)"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="var(--primary)"
    className="flex-shrink-0 opacity-20"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative bg-[#0B1D3A] overflow-hidden py-20 px-8 md:px-15 lg:px-16">

      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-[var(--primary)]/5 pointer-events-none" />

      <div className="relative z-10 mx-auto">

        <div className="mb-6">
          <h2 className="relative text-white inline-block pl-4 py-1 border-l-2 mb-4  ">
            What Our <span className="text-[var(--primary)]">Clients Say</span>
          </h2>
        </div>

        <div className="bg-white/10 rounded-3xl shadow-[0_8px_48px_rgba(0,0,0,0.08)] border border-[var(--primary)]/20 overflow-hidden">

          <div className="flex flex-col md:flex-row">

            <div className="flex-1 flex flex-col justify-between p-8 md:p-12">

              <div>
                <QuoteIcon />

                <div>
                  {t.description
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, i) => (
                      <p key={i} className="m-2 text-justify leading-relaxed text-gray-300">
                        {line}
                      </p>
                    ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                <div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} filled={i < t.rating} />
                    ))}
                  </div>

                  <p className="font-semibold text-gray-300 text-base">
                    {t.name}
                  </p>

                  <p className="text-[var(--primary)] text-xs tracking-widest uppercase mt-1">
                    {t.role}
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <div className="flex gap-1.5 mr-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full bg-[var(--primary)] transition-all duration-300 ${
                          active === i ? "w-6 h-2" : "w-2 h-2 opacity-30"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))
                    }
                    className="w-10 h-10 rounded-full border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]"
                  >
                     <HiArrowLeft className="cursor-pointer" />
                  </button>

                  <button
                    onClick={() =>
                      setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))
                    }
                    className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white"
                  >
                     <HiArrowRight className="cursor-pointer" />
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}