import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohamad-ajmal.vercel.app";
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} — Case Study | Ajmal Riswan`,
    description: project.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Ajmal Riswan`,
      description: project.summary,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 675,
          alt: `${project.title} architectural overview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Ajmal Riswan`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohamad-ajmal.vercel.app";
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const counter = String(projectIndex + 1).padStart(2, "0");

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle,
    description: project.summary,
    datePublished: project.date,
    author: {
      "@type": "Person",
      name: "Ajmal Riswan",
      url: siteUrl,
    },
    image: `${siteUrl}${project.image}`,
    keywords: project.stack.join(", "),
  };

  return (
    <article className="min-h-screen pt-28 pb-20 bg-[#09090B] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D81E28] hover:underline"
          >
            <span aria-hidden="true">←</span>
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-b border-white/10 pb-10 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-bebas text-3xl text-[#D81E28] leading-none">
              /{counter}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Case Study
            </span>
            {project.lead && (
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#D81E28]/15 text-[#D81E28] border border-[#D81E28]/30 font-semibold">
                Lead Project
              </span>
            )}
            {project.team && (
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                Team Delivery
              </span>
            )}
          </div>

          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-none uppercase">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {project.subtitle}
          </p>

          {/* GitHub Repository Action */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.githubUrl || "https://github.com/AjmalRizz"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 hover:border-[#D81E28] bg-white/[0.04] hover:bg-[#D81E28]/15 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(216,30,40,0.35)]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>View GitHub Repository</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Metadata Grid */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="block text-zinc-400 uppercase">Date</span>
              <span className="block mt-1 text-white font-medium">
                {project.date}
              </span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase">Role Focus</span>
              <span className="block mt-1 text-white font-medium">
                {project.lead ? "Lead API Integration" : project.team ? "API & Security Lead" : "Lead Developer"}
              </span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase">Scope</span>
              <span className="block mt-1 text-white font-medium">
                {project.team || "Individual Implementation"}
              </span>
            </div>
            <div>
              <span className="block text-zinc-400 uppercase">Deliverable</span>
              <span className="block mt-1 text-white font-medium">
                Production-Ready Build
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image Showcase */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121215] mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} architectural overview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-14 text-white">
          {/* Section 1: Problem */}
          <section aria-labelledby="problem-heading" className="border-b border-white/10 pb-10">
            <h2
              id="problem-heading"
              className="font-bebas text-2xl tracking-wider text-[#D81E28] mb-3"
            >
              01 / PROBLEM &amp; CONTEXT
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Section 2: My Role */}
          <section aria-labelledby="role-heading" className="border-b border-white/10 pb-10">
            <h2
              id="role-heading"
              className="font-bebas text-2xl tracking-wider text-[#D81E28] mb-3"
            >
              02 / MY ROLE &amp; RESPONSIBILITIES
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {project.myRole}
            </p>
          </section>

          {/* Section 3: Key Decisions */}
          <section aria-labelledby="decisions-heading" className="border-b border-white/10 pb-10">
            <h2
              id="decisions-heading"
              className="font-bebas text-2xl tracking-wider text-[#D81E28] mb-5"
            >
              03 / KEY TECHNICAL DECISIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyDecisions.map((decision, dIdx) => (
                <div
                  key={dIdx}
                  className="p-6 rounded-xl border border-white/5 bg-[#111114] flex flex-col justify-between"
                >
                  <span className="font-mono text-xs text-[#D81E28] mb-3 font-semibold">
                    Decision #{dIdx + 1}
                  </span>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Stack */}
          <section aria-labelledby="stack-heading" className="border-b border-white/10 pb-10">
            <h2
              id="stack-heading"
              className="font-bebas text-2xl tracking-wider text-[#D81E28] mb-5"
            >
              04 / TECHNOLOGY STACK
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-[#161619] border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Section 5: Outcome */}
          <section aria-labelledby="outcome-heading" className="border-b border-white/10 pb-10">
            <h2
              id="outcome-heading"
              className="font-bebas text-2xl tracking-wider text-[#D81E28] mb-3"
            >
              05 / OUTCOME
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {project.outcome}
            </p>
          </section>

          {/* Section 6: Facts */}
          <section aria-labelledby="facts-heading" className="pb-10">
            <h2
              id="facts-heading"
              className="font-bebas text-2xl tracking-wider text-[#D81E28] mb-5"
            >
              06 / IMPLEMENTATION FACTS
            </h2>
            <ul className="space-y-3 text-sm text-zinc-300 list-disc list-outside pl-5 marker:text-[#D81E28]">
              {project.facts.map((fact, fIdx) => (
                <li key={fIdx}>{fact}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Previous and Next Navigation */}
        <nav
          aria-label="Adjacent Case Studies"
          className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group p-6 rounded-xl border border-white/5 bg-[#111114] hover:border-[#D81E28] transition-colors duration-200"
            >
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-[#D81E28] transition-colors duration-200">
                ← Previous Project
              </span>
              <span className="block mt-2 font-bebas text-2xl text-white tracking-wide">
                {prev.title}
              </span>
              <span className="block mt-1 text-xs font-mono text-zinc-400">
                {prev.date}
              </span>
            </Link>
          ) : (
            <div className="p-6 rounded-xl border border-white/5 opacity-30">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400">
                Beginning of Index
              </span>
              <span className="block mt-2 font-bebas text-2xl text-white">
                First Project
              </span>
            </div>
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group p-6 rounded-xl border border-white/5 bg-[#111114] hover:border-[#D81E28] transition-colors duration-200 text-right sm:text-right"
            >
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-[#D81E28] transition-colors duration-200">
                Next Project →
              </span>
              <span className="block mt-2 font-bebas text-2xl text-white tracking-wide">
                {next.title}
              </span>
              <span className="block mt-1 text-xs font-mono text-zinc-400">
                {next.date}
              </span>
            </Link>
          ) : (
            <div className="p-6 rounded-xl border border-white/5 opacity-30 text-right">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400">
                End of Index
              </span>
              <span className="block mt-2 font-bebas text-2xl text-white">
                Last Project
              </span>
            </div>
          )}
        </nav>
      </div>
    </article>
  );
}
