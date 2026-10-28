"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    subject: "",
    message: "",
  });

  const emailAddress = "mohammadajmal8767@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const recruiterSummary = `Ajmal Riswan — Software Developer
Location: Sri Lanka (Open to Relocation & Remote Roles)
Email: mohammadajmal8767@gmail.com
LinkedIn: https://linkedin.com/in/ajmal-rm
GitHub: https://github.com/AjmalRizz
Portfolio: https://mohamad-ajmal.vercel.app

Core Technologies:
• Backend & APIs: C#, .NET, Node.js, Express, REST APIs, Scalar
• Databases: SQL Server, MySQL, Entity Framework Core, Firebase
• Mobile & Web: Java (Android Studio), Next.js, TypeScript, React
• Practices: Clean Architecture, RBAC, JWT Auth, Microservices, Git`;

  const handleCopyRecruiterSummary = async () => {
    try {
      await navigator.clipboard.writeText(recruiterSummary);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoSubject = formState.subject || `Message from ${formState.name || "Recruiter"}`;
    const mailtoBody = `Hi Ajmal,

${formState.message}

Sender Information:
Name: ${formState.name}
Email: ${formState.email}
${formState.company ? `Company: ${formState.company}\n` : ""}${formState.role ? `Role: ${formState.role}\n` : ""}`;

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      mailtoSubject
    )}&body=${encodeURIComponent(mailtoBody)}`;

    window.open(mailtoUrl, "_blank");
    setStatusMessage("Email client opened! You can review and send the message.");
    setTimeout(() => setStatusMessage(null), 6000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full py-20 lg:py-28 bg-transparent"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Main Glassmorphism Contact Panel */}
        <div className="relative rounded-3xl border border-white/15 bg-[#101014]/80 backdrop-blur-2xl p-5 sm:p-8 md:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.65)] overflow-hidden">
          {/* Subtle Ambient Red Glow Orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D81E28]/12 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D81E28]/10 blur-3xl pointer-events-none" />

          {/* Section Subheading / Counter matching Reference */}
          <div className="relative z-10 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D81E28] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#D81E28] font-bold">
              05 · CONTACT
            </span>
          </div>

          {/* Dashed Horizontal Separator Line */}
          <div className="relative z-10 w-full border-t border-dashed border-white/15 my-6 sm:my-8" />

          {/* 2-Column Split: Info Left, Form Right */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Let's talk & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-tech text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
                  Let&apos;s talk.
                </h2>
                <p className="mt-3 text-sm sm:text-lg text-zinc-300 font-tech font-normal leading-relaxed">
                  Hiring for a software engineering role?
                  <br />
                  Send a note and I&apos;ll get back to you.
                </p>

                {/* Contact Links Block */}
                <div className="mt-6 sm:mt-8 space-y-4">
                  {/* Email with direct copy trigger */}
                  <div className="flex items-center gap-2.5">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-lg font-tech text-white hover:text-[#D81E28] underline underline-offset-4 decoration-zinc-500 hover:decoration-[#D81E28] transition-colors font-medium break-all sm:break-normal"
                    >
                      {emailAddress}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <span className="text-xs font-mono text-[#D81E28] font-bold">Copied! ✓</span>
                      ) : (
                        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-3 pt-1">
                    <svg className="w-4 h-4 fill-current text-zinc-400 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <Link
                      href="https://linkedin.com/in/ajmal-rm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-tech text-zinc-300 hover:text-white transition-colors"
                    >
                      linkedin.com/in/ajmal-rm
                    </Link>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 fill-current text-zinc-400 flex-shrink-0" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <Link
                      href="https://github.com/AjmalRizz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-tech text-zinc-300 hover:text-white transition-colors"
                    >
                      github.com/AjmalRizz
                    </Link>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400 text-sm">📍</span>
                    <span className="text-sm sm:text-base font-tech text-zinc-300">
                      Sri Lanka (Asia/Colombo UTC+5:30)
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy Recruiter Summary CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCopyRecruiterSummary}
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/20 hover:border-[#D81E28] bg-white/[0.05] hover:bg-[#D81E28]/15 text-white font-tech text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(216,30,40,0.3)] cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                  <span>{copiedSummary ? "Recruiter summary copied! ✓" : "Copy recruiter summary"}</span>
                </button>
                <p className="mt-2.5 text-xs font-tech text-zinc-400 leading-relaxed max-w-sm">
                  Role, stack and links in one block, ready to paste into your notes or ATS.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#0B0B0E]/80 border border-white/10 hover:border-white/20 focus:border-[#D81E28] focus:ring-1 focus:ring-[#D81E28] text-white placeholder-zinc-500 font-tech text-sm sm:text-base outline-none transition-all duration-200"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#0B0B0E]/80 border border-white/10 hover:border-white/20 focus:border-[#D81E28] focus:ring-1 focus:ring-[#D81E28] text-white placeholder-zinc-500 font-tech text-sm sm:text-base outline-none transition-all duration-200"
                  />
                </div>

                {/* COMPANY & ROLE (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium"
                    >
                      COMPANY
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#0B0B0E]/80 border border-white/10 hover:border-white/20 focus:border-[#D81E28] focus:ring-1 focus:ring-[#D81E28] text-white placeholder-zinc-500 font-tech text-sm sm:text-base outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-role"
                      className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium"
                    >
                      ROLE
                    </label>
                    <input
                      id="contact-role"
                      type="text"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      placeholder="Optional"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#0B0B0E]/80 border border-white/10 hover:border-white/20 focus:border-[#D81E28] focus:ring-1 focus:ring-[#D81E28] text-white placeholder-zinc-500 font-tech text-sm sm:text-base outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium"
                  >
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Role or opportunity"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#0B0B0E]/80 border border-white/10 hover:border-white/20 focus:border-[#D81E28] focus:ring-1 focus:ring-[#D81E28] text-white placeholder-zinc-500 font-tech text-sm sm:text-base outline-none transition-all duration-200"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="A few details about the role"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#0B0B0E]/80 border border-white/10 hover:border-white/20 focus:border-[#D81E28] focus:ring-1 focus:ring-[#D81E28] text-white placeholder-zinc-500 font-tech text-sm sm:text-base outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white hover:bg-[#D81E28] text-black hover:text-white font-tech font-bold text-base transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(216,30,40,0.5)] flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>Send message</span>
                  </button>
                </div>

                {statusMessage && (
                  <p className="font-mono text-xs text-[#D81E28] text-center pt-2 font-semibold animate-pulse">
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}