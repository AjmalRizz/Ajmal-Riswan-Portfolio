"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-hairline)] transition-colors duration-300"
      aria-label="About Ajmal Riswan"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--sage)]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            About & Background
          </span>
        </div>

        {/* Editorial Grid: Terminal Console & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Technical Terminal Column (Replaces image) */}
          <div className="lg:col-span-5">
            <div className="w-full border border-[var(--border-hairline)] bg-[var(--bg-surface)] overflow-hidden shadow-sm">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 border-b border-[var(--border-hairline)] bg-[var(--bg-secondary)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)]">
                    ajmal-riswan.config.ts
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">
                  Active
                </span>
              </div>

              {/* Code Breakdown */}
              <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto text-[var(--text-secondary)]">
                <p>
                  <span className="text-[var(--text-muted)]">{"// Software Engineering Profile"}</span>
                </p>
                <p className="mt-2">
                  <span className="text-[var(--accent)]">export const</span>{" "}
                  <span className="text-[var(--text-primary)] font-semibold">engineer</span> = &#123;
                </p>
                <div className="pl-4 space-y-1.5 my-1.5 border-l border-[var(--border-hairline)] ml-1">
                  <p>
                    <span className="text-[var(--text-muted)]">name:</span>{" "}
                    <span className="text-[var(--accent)]">&quot;Ajmal Riswan&quot;</span>,
                  </p>
                  <p>
                    <span className="text-[var(--text-muted)]">discipline:</span> [
                  </p>
                  <div className="pl-4 space-y-0.5">
                    <p className="text-[var(--text-primary)]">&quot;Software Developer&quot;,</p>
                    <p className="text-[var(--text-primary)]">&quot;Mobile Application Developer&quot;,</p>
                    <p className="text-[var(--text-primary)]">&quot;Web Apps Developer&quot;,</p>
                  </div>
                  <p>],</p>
                  <p>
                    <span className="text-[var(--text-muted)]">location:</span>{" "}
                    <span className="text-[var(--text-primary)]">&quot;Sri Lanka (UTC+5:30)&quot;</span>,
                  </p>
                  <p>
                    <span className="text-[var(--text-muted)]">education:</span>{" "}
                    <span className="text-[var(--text-primary)]">&quot;Higher Diploma, ICBT Kandy&quot;</span>,
                  </p>
                  <p>
                    <span className="text-[var(--text-muted)]">languages:</span> [
                    <span className="text-[var(--text-primary)]">&quot;English&quot;, &quot;Tamil&quot;, &quot;Sinhala&quot;</span>
                    ],
                  </p>
                  <p>
                    <span className="text-[var(--text-muted)]">status:</span>{" "}
                    <span className="text-[var(--sage)] font-semibold">&quot;Available for Roles&quot;</span>
                  </p>
                </div>
                <p>&#125;;</p>
              </div>

              {/* Console Footer */}
              <div className="px-6 py-3 border-t border-[var(--border-hairline)] bg-[var(--bg-secondary)] flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-muted)]">Verified Credentials</span>
                <span className="text-[var(--text-primary)] font-medium">Sri Lanka</span>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--border-hairline)] pt-6 text-xs font-mono">
              <div>
                <span className="text-[var(--text-muted)] block uppercase">
                  Languages
                </span>
                <span className="text-[var(--text-primary)] mt-1 block">
                  English, Tamil, Sinhala
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block uppercase">
                  Location
                </span>
                <span className="text-[var(--text-primary)] mt-1 block">
                  Sri Lanka (Open to Remote)
                </span>
              </div>
            </div>
          </div>

          {/* Text Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <Reveal direction="up">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] font-bold tracking-tight leading-tight mb-8">
                  Software Engineering graduate with hands-on experience across backend APIs, relational databases, and mobile applications.
                </h2>
              </Reveal>

              <div className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I am a Software Engineering graduate based in Sri Lanka. I focus
                  on backend development, REST API design, and practical software
                  architecture.
                </p>
                <p>
                  My work includes building a five-person team project with ten
                  role-based access levels, cryptographic password hashing, and an
                  audit log for every record access. I have also integrated a
                  third-party payment API into a service-oriented water billing
                  system using C#, .NET, and SQL Server.
                </p>
                <p>
                  I write clean code with typed data contracts, verify endpoints
                  with automated tests, and document my APIs clearly.
                </p>
              </div>

              {/* Education Block */}
              <div className="mt-12 pt-8 border-t border-[var(--border-hairline)]">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6 font-semibold">
                  Education
                </h3>

                <div className="space-y-6">
                  <div className="border-l-2 border-[var(--border-hairline)] pl-4 hover:border-[var(--accent)] transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                        Higher Diploma in Computer Science and Software Engineering
                      </h4>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        Completed
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      ICBT Kandy Campus, Sri Lanka
                    </p>
                  </div>

                  <div className="border-l-2 border-[var(--border-hairline)] pl-4 hover:border-[var(--sage)] transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                        GCE Advanced Level and Ordinary Level
                      </h4>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        Completed
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      B/Al Murshid Maha Vidyalaya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Action Links */}
            <div className="mt-12 pt-8 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-6">
              <Link
                href="https://github.com/AjmalRizz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-200 font-medium"
              >
                GitHub · @AjmalRizz ↗
              </Link>
              <Link
                href="https://linkedin.com/in/ajmal-rm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-mono uppercase tracking-wider border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 font-medium"
              >
                LinkedIn · ajmal-rm ↗
              </Link>
              <Link
                href="#contact"
                className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline ml-auto font-medium"
              >
                Contact Ajmal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
