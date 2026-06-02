"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import QuoteForm from "@/components/QuoteForm";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

export default function Navbar() {

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const textDark = !isHome || scrolled;

  return (
    <>
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
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHome
          ? scrolled || mobileMenu
            ? "bg-white shadow-md py-0"
            : "bg-white py-0"
          : "bg-white shadow-md py-0"
          }`}
      >

        <div className="mx-auto px-0 lg:px-10">

          <div className="flex items-center justify-between px-6">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Welcome Realty LLP"
                width={180}
                height={60}
                priority
                className="w-auto h-10 lg:h-24 object-contain"
              />
            </Link>

            {/* <Link href="/" className="flex items-center">

            <Image
              src={
                textDark || mobileMenu
                  ? "/logo-dark.png"
                  : "/logo-light.png"
              }
              alt="Welcome Realty LLP"
              width={180}
              height={60}
              priority
              className="w-auto h-10 lg:h-20 object-contain transition-all duration-300"
            />

          </Link> */}

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`font-medium transition-all duration-300
          ${isActive
                        ? "text-[var(--primary)]"
                        : textDark
                          ? "text-black hover:text-[var(--primary)]"
                          : "text-black hover:text-[var(--primary)]"
                      }
        `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <button
                onClick={() => setShowQuoteModal(true)}
                className="bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90 rounded-md cursor-pointer"
              >
                Request Quote
              </button>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`lg:hidden text-3xl transition-all duration-300 ${textDark ? "text-black" : "text-white"
                }`}
            >
              {mobileMenu ? (
                <HiOutlineX className={mobileMenu ? "text-black" : "text-white"} />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </button>

          </div>

          {/* MOBILE MENU */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenu
              ? "max-h-[600px] opacity-100 mt-5"
              : "max-h-0 opacity-0"
              }`}
          >

            <div className="bg-white rounded-b-xl shadow-2xl p-6 flex flex-col gap-5">

              {navLinks.map((link, index) => {

                const isActive = pathname === link.href;

                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    className={`font-medium transition-all duration-300
                    ${isActive
                        ? "text-[var(--primary)]"
                        : "text-black hover:text-[var(--primary)]"
                      }
                  `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* MOBILE CTA */}
              <button
                onClick={() => setShowQuoteModal(true)}
                className="bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90 rounded-md cursor-pointer"
              >
                Request Quote
              </button>

            </div>

          </div>

        </div>

      </header>
    </>

  );
}