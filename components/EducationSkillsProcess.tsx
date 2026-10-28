"use client";

import { Reveal } from "./Reveal";

const skills = [
  "C#",
  ".NET",
  "Java",
  "Node.js",
  "Express.js",
  "REST APIs",
  "SQL Server",
  "MySQL",
  "Entity Framework Core",
  "Firebase",
  "Android Studio",
  "JWT",
  "Bcrypt",
  "RBAC",
  "HTML / CSS",
  "Git & GitHub",
  "Scalar",
  "GSAP Animation",
];

const workSteps = [
  {
    num: "01",
    title: "DISCOVER & ANALYZE",
    desc: "Understanding domain requirements, system boundaries, and user workflows.",
  },
  {
    num: "02",
    title: "ARCHITECTURE",
    desc: "Designing relational database schemas, REST contracts, and access control tiers.",
  },
  {
    num: "03",
    title: "DEVELOP",
    desc: "Writing clean, strongly-typed backend endpoints and responsive client interfaces.",
  },
  {
    num: "04",
    title: "TEST & VERIFY",
    desc: "Validating API endpoints with Scalar, automated test scripts, and security audits.",
  },
  {
    num: "05",
    title: "DELIVER",
    desc: "Deploying production-ready solutions with complete documentation and monitoring.",
  },
];

export function EducationSkillsProcess() {
  return (
    <section
      id="about"
      className="relative z-10 w-full py-24 bg-transparent border-t border-white/5"
      aria-label="Education, Skills and Work Process"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: Education & Skills (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#111114] border border-white/5">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D81E28]" />
                <h2 className="font-bebas text-2xl tracking-wider text-white">
                  EDUCATION &amp; SKILLS
                </h2>
              </div>

              {/* Education */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D81E28] font-semibold block mb-4">
                  EDUCATION
                </span>

                <div className="space-y-4">
                  <div className="border-l-2 border-[#D81E28] pl-3.5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm font-semibold text-white">
                        Higher Diploma in Computer Science &amp; Software Engineering
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      ICBT Kandy Campus, Sri Lanka
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-mono text-[#D81E28] font-medium uppercase tracking-wider">
                      Completed
                    </span>
                  </div>

                  <div className="border-l-2 border-white/20 pl-3.5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm font-semibold text-white">
                        GCE Advanced Level &amp; Ordinary Level
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      B/Al Murshid Maha Vidyalaya
                    </p>
                    <span className="inline-block mt-1 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D81E28] font-semibold block mb-3">
                  SKILLS &amp; TECHNOLOGIES
                </span>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#18181C] text-zinc-300 border border-white/5 hover:border-[#D81E28]/50 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Work Process Timeline (lg:col-span-4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#111114] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D81E28]" />
                <h2 className="font-bebas text-2xl tracking-wider text-white">
                  WORK PROCESS
                </h2>
              </div>

              {/* Connected Steps */}
              <div className="relative space-y-6">
                {/* Connecting Line */}
                <div className="absolute top-4 bottom-4 left-4 w-[1px] bg-gradient-to-b from-[#D81E28] via-white/10 to-[#D81E28]" />

                {workSteps.map((step) => (
                  <div key={step.num} className="relative flex items-start gap-4">
                    {/* Circle Node */}
                    <div className="relative z-10 w-8 h-8 rounded-full bg-[#18181C] border border-[#D81E28] flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold text-[#D81E28]">
                      {step.num}
                    </div>

                    <div>
                      <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Rich Crimson Highlight Card (lg:col-span-4) */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-[#8B0D18] to-[#5A0810] border border-[#D81E28]/40 shadow-[0_10px_40px_rgba(216,30,40,0.25)] flex flex-col justify-between text-white relative overflow-hidden">
            {/* Ambient Radial Accent */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D81E28]/30 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Giant Quote Symbol */}
              <span className="font-serif text-7xl leading-none text-white/30 block mb-4 select-none">
                “
              </span>

              <Reveal direction="up">
                <p className="text-lg sm:text-xl font-normal leading-relaxed text-white">
                  Good software architecture is not just how it looks, but how reliably it performs under real-world loads.
                </p>
              </Reveal>

              <div className="mt-8">
                <span className="font-script text-3xl sm:text-4xl text-white block">
                  Ajmal Riswan
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 block mt-0.5">
                  Software Engineering Graduate
                </span>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white block">
                LET&apos;S CREATE SOMETHING GREAT TOGETHER.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
