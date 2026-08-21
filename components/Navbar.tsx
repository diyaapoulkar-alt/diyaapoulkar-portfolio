"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Intersection detection for active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FLOATING PILL NAVBAR */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[92vw]">
        <nav className="flex items-center justify-between gap-3 px-3 py-1.5 rounded-full bg-stone-50/90 backdrop-blur-xl border border-amber-900/10 shadow-xl shadow-amber-950/5 transition-all duration-300">
          
          {/* DESKTOP NAV ITEMS WITH ANIMATED ACTIVE PILL */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;

              return (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(id)}
                    className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 block ${
                      isActive
                        ? "text-amber-950 font-bold"
                        : "text-amber-900/70 hover:text-amber-950"
                    }`}
                  >
                    {item.name}
                  </a>

                  {/* ACTIVE BACKGROUND PILL HIGHLIGHT */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-amber-100/70 rounded-full border border-amber-900/15 z-0"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE LOGO & TOGGLE BUTTON */}
          <div className="flex md:hidden items-center justify-between w-full px-3 py-1 gap-6">
            <span className="font-extrabold text-amber-950 tracking-wider text-sm uppercase">
              Diya Poulkar
            </span>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-full text-amber-950 hover:bg-amber-100/50 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="md:hidden mt-2 p-3 rounded-2xl bg-stone-50/95 backdrop-blur-2xl border border-amber-900/15 shadow-2xl flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(id);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-100/80 text-amber-950 font-bold"
                      : "text-amber-900/80 hover:bg-amber-100/40"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </header>
    </>
  );
}