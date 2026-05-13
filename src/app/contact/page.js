import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Contact = () => {
  return (
    <>
      {/* HEADER */}
      <div className="relative w-full bg-[#0B1D3A] py-20 px-6 md:px-16 overflow-hidden">

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--primary)]/10 blur-3xl rounded-full"></div>

        <div className="relative flex items-center justify-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tight">
            <span className="text-[var(--primary)]">
              Contact
            </span>{" "}
            Us
          </h1>

        </div>

      </div>

      {/* CONTACT SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f8f8] to-white py-24 px-6 md:px-16 overflow-hidden">

        {/* BG EFFECT */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* TOP TEXT */}
          <div className=" mb-16">

            <p className="text-[var(--primary)] uppercase tracking-[5px] text-sm font-semibold px-4 py-2 bg-[var(--primary)]/20 inline-block rounded-full">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-black mt-4">
              Let’s Discuss Your{" "}
              <span className="text-[var(--primary)]">
                Dream Property
              </span>
            </h2>

            <p className="text-gray-500 mt-6 mx-auto leading-8">
              We’re here to help you find the perfect property, answer your
              questions, and guide you through every step of your real estate
              journey.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ADDRESS */}
            <div className="group relative p-10 rounded-3xl bg-white border border-black/5 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              {/* GLOW */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-[var(--primary)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* ICON */}
              <div className="relative w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-3xl mb-8 group-hover:scale-110 transition-all duration-500">
                <HiOutlineLocationMarker />
              </div>

              {/* TITLE */}
              <h3 className="inline-block text-2xl font-bold text-black mb-5">
                Office Address

                <span className="block w-14 h-[3px] bg-[var(--primary)] mt-3 group-hover:w-full transition-all duration-500"></span>
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 leading-8">
                12th Floor, Business Hub,
                <br />
                Bandra Kurla Complex,
                <br />
                Mumbai, Maharashtra, India
              </p>

            </div>

            {/* PHONE */}
            <div className="group relative p-10 rounded-3xl bg-[#0B1D3A] text-white overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              {/* GLOW */}
              <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[var(--primary)]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* ICON */}
              <div className="relative w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[var(--primary)] text-3xl mb-8 group-hover:scale-110 transition-all duration-500">
                <HiOutlinePhone />
              </div>

              {/* TITLE */}
              <h3 className="inline-block text-2xl font-bold mb-5">
                Phone Number

                <span className="block w-14 h-[3px] bg-[var(--primary)] mt-3 group-hover:w-full transition-all duration-500"></span>
              </h3>

              {/* TEXT */}
              <p className="text-white/80 leading-8">
                +91 98765 43210
                <br />
                +91 91234 56789
              </p>

            </div>

            {/* EMAIL */}
            <div className="group relative p-10 rounded-3xl bg-white border border-black/5 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              {/* GLOW */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-[var(--primary)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* ICON */}
              <div className="relative w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] text-3xl mb-8 group-hover:scale-110 transition-all duration-500">
                <HiOutlineMail />
              </div>

              {/* TITLE */}
              <h3 className="inline-block text-2xl font-bold text-black mb-5">
                Email Address

                <span className="block w-14 h-[3px] bg-[var(--primary)] mt-3 group-hover:w-full transition-all duration-500"></span>
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 leading-8">
                contact@realtyllp.com
                <br />
                support@realtyllp.com
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;