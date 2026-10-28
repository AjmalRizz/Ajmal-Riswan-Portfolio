"use client";

import { Reveal } from "./Reveal";

interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  type: "Education" | "Project" | "Architecture";
  points: string[];
}

const timelineData: TimelineItem[] = [
  {
    period: "Sep 2026",
    role: "Backend API Integration Lead",
    institution: "NWSDB Service-Oriented System",
    location: "Sri Lanka",
    type: "Architecture",
    points: [
      "Built service-oriented REST endpoints in C# and .NET for water bill inquiries and meter consumption checks.",
      "Integrated third-party payment provider webhooks and status verifications with SQL Server using Entity Framework Core.",
      "Documented and tested REST API endpoints using Scalar test suites.",
    ],
  },
  {
    period: "Sep 2026",
    role: "Security & API Lead (5-Member Team)",
    institution: "CSE5015 Computing Project (OCODR)",
    location: "Sri Lanka",
    type: "Project",
    points: [
      "Delivered a national digital identity platform in Express and Node.js with a ten-tier role-based access control (RBAC) system.",
      "Built tamper-evident audit logging for every citizen record view and modification.",
      "Configured bcrypt password hashing, JWT session authentication, and automated API test scripts.",
    ],
  },
  {
    period: "Jul 2026",
    role: "Android Application Developer",
    institution: "PrintXpress Project",
    location: "Sri Lanka",
    type: "Project",
    points: [
      "Built native Android client in Java with Android Studio.",
      "Engineered order configuration workflow with paper selection and print asset verification.",
      "Synchronized real-time job production stages using Firebase datastores.",
    ],
  },
  {
    period: "Completed",
    role: "Higher Diploma in Computer Science & Software Engineering",
    institution: "ICBT Kandy Campus",
    location: "Kandy, Sri Lanka",
    type: "Education",
    points: [
      "Completed comprehensive coursework in software design, data structures, algorithms, and distributed systems.",
      "Specialized in backend architectures, database design, and object-oriented software engineering.",
    ],
  },
  {
    period: "Completed",
    role: "GCE Advanced Level & Ordinary Level",
    institution: "B/Al Murshid Maha Vidyalaya",
    location: "Sri Lanka",
    type: "Education",
    points: [
      "Completed secondary education with focused studies in physical sciences and foundational mathematics.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-24 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-hairline)] transition-colors duration-300"
      aria-label="Experience and Education"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-hairline)] pb-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-[var(--sage)]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Trajectory & Qualifications
              </span>
            </div>
            <Reveal direction="up">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] font-normal tracking-tight">
                Experience & Education
              </h2>
            </Reveal>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Academic qualifications paired with verifiable backend engineering
              deliverables and team collaboration.
            </p>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={`${item.institution}-${index}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-12 border-b border-[var(--border-hairline)] last:border-b-0"
            >
              {/* Left Column: Period & Badge */}
              <div className="lg:col-span-3 flex lg:flex-col justify-between items-start">
                <span className="font-mono text-sm text-[var(--text-primary)] font-medium">
                  {item.period}
                </span>
                <span className="mt-2 text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 border border-[var(--border-strong)] text-[var(--text-secondary)]">
                  {item.type}
                </span>
              </div>

              {/* Middle Column: Role & Institution */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl text-[var(--text-primary)]">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-[var(--accent)] mt-1">
                  {item.institution}
                </p>
                <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                  {item.location}
                </p>
              </div>

              {/* Right Column: Points */}
              <div className="lg:col-span-5">
                <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed list-disc list-outside pl-4 marker:text-[var(--accent)]">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
