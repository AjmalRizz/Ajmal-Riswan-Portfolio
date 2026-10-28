"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

interface EducationRecord {
  degree: string;
  institution: string;
  period: string;
}

const educationData: EducationRecord[] = [
  {
    degree: "HD in Computing & Software Engineering - Graduate",
    institution: "ICBT Kandy Campus (Affiliated with Cardiff Metropolitan University, UK)",
    period: "May 2025 - Oct 2026",
  },
  {
    degree: "G.C.E. Advanced Level - B2C",
    institution: "B/Al Murshid Maha Vidyalaya",
    period: "2023 (2024)",
  },
  {
    degree: "G.C.E. Ordinary Level - 5A 4B",
    institution: "B/Al Murshid Maha Vidyalaya",
    period: "Grade 6 - 11",
  },
];

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      itemsRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1, y: 0, filter: "none" });
      });
      return;
    }

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((itemEl, idx) => {
        if (!itemEl) return;

        gsap.fromTo(
          itemEl,
          {
            opacity: 0,
            y: 28,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            delay: idx * 0.16,
            scrollTrigger: {
              trigger: itemEl,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative z-10 w-full py-20 lg:py-28 bg-transparent"
      aria-label="Education Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Main Glassmorphism Education Panel Matching Reference */}
        <div className="relative rounded-3xl border border-white/15 bg-[#101014]/80 backdrop-blur-2xl p-5 sm:p-8 md:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.65)] overflow-hidden">
          {/* Subtle Ambient Red Glow Orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D81E28]/12 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D81E28]/10 blur-3xl pointer-events-none" />

          {/* Section Indicator matching Reference */}
          <div className="relative z-10 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D81E28] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#D81E28] font-bold">
              04 · EDUCATION
            </span>
          </div>

          {/* Dashed Horizontal Separator Line */}
          <div className="relative z-10 w-full border-t border-dashed border-white/15 my-6 sm:my-8" />

          {/* Education Records List with Hide to Visible Reveal Animation */}
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 pb-6 sm:pb-8 border-b border-white/[0.08] last:border-b-0 last:pb-0 group transition-all duration-200 hover:bg-white/[0.03] p-3 sm:p-4 -m-3 sm:-m-4 rounded-2xl will-change-transform"
              >
                {/* Left: Qualification & Institution */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-tech text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#D81E28] transition-colors duration-200 tracking-tight leading-snug">
                    {item.degree}
                  </h3>
                  <p className="font-tech text-sm sm:text-base text-zinc-200 font-medium mt-1.5 leading-relaxed tracking-wide">
                    {item.institution}
                  </p>
                </div>

                {/* Right: Date / Period */}
                <div className="flex-shrink-0 pt-1 sm:pt-0">
                  <span className="font-mono text-xs sm:text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 font-semibold tracking-wide">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}