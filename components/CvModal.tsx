"use client";

import { useEffect } from "react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-200 ${
        isOpen
          ? "opacity-100 pointer-events-auto scale-100"
          : "opacity-0 pointer-events-none scale-95"
      }`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[88vh] bg-[#101014] border border-[#D81E28]/50 rounded-2xl shadow-[0_0_50px_rgba(216,30,40,0.4)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14141A] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D81E28] animate-pulse" />
            <div>
              <h2
                id="cv-modal-title"
                className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wider"
              >
                Ajmal Riswan — Curriculum Vitae
              </h2>
              <span className="text-[11px] font-mono text-zinc-400">
                Software Engineering Graduate · Verified Credential
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Ajmal_Riswan_CV.pdf"
              download="Ajmal_Riswan_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D81E28] hover:bg-[#E62A35] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(216,30,40,0.4)]"
            >
              <span>Download PDF</span>
              <span>↓</span>
            </a>

            <a
              href="/Ajmal_Riswan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#D81E28] text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all duration-200"
            >
              <span>New Tab</span>
              <span>↗</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white flex items-center justify-center transition-colors duration-200 text-sm font-mono cursor-pointer"
              aria-label="Close CV Modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable PDF Viewport */}
        <div className="flex-1 w-full h-full bg-[#09090B] relative overflow-hidden flex flex-col">
          {isOpen ? (
            <iframe
              src="/Ajmal_Riswan_CV.pdf#toolbar=1&navpanes=0&view=FitH"
              className="w-full h-full flex-1 border-none"
              title="Ajmal Riswan Curriculum Vitae"
            />
          ) : (
            <div className="w-full h-full bg-[#09090B]" />
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 bg-[#14141A] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="text-[#D81E28]">✦</span> Fully Scrollable Document
          </span>
          <span className="sm:hidden">
            <a
              href="/Ajmal_Riswan_CV.pdf"
              download="Ajmal_Riswan_CV.pdf"
              className="text-[#D81E28] hover:underline"
            >
              Download PDF ↓
            </a>
          </span>
          <span className="hidden sm:inline">Press Esc or click outside to close</span>
        </div>
      </div>
    </div>
  );
}
