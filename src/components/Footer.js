"use client";

// src/components/Footer.jsx

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function Footer() {

  const pathname = usePathname();

 const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

  const propertyLinks = [
    { name: "Apartments", href: "/properties" },
    { name: "Villas", href: "/properties" },
    { name: "Commercial", href: "/properties" },
    { name: "Rentals", href: "/properties" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com",
    },
    // {
    //   icon: <FaLinkedinIn />,
    //   href: "https://linkedin.com",
    // },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com",
    },
  ];

  return (
    <footer className="w-full">

      {/* TOP FOOTER */}
      <div className="bg-[#0B1D3A] text-white px-6 md:px-10 lg:px-16 pt-16 pb-12">

        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>

            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Welcome {" "}
              <span className="text-[var(--primary)]">
                Realty LLP
              </span>
            </Link>

            <p className="text-gray-400 mt-5 leading-relaxed text-sm">
              We help clients discover premium apartments,
              luxury villas, commercial spaces, and investment
              properties with complete transparency and expert guidance.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-3">

              {quickLinks.map((link, index) => {

                const isActive = pathname === link.href;

                return (
                  <li key={index}>

                    <Link
                      href={link.href}
                      className={`transition-all duration-300

                      ${isActive
                          ? "text-[var(--primary)]"
                          : "text-gray-400 hover:text-[var(--primary)]"
                        }

                      `}
                    >
                      {link.name}
                    </Link>

                  </li>
                );
              })}

            </ul>

          </div>

          {/* PROPERTIES */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Properties
            </h3>

            <ul className="flex flex-col gap-3">

              {propertyLinks.map((link, index) => {

                const isActive = pathname === link.href;

                return (
                  <li key={index}>

                    <Link
                      href={link.href}
                      className={`transition-all duration-300

                      ${isActive
                          ? "text-[var(--primary)]"
                          : "text-gray-400 hover:text-[var(--primary)]"
                        }

                      `}
                    >
                      {link.name}
                    </Link>

                  </li>
                );
              })}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <HiOutlineLocationMarker className="shrink-0 text-[var(--primary)] text-xl mt-1" />

                <p>
                  221B Real Estate Avenue,
                  Mumbai, Maharashtra,
                  India - 400001
                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">

                <HiOutlinePhone className="text-[var(--primary)] text-xl" />

                <a
                  href="tel:+919876543210"
                  className="hover:text-[var(--primary)] transition-all duration-300"
                >
                  +91 98765 43210
                </a>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <HiOutlineMail className="text-[var(--primary)] text-xl" />

                <a
                  href="mailto:info@dreamestate.com"
                  className="hover:text-[var(--primary)] transition-all duration-300"
                >
                  info@dreamestate.com
                </a>

              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-6 flex-wrap">

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-full
                    border border-gray-600
                    flex items-center justify-center
                    text-white
                    hover:bg-[var(--primary)]
                    hover:border-[var(--primary)]
                    transition-all duration-300
                  "
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
     <div className="flex flex-col md:flex-row md:justify-between  gap-2 bg-[var(--primary)] text-white py-4 text-sm px-4">
        <div className="md:pl-10 pl-0 text-center">
          © {new Date().getFullYear()} Welcome Realty LLP.
          All Rights Reserved.
        </div>
        <div className="md:pr-10 pr-0 text-center">
          <p>
            Developed by{" "}
            <a
              href="https://www.nakshatranamahacreations.com/website-developers-in-mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all duration-300"
            >
              Nakshatra Namaha Creations
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}

