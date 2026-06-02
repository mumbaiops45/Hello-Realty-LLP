"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export default function QuoteForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanedPhone = form.phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
    }

    if (!form.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us about your requirements.";
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

      if (response.ok) {
        setStatus("Quote request sent successfully!");
        setForm(initialForm);
        setErrors({});
        if (onSuccess) setTimeout(onSuccess, 1500); // optional: auto-close modal
      } else {
        setStatus("Failed to send request.");
      }
    } catch {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

  const inputBase =
    "w-full px-5 py-4 bg-white/5 border rounded-xl outline-none text-white placeholder-gray-400 transition";
  const errCls = (field) =>
    errors[field] ? "border-red-400" : "border-white/20 focus:border-[var(--primary,#c8a24b)]";
  const ErrorText = ({ field }) =>
    errors[field] ? <p className="mt-1.5 text-sm text-red-400">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid md:grid-cols-2 gap-5">
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

      <div className="grid md:grid-cols-2 gap-5 mt-5">
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
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={`${inputBase} ${errCls("projectType")} ${
              form.projectType ? "text-white" : "text-gray-400"
            }`}
          >
            <option value="" className="text-black">Project Type *</option>
            <option value="Buy" className="text-black">Buy a property</option>
            <option value="Sell" className="text-black">Sell a property</option>
            <option value="Rent" className="text-black">Rent a property</option>
            <option value="Invest" className="text-black">Investment</option>
          </select>
          <ErrorText field="projectType" />
        </div>
      </div>

      <div className="mt-5">
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements... *"
          className={`${inputBase} ${errCls("message")} resize-none`}
        />
        <ErrorText field="message" />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full bg-[var(--primary,#c8a24b)] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Submit Request"}
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
  );
}