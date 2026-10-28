"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { gsap, prefersReducedMotion } from "@/lib/motion";

export function ProjectsScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(trackWidth - viewportWidth + 120);
      };

      const scrollTween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 w-full bg-transparent overflow-hidden py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-between border-t border-white/5"
      aria-label="Selected Projects"
    >
      {/* Section Header Matching Template */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 pt-8 lg:pt-14 pb-8 flex items-center justify-between border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D81E28] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D81E28] font-bold">
              03 · Featured Projects
            </span>
          </div>
          <Reveal direction="up">
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wider text-white">
              SELECTED PROJECTS
            </h2>
          </Reveal>
        </div>

        <Link
          href="#projects"
          className="text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-[#D81E28] transition-colors duration-200 flex items-center gap-2"
        >
          <span>View All Projects</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Track: Horizontal on Desktop, Vertical Stack on Mobile */}
      <div className="w-full lg:flex-1 lg:flex lg:items-center overflow-visible lg:overflow-hidden px-4 sm:px-6 md:px-12 my-8 lg:my-0">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full lg:w-max will-change-transform items-stretch"
        >
          {projects.map((project, index) => (
            <div key={project.slug} className="flex-shrink-0 w-full lg:w-[460px] xl:w-[500px]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
