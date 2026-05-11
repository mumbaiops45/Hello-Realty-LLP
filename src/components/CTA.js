"use client";

export default function CTASection() {
  return (
    <section className="relative px-8 md:px-15 lg:px-30 py-24 overflow-hidden bg-gradient-to-b from-[#0B1D3A] to-gray-300 ">

      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[var(--primary)] opacity-20 blur-[130px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[var(--primary)] opacity-10 blur-[140px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

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

          <button className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition">
            Browse Properties
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-lg text-white font-medium hover:bg-white/10 transition">
            Contact Agent
          </button>

        </div>
      </div>
    </section>
  );
}