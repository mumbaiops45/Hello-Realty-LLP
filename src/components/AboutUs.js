"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-[400px] md:h-[400px] rounded-2xl overflow-hidden">

          <Image
            src="/Home/pexels-shox-29174529.jpg"
            alt="About Real Estate"
            fill
            className="object-cover"
          />

        </div>

        {/* CONTENT */}
        <div>

          {/* HEADING WITH ANIMATION */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Discover Your{" "}
            <span className="text-[var(--primary)]">
              Dream Property
            </span>{" "}
            With Trusted Experts
          </motion.h2>

          {/* PARAGRAPH */}
          <p className="mt-6 text-gray-600 leading-relaxed">

            We are a <strong>trusted real estate company</strong> helping people find
            their perfect homes, offices, and investment opportunities.

            <br /><br />

            Our mission is to deliver <strong>safe, transparent, and high-value properties</strong>
            across prime locations with complete legal and financial support.

            <br /><br />

            From <strong>luxury villas</strong>, <strong>modern apartments</strong> to
            <strong>commercial spaces</strong>, we guide you at every step of your real estate journey.

          </p>

        </div>

      </div>

    </section>
  );
}