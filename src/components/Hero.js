// src/components/Hero.jsx
"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const tagRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(tagRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.7 }
    )
    .fromTo(heading1Ref.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.9 },
      "-=0.2"
    )
    .fromTo(heading2Ref.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.9 },
      "-=0.6"
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      >
        <source
          src="/Hero/13370341_3840_2160_60fps (1) (1).mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071327]/90 via-[#071327]/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-start pt-14">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <div className="max-w-3xl">

            {/* TOP TAG */}
            <div
              ref={tagRef}
              style={{ opacity: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-[var(--primary)]/10 backdrop-blur-md mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
              <span className="text-white/90 text-sm tracking-[3px] uppercase font-medium ">
                Luxury Real Estate
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-white font-black leading-[0.95] text-5xl md:text-6xl lg:text-7xl xl:text-8xl">

              <span ref={heading1Ref} style={{ opacity: 0 }} className="block">
                Find Your
              </span>

              <span ref={heading2Ref} style={{ opacity: 0 }} className="block text-[var(--primary)] mt-2">
                Dream Property
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              ref={descRef}
              style={{ opacity: 0 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl"
            >
              Your Trusted Real Estate Partner for Over 30 Years – Residential, Commercial, Land & Documentation Solutions Across Thane, Mumbai, Panvel & Dubai.
            </p>

            {/* BUTTONS */}
            <div ref={buttonsRef} style={{ opacity: 0 }} className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                Contact Us
              </Link>

              <Link
                href="/properties"
                className="px-7 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Properties
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}
