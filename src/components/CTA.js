"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import QuoteForm from "@/components/QuoteForm";

export default function CTASection() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Lock background scroll while the modal is open
  useEffect(() => {
    if (showQuoteModal) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [showQuoteModal]);

  // Close on Escape
  useEffect(() => {
    if (!showQuoteModal) return;
    const onKey = (e) => e.key === "Escape" && setShowQuoteModal(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showQuoteModal]);

  return (
    <>
      <section className="relative px-8 md:px-15 lg:px-30 py-24 overflow-hidden bg-gradient-to-b from-[#0B1D3A] to-gray-300">
        {/* Background glow effects */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[var(--primary)] opacity-20 blur-[130px] rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[var(--primary)] opacity-10 blur-[140px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto text-center">
          {/* Badge */}
          <span className="text-[13px] px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider inline-block mb-5">
            Get Started
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Find Your Dream{" "}
            <span className="text-[var(--primary)]">Property</span> Today
          </h2>

          {/* Subtext */}
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Buy, sell, or rent properties with confidence. We simplify real estate with verified listings and trusted agents.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition cursor-pointer">
                Contact Us
              </button>
            </Link>

            <button
              onClick={() => setShowQuoteModal(true)}
              className="px-6 py-3 rounded-xl border border-white/40 text-white font-medium hover:bg-white/10 transition cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowQuoteModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-[#0B1D3A] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-10 shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setShowQuoteModal(false)}
              aria-label="Close"
              className="absolute top-5 right-5 text-3xl text-gray-300 hover:text-white"
            >
              <HiOutlineX />
            </button>

            <h2 className="text-3xl font-bold mb-2 text-white pr-10">
              Request a Quote
            </h2>

            <p className="text-gray-300 mb-8">
              Fill out the form below and our team will contact you shortly.
            </p>

            <QuoteForm onSuccess={() => setShowQuoteModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}