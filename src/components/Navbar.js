"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

export default function Navbar() {

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHome
        ? scrolled || mobileMenu
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-5"
        : "bg-white shadow-md py-4"
        }`}
    >

      <div className="mx-auto px-0 lg:px-10">

        <div className="flex items-center justify-between px-6">

          {/* LOGO */}
          <Link
            href="/"
            className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${textDark || mobileMenu ? "text-black" : "text-white"
              }`}
          >
            Welcome{" "}
            <span className="text-[var(--primary)]">
              Realty LLP
            </span>
          </Link>

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
                        : "text-white hover:text-[var(--primary)]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* CTA BUTTON */}
            {/* <Link
              href="/contact"
              className="primary-btn px-4 py-2 rounded-md"
            >
              Book Visit
            </Link> */}

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`lg:hidden text-3xl transition-all duration-300 ${textDark ? "text-black" : "text-white"
              }`}
          >
            {mobileMenu ? (
              <HiOutlineX className={mobileMenu?"text-black":"text-white"} />
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
            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="text-center py-3 rounded-full text-white font-semibold transition-all duration-300 bg-[var(--primary)]"
            >
              Book Visit
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}