// src/components/Hero.jsx

import Link from "next/link";

export default function Hero() {
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
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Hero/13370341_3840_2160_60fps (1) (1).mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0B1D3A]/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">

        <div className=" mx-auto px-6 lg:px-10 w-full">

          <div className="max-w-3xl">

            {/* TOP TEXT */}
            <span className="inline-block text-[var(--primary)] font-semibold tracking-[4px] uppercase mb-5">
              Luxury Real Estate
            </span>

            {/* HEADING */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Find Your Dream Property With Confidence
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
              Discover premium apartments, luxury villas,
              commercial spaces, and investment properties
              in the best locations at the best prices.
            </p>

            {/* CTA BUTTON */}
            <div className="mt-10">

              <Link
                href="#contact"
                className="primary-btn px-4 py-2 rounded-md"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}