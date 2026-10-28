"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

interface CyberParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  isCrosshair?: boolean;
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -999,
    y: -999,
    active: false,
  });

  // Ensure Video Autoplays smoothly with GPU acceleration
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleFirstInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
          };
          window.addEventListener("click", handleFirstInteraction, { once: true });
          window.addEventListener("touchstart", handleFirstInteraction, { once: true });
        });
      }
    }
  }, []);

  // Highly Optimized 60+ FPS Cyberpunk Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (prefersReducedMotion()) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Curated Cyberpunk Palette: Crimson, Neon Red, Cyber Cyan
    const colors = [
      "rgba(216, 30, 40,",   // Primary Crimson
      "rgba(255, 46, 59,",   // Neon Red
      "rgba(216, 30, 40,",   // Crimson
      "rgba(0, 240, 255,",   // Cyber Cyan
    ];

    // 45 particles gives rich cyberpunk ambiance while keeping pair checks ultra-light (~990 checks vs ~4000)
    const particleCount = Math.min(Math.floor((width * height) / 26000), 45);
    const particles: CyberParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.3,
        color,
        isCrosshair: i % 6 === 0,
      });
    }

    let time = 0;
    const maxDist = 110;
    const maxDistSq = maxDist * maxDist;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.018;

      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Fast border wrap
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse proximity interaction (fast squared check)
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdistSq = mdx * mdx + mdy * mdy;
          if (mdistSq < 14400) { // 120px
            const mdist = Math.sqrt(mdistSq);
            const force = (1 - mdist / 120) * 0.9;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;

            // Direct hairline to mouse
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(216, 30, 40, ${(1 - mdist / 120) * 0.3})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Pulse alpha
        p.alpha = p.baseAlpha + Math.sin(time * 2 + i) * 0.15;

        // Render Particle without expensive shadowBlur
        if (p.isCrosshair) {
          // Cyber HUD Crosshair "+"
          ctx.strokeStyle = `${p.color} ${Math.max(0.2, p.alpha)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x - 3.5, p.y);
          ctx.lineTo(p.x + 3.5, p.y);
          ctx.moveTo(p.x, p.y - 3.5);
          ctx.lineTo(p.x, p.y + 3.5);
          ctx.stroke();
        } else {
          // Outer subtle glow halo (hardware accelerated 2-arc pass, NO shadowBlur!)
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${Math.max(0.04, p.alpha * 0.2)})`;
          ctx.fill();

          // Solid inner core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${Math.max(0.2, p.alpha)})`;
          ctx.fill();
        }

        // Pair connection hairlines using squared distance
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / maxDist) * 0.22;
            ctx.strokeStyle = `rgba(216, 30, 40, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* High Quality Technological Background Video Loop (Zero Heavy Filters for 60fps GPU Playback) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-38 will-change-transform transform-gpu"
        aria-hidden="true"
      >
        <source src="/videos/cyber-tech-bg.webm" type="video/webm" />
      </video>

      {/* Lightweight Cyberpunk Crimson Tint & Gradient Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(216, 30, 40, 0.12) 0%, transparent 45%, rgba(9, 9, 11, 0.7) 75%, #09090B 98%)",
        }}
      />

      {/* Cyber Digital Particles Canvas (Dedicated GPU Compositing Layer) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-90 will-change-transform transform-gpu"
      />
    </div>
  );
}
