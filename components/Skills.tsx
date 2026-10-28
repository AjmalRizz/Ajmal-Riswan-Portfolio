"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

interface DomainGroup {
  category: string;
  tag: string;
  skills: {
    name: string;
    iconType: string;
    fullName?: string;
  }[];
}

const SKILL_DOMAINS: DomainGroup[] = [
  {
    category: "Languages",
    tag: "01",
    skills: [
      { name: "Java", iconType: "java" },
      { name: "C#", iconType: "csharp" },
      { name: "C++", iconType: "cpp" },
      { name: "JavaScript", iconType: "javascript" },
      { name: "PHP", iconType: "php" },
      { name: "SQL", iconType: "sql" },
    ],
  },
  {
    category: "Backend & APIs",
    tag: "02",
    skills: [
      { name: ".NET", iconType: "dotnet" },
      { name: "ASP.NET Core", iconType: "aspnet" },
      { name: "Node.js", iconType: "nodejs" },
      { name: "Express.js", iconType: "express" },
      { name: "REST APIs", iconType: "restapi" },
      { name: "Entity Framework Core", iconType: "efcore" },
      { name: "JWT", iconType: "jwt" },
      { name: "Bcrypt", iconType: "bcrypt" },
      { name: "Role-Based Access Control (RBAC)", iconType: "rbac" },
    ],
  },
  {
    category: "Databases",
    tag: "03",
    skills: [
      { name: "MySQL", iconType: "mysql" },
      { name: "SQL Server", iconType: "sqlserver" },
      { name: "Firebase Firestore", iconType: "firestore" },
      { name: "Database Design", iconType: "dbdesign" },
    ],
  },
  {
    category: "Web & Mobile",
    tag: "04",
    skills: [
      { name: "HTML", iconType: "html" },
      { name: "CSS", iconType: "css" },
      { name: "Android Studio", iconType: "android" },
      { name: "Firebase", iconType: "firebase" },
    ],
  },
  {
    category: "Tools",
    tag: "05",
    skills: [
      { name: "Git", iconType: "git" },
      { name: "GitHub", iconType: "github" },
      { name: "Visual Studio", iconType: "visualstudio" },
      { name: "VS Code", iconType: "vscode" },
      { name: "NetBeans", iconType: "netbeans" },
      { name: "XAMPP", iconType: "xampp" },
      { name: "RStudio", iconType: "rstudio" },
      { name: "Cisco Packet Tracer", iconType: "cisco" },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 w-full py-14 sm:py-16 bg-transparent border-t border-white/5"
      aria-label="Technical Skills Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D81E28] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D81E28] font-bold">
                02 · Technical Skills
              </span>
            </div>

            <Reveal direction="up">
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase leading-none">
                TECHNICAL <span className="text-[#D81E28]">STACKS</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Clean Filtered Domain Groups with Glassmorphism Blur & Zero Interruption Fonts */}
        <div className="space-y-6">
          {SKILL_DOMAINS.map((domain) => (
            <div
              key={domain.category}
              className="relative overflow-hidden p-4 sm:p-6 rounded-2xl bg-[#0D0D14]/60 backdrop-blur-2xl border border-white/15 hover:border-white/25 shadow-[0_16px_40px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all duration-300"
            >
              {/* Top Glass Specular Beam Reflection */}
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Domain Subheader */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono-tech text-[#D81E28] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D81E28]/15 border border-[#D81E28]/35 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {domain.tag}
                  </span>
                  <h3 className="font-tech text-sm sm:text-base font-bold uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {domain.category}
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs font-mono-tech text-zinc-200 font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {domain.skills.length} stacks
                </span>
              </div>

              {/* Grid of Stack Boxes - Frosted Glass Tiles with Visible Typography */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-4 relative z-10">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={skill.fullName || skill.name}
                    className="group relative flex flex-col items-center justify-between p-3 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 hover:border-[#D81E28]/70 shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(216,30,40,0.25)] text-center cursor-default min-h-[104px] sm:min-h-[112px]"
                  >
                    {/* Clean Flat Icon Container - Frosted Glass Tile */}
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] group-hover:bg-white/[0.12] backdrop-blur-sm border border-white/15 group-hover:border-white/30 flex items-center justify-center p-2 transition-all shadow-inner">
                      <Image
                        src={`/icons/skills/${skill.iconType}.svg`}
                        alt={`${skill.name} icon`}
                        width={36}
                        height={36}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow-sm"
                        unoptimized
                      />
                    </div>

                    {/* Skill Name Under Icon - High Contrast, Drop Shadow for zero interruption */}
                    <div className="mt-2 sm:mt-2.5 w-full flex items-center justify-center min-h-[28px] sm:min-h-[32px]">
                      <span className="font-tech text-[11px] sm:text-xs md:text-[13px] font-bold text-white group-hover:text-[#D81E28] drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] transition-colors leading-tight line-clamp-2 text-center px-0.5">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
