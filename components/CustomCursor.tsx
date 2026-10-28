"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicked = false;
    let isVisible = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Fast check without getComputedStyle (avoid reflow)
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.closest(".cursor-pointer"))
      ) {
        if (!isHovered) {
          isHovered = true;
          ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(1.6)`;
          ring.style.borderColor = "#D81E28";
          ring.style.backgroundColor = "rgba(216, 30, 40, 0.15)";
        }
      } else {
        if (isHovered) {
          isHovered = false;
          ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(1)`;
          ring.style.borderColor = "rgba(216, 30, 40, 0.5)";
          ring.style.backgroundColor = "transparent";
        }
      }
    };

    const onMouseDown = () => {
      isClicked = true;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.6)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovered ? 1.3 : 0.8})`;
    };

    const onMouseUp = () => {
      isClicked = false;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovered ? 1.6 : 1})`;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth 60/120fps hardware-accelerated lerp loop
    const tick = () => {
      // Immediate precision dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${isClicked ? 0.6 : 1})`;

      // Smooth trailing ring (lerp factor 0.22)
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${
        isClicked ? (isHovered ? 1.3 : 0.8) : isHovered ? 1.6 : 1
      })`;

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Precision Inner Dot (Direct GPU Layer) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#D81E28] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-[0_0_8px_#D81E28] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Cyber Smooth Trailing Ring (Direct GPU Layer) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#D81E28]/50 bg-transparent pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[border-color,background-color] duration-150 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
}
