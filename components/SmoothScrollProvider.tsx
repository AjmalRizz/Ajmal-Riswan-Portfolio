"use client";

import { useEffect, ReactNode } from "react";
import { initSmoothScroll } from "@/lib/motion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = initSmoothScroll();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
