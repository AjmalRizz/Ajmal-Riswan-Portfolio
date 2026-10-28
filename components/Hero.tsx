"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { CvModal } from "./CvModal";

const ROLES = [
  "Software Developer",
  "Mobile Application Developer",
  "Web Apps Developer",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Typewriter state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // CV Modal state
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Live Sri Lanka Local Time
  const [localTime, setLocalTime] = useState<string>("3:00 PM");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Colombo",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setLocalTime(formatter.format(new Date()));
      } catch {
        // Fallback
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && currentText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 350);
    } else {
      const speed = isDeleting ? 38 : 75;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Global listener for navbar "View CV" button
  useEffect(() => {
    const handleGlobalCv = () => setIsCvOpen(true);
    window.addEventListener("open-cv-modal", handleGlobalCv);
    return () => window.removeEventListener("open-cv-modal", handleGlobalCv);
  }, []);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative z-10 w-full min-h-[90vh] sm:min-h-screen bg-transparent overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 flex flex-col justify-between"
        aria-label="Hero Introduction"
      >
        {/* 2-Column Showcase */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto pt-6 lg:pt-10">
          {/* Left Column: Hello, AJMAL RISWAN, Typewriter, Tagline Bio, CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-1 pt-4 lg:pt-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-script text-2xl sm:text-4xl md:text-5xl text-[#D81E28] font-normal">
                Hello, I&apos;m
              </span>
            </div>

            <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide leading-[0.88] uppercase drop-shadow-md">
              AJMAL
              <br />
              RISWAN
            </h1>

            <div className="mt-4 sm:mt-6">
              <span className="text-[11px] sm:text-sm font-mono tracking-widest uppercase text-[#D81E28] font-bold block mb-1">
                SOFTWARE ENGINEERING GRADUATE
              </span>

              {/* Clean Inline Typewriter with Emerald Green Text */}
              <div
                className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 sm:gap-2.5 text-lg sm:text-2xl md:text-3xl font-tech min-h-[36px] sm:min-h-[46px]"
                aria-live="polite"
              >
                <span className="text-zinc-400 font-normal text-sm sm:text-base md:text-lg select-none">
                  I am a
                </span>
                <div className="inline-flex items-center">
                  <span className="font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]">
                    {currentText}
                  </span>
                  <span
                    className="inline-block w-[2.5px] sm:w-[3.5px] h-5 sm:h-7 bg-emerald-400 shadow-[0_0_10px_#34d399,0_0_18px_rgba(52,211,153,0.8)] ml-1.5 rounded-full animate-[blinkCursor_0.8s_infinite] flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Tech Stack Summary from CV */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl font-tech">
              Software Developer specializing in backend architecture, RESTful API engineering, and robust web &amp; mobile solutions. Core stack spans <span className="text-white font-semibold">C#</span>, <span className="text-white font-semibold">.NET</span>, <span className="text-white font-semibold">Node.js</span>, <span className="text-white font-semibold">Express</span>, and <span className="text-white font-semibold">Java (Android)</span>, backed by strong relational database design with <span className="text-white font-semibold">SQL Server</span>, <span className="text-white font-semibold">MySQL</span>, and <span className="text-white font-semibold">Entity Framework Core</span>.
            </p>

            {/* Action Buttons: View My CV + View Projects + Contact */}
            <div className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsCvOpen(true)}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#D81E28] hover:bg-[#E62A35] text-white text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold transition-all duration-200 shadow-[0_0_25px_rgba(216,30,40,0.5)] cursor-pointer"
              >
                <span className="text-sm">📄</span>
                <span>View My CV</span>
              </button>

              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-[#D81E28] text-zinc-200 hover:text-white text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-200"
              >
                <span>View Projects</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-200"
              >
                <span>Hire Me</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Expanded Professional Rounded Box Frame with Ajmal's Portrait */}
          <div
            ref={imageRef}
            className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative order-2 lg:order-2 mt-6 lg:mt-0"
          >
            {/* Status & Live Location Badge (Positioned above Profile Picture) */}
            <div className="mb-3.5 sm:mb-4 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[470px] flex flex-col items-center lg:items-start px-2 space-y-1.5 font-tech">
              {/* Line 1: Open to new roles */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-sm sm:text-base font-semibold text-emerald-400 tracking-wide">
                  Open to new roles
                </span>
              </div>

              {/* Line 2: Location and Local Time */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
                <svg
                  className="w-3.5 h-3.5 text-zinc-400 fill-none stroke-current flex-shrink-0"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Kandy, Sri Lanka · {localTime} local time
                </span>
              </div>
            </div>

            {/* Minimal Subtle Rim Glow (Preserves Background Video Visibility) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] aspect-[4/5] rounded-3xl pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(216, 30, 40, 0.12) 0%, transparent 65%)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />

            {/* Main Professional Rounded Box Frame with Minimal Glass Accent */}
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[470px] aspect-[4/5] rounded-3xl p-2 sm:p-2.5 border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(216,30,40,0.12)] hover:border-[#D81E28]/40 transition-all duration-500 group">
              {/* Inner Rounded Box Container */}
              <div className="w-full h-full rounded-[20px] sm:rounded-[22px] overflow-hidden relative border border-white/10 bg-gradient-to-b from-[#141418]/70 via-[#0E0E12]/80 to-[#09090B]/90 flex items-end justify-center">
                {/* Minimal Core Glow behind head */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 35%, rgba(216, 30, 40, 0.12) 0%, transparent 60%)",
                  }}
                />

                {/* Expanded Portrait Photo inside Rounded Box Frame */}
                <div className="relative w-full h-full select-none">
                  <Image
                    src="/images/mohammad_ajmal_isolated.png"
                    alt="Ajmal Riswan Portrait"
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 480px"
                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09090B] via-[#09090B]/35 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fully Scrollable CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </>
  );
}
