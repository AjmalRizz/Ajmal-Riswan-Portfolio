"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onOpenCv?: () => void;
}

export function Header({ onOpenCv }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu automatically when screen resizes to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleCvClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenCv) {
      onOpenCv();
    } else {
      window.dispatchEvent(new CustomEvent("open-cv-modal"));
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Skills", href: "/#skills", number: "01" },
    { label: "Projects", href: "/#projects", number: "02" },
    { label: "Education", href: "/#education", number: "03" },
    { label: "Contact", href: "/#contact", number: "04" },
  ];

  return (
    <>
      {/* Dark Ambient Backdrop for Mobile/Tablet Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/75 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <header className="fixed top-2.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[94%] max-w-6xl transition-all duration-300">
        {/* Main Floating Pill Navbar */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-full border border-white/20 bg-[#09090E]/80 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.25),0_0_30px_rgba(216,30,40,0.12)] px-3.5 sm:px-7 py-2 sm:py-3 flex items-center justify-between">
          {/* Top Edge Specular Glass Reflection */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Left: Red PORTFOLIO Badge + Identity */}
          <div className="flex items-center gap-3 sm:gap-6 relative z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-2.5 sm:gap-3 focus-visible:ring-2 focus-visible:ring-[#D81E28] rounded-full"
            >
              <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-[#D81E28] font-bold transition-colors group-hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] leading-none">
                PORTFOLIO
              </span>
              <span className="h-5 w-[1px] bg-white/20 hidden md:block" />
              <div className="hidden md:flex flex-col">
                <span className="font-tech text-xs sm:text-sm font-bold tracking-[0.16em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] group-hover:text-[#D81E28] transition-colors duration-200">
                  AJMAL RISWAN
                </span>
                <span className="text-[9px] font-mono-tech tracking-[0.2em] uppercase text-zinc-300 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                  Software Developer
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation (Laptops & PC: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-6 relative z-10">
            <nav aria-label="Main Desktop Navigation" className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-tech font-bold uppercase tracking-[0.2em] text-zinc-100 hover:text-white hover:text-shadow-[0_0_12px_rgba(255,255,255,0.7)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCvClick}
                className="px-3.5 py-1.5 rounded-full border border-white/25 hover:border-[#D81E28] bg-white/10 hover:bg-[#D81E28]/25 backdrop-blur-md text-white text-[11px] font-mono-tech tracking-wider uppercase font-bold transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(216,30,40,0.4)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
              >
                View CV
              </button>

              <Link
                href="/#contact"
                className="px-4 py-1.5 rounded-full border border-[#D81E28] hover:border-white bg-[#D81E28] hover:bg-[#E62A35] text-white text-[11px] font-mono-tech tracking-widest uppercase font-extrabold transition-all duration-200 shadow-[0_0_20px_rgba(216,30,40,0.6)] hover:shadow-[0_0_30px_rgba(216,30,40,0.9)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Mobile & Tablet Controls (< 1024px: Phones, iPad, Tablets) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3 relative z-10">
            {/* Quick Action Button */}
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full border border-[#D81E28] bg-[#D81E28] hover:bg-[#E62A35] text-white text-[10px] sm:text-[11px] font-mono-tech tracking-wider uppercase font-bold transition-all shadow-[0_0_15px_rgba(216,30,40,0.5)]"
            >
              Hire Me
            </Link>

            {/* Hamburger Button with Animated Toggle Bars */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-white/20 hover:border-white/40 bg-white/[0.06] hover:bg-white/[0.12] active:bg-[#D81E28]/25 flex flex-col items-center justify-center gap-1 sm:gap-1.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D81E28]"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-4 sm:w-5 h-0.5 rounded-full bg-white transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "translate-y-[5px] sm:translate-y-[6px] rotate-45 bg-[#D81E28]" : ""
                }`}
              />
              <span
                className={`w-4 sm:w-5 h-0.5 rounded-full bg-white transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 -translate-x-2" : "opacity-100"
                }`}
              />
              <span
                className={`w-4 sm:w-5 h-0.5 rounded-full bg-white transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-translate-y-[5px] sm:-translate-y-[6px] -rotate-45 bg-[#D81E28]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Full Adaptive Hamburger Drawer Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto max-h-[85vh] mt-2.5 sm:mt-3"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none max-h-0 overflow-hidden"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#0A0A0F]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.2),0_0_35px_rgba(216,30,40,0.2)] p-5 sm:p-7 flex flex-col gap-5">
            {/* Specular Edge Glow */}
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D81E28]/60 to-transparent pointer-events-none" />

            {/* Menu Header / Identity */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D81E28] animate-pulse" />
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-zinc-300 font-semibold">
                  MENU NAVIGATION
                </span>
              </div>
              <span className="text-[10px] font-mono-tech uppercase text-[#D81E28] font-bold px-2 py-0.5 rounded-full bg-[#D81E28]/15 border border-[#D81E28]/30">
                ACTIVE
              </span>
            </div>

            {/* Navigation Links with Numbered Badges & Smooth Touch Targets */}
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-[#D81E28]/20 border border-white/5 hover:border-white/15 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-xs text-[#D81E28] font-bold">
                      {link.number}
                    </span>
                    <span className="font-tech text-base sm:text-lg font-bold text-white group-hover:text-[#D81E28] transition-colors tracking-wide uppercase">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-white transition-colors text-sm font-mono">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Actions: View CV & Contact Buttons */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleCvClick}
                className="w-full py-3 px-4 rounded-xl border border-white/20 hover:border-[#D81E28] bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-mono-tech tracking-wider uppercase font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>View Full CV</span>
                <span className="text-[#D81E28]">📄</span>
              </button>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="w-full py-3 px-4 rounded-xl border border-[#D81E28] bg-[#D81E28] hover:bg-[#E62A35] text-white text-xs font-mono-tech tracking-widest uppercase font-extrabold transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(216,30,40,0.6)]"
              >
                <span>Hire Me Now</span>
                <span>→</span>
              </Link>
            </div>

            {/* Quick Status & Location Footer in Menu */}
            <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-tech text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">Open to new roles</span>
              </div>
              <span className="text-zinc-500 text-[11px] font-mono">
                📍 Kandy, Sri Lanka · UTC+5:30
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
