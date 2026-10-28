"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade";
  tag?: keyof HTMLElementTagNameMap;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  tag: Tag = "div",
}: RevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      if (direction === "up") {
        gsap.fromTo(
          el,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: delay,
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: delay,
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, [delay, direction]);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={containerRef}
      className={`overflow-hidden block ${className}`}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </Component>
  );
}
