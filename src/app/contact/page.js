"use client";

import React, { useState } from "react";

// Inline icons — no react-icons dependency
const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  propertyType: "",
  budget: "",
  location: "",
  message: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear the error for this field as the user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone — strip spaces/dashes/brackets, then check for 10–15 digits (with optional +)
    const cleanedPhone = form.phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
    }

    // Inquiry type
    if (!form.inquiryType) {
      newErrors.inquiryType = "Please select what you're looking for.";
    }

    // Message
    if (!form.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/welcomerealty.llp@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm(initialForm);
        setErrors({});
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  // shared classes
  const inputBase =
    "w-full px-5 py-4 bg-white/5 border rounded-xl outline-none text-white placeholder-gray-400 transition";
  const errCls = (field) =>
    errors[field] ? "border-red-400" : "border-white/20 focus:border-[var(--primary,#c8a24b)]";
  const ErrorText = ({ field }) =>
    errors[field] ? <p className="mt-1.5 text-sm text-red-400">{errors[field]}</p> : null;

  return (
    <>
      {/* HEADER */}
      <div className="relative w-full bg-[#0B1D3A] py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary,#c8a24b)]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--primary,#c8a24b)]/10 blur-3xl rounded-full" />
        <div className="relative flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            <span className="text-[var(--primary,#c8a24b)]">Contact</span> Us
          </h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#f8f8f8] to-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 bg-[var(--primary,#c8a24b)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary,#c8a24b)]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-[var(--primary,#c8a24b)] uppercase tracking-[5px] text-sm font-semibold px-4 py-2 bg-[var(--primary,#c8a24b)]/20 inline-block rounded-full">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black mt-5">
              Let&apos;s Discuss Your{" "}
              <span className="text-[var(--primary,#c8a24b)]">Dream Property</span>
            </h2>
            <p className="text-gray-500 mt-6 leading-8">
              We&apos;re here to help you find the perfect property, answer your
              questions, and guide you through every step of your real estate journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* LEFT FORM */}
            <div className="lg:col-span-3">
              <div className="bg-[#0B1D3A] rounded-3xl shadow-xl p-8 md:p-12 h-full">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white">Send Us a Message</h3>
                  <p className="text-gray-300 mt-3">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        className={`${inputBase} ${errCls("name")}`}
                      />
                      <ErrorText field="name" />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email *"
                        className={`${inputBase} ${errCls("email")}`}
                      />
                      <ErrorText field="email" />
                    </div>
                  </div>

                  {/* Phone + Inquiry type */}
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className={`${inputBase} ${errCls("phone")}`}
                      />
                      <ErrorText field="phone" />
                    </div>
                    <div>
                      <select
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        className={`${inputBase} ${errCls("inquiryType")} ${
                          form.inquiryType ? "text-white" : "text-gray-400"
                        }`}
                      >
                        <option value="" className="text-black">I&apos;m looking to... *</option>
                        <option value="Buy" className="text-black">Buy a property</option>
                        <option value="Sell" className="text-black">Sell a property</option>
                        <option value="Rent" className="text-black">Rent a property</option>
                        <option value="Invest" className="text-black">Invest</option>
                      </select>
                      <ErrorText field="inquiryType" />
                    </div>
                  </div>

                  {/* Property type + Budget (optional) */}
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <select
                      name="propertyType"
                      value={form.propertyType}
                      onChange={handleChange}
                      className={`${inputBase} border-white/20 focus:border-[var(--primary,#c8a24b)] ${
                        form.propertyType ? "text-white" : "text-gray-400"
                      }`}
                    >
                      <option value="" className="text-black">Property Type (optional)</option>
                      <option value="Apartment" className="text-black">Apartment / Flat</option>
                      <option value="Villa" className="text-black">Villa / House</option>
                      <option value="Plot" className="text-black">Plot / Land</option>
                      <option value="Commercial" className="text-black">Commercial</option>
                    </select>

                    <input
                      type="text"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="Budget (optional)"
                      className={`${inputBase} border-white/20 focus:border-[var(--primary,#c8a24b)]`}
                    />
                  </div>

                  {/* Preferred location (optional) */}
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Preferred Location (optional)"
                    className={`${inputBase} border-white/20 focus:border-[var(--primary,#c8a24b)] mt-6`}
                  />

                  {/* Message */}
                  <div className="mt-6">
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message... *"
                      className={`${inputBase} ${errCls("message")} resize-none`}
                    />
                    <ErrorText field="message" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 bg-[var(--primary,#c8a24b)] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p
                      className={`mt-4 text-sm font-medium ${
                        status.includes("success") ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* RIGHT CONTACT DETAILS */}
            <div className="lg:col-span-2">
              <div className="bg-[#0B1D3A] rounded-3xl shadow-xl p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[var(--primary,#c8a24b)] uppercase tracking-[4px] text-xs font-semibold">
                    Contact Information
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-3">Get In Touch</h3>
                  <p className="text-gray-300 mt-4 leading-7">
                    Whether you&apos;re looking to buy, sell, invest, or simply have a
                    question, our team is ready to assist you.
                  </p>
                </div>

                {/* Address */}
                <div className="mt-10 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary,#c8a24b)]/10 flex items-center justify-center text-[var(--primary,#c8a24b)] shrink-0">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Office Address</h4>
                    <p className="text-gray-300 leading-7">
                      Office No. 530, Lodha Signet A,
                      <br />
                      Kolshet Road,
                      <br />
                      Thane West, 400607
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="mt-10 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary,#c8a24b)]/10 flex items-center justify-center text-[var(--primary,#c8a24b)] shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Phone Number</h4>
                    <a href="tel:+917021625739" className="text-gray-300 hover:text-[var(--primary,#c8a24b)] transition">
                      +91 70216 25739
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="mt-10 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary,#c8a24b)]/10 flex items-center justify-center text-[var(--primary,#c8a24b)] shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">Email Address</h4>
                    <a href="mailto:welcomerealty.llp@gmail.com" className="text-gray-300 hover:text-[var(--primary,#c8a24b)] transition break-all">
                      welcomerealty.llp@gmail.com
                    </a>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 bg-[var(--primary,#c8a24b)]/15 rounded-2xl p-6">
                  <h4 className="font-bold text-lg text-white">Need Immediate Assistance?</h4>
                  <p className="text-gray-300 mt-2">
                    Call us directly and our team will help you with your requirements.
                  </p>
                  <a href="tel:+917021625739" className="inline-block mt-4 bg-[var(--primary,#c8a24b)] text-white px-6 py-3 rounded-full font-semibold">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;