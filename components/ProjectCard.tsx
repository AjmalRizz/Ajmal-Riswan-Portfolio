"use client";

import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const counter = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group relative flex flex-col justify-between h-full w-full min-w-0 max-w-[540px] md:max-w-[560px] p-4 sm:p-6 md:p-7 rounded-2xl border border-white/10 bg-[#111114]/90 backdrop-blur-md hover:border-[#D81E28] transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_rgba(216,30,40,0.15)]"
      aria-labelledby={`project-title-${project.slug}`}
    >
      <div className="flex flex-col gap-3.5 sm:gap-4">
        {/* Project Preview Image (No Hyperlink) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#18181C] border border-white/10">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Title, Subtitle & GitHub Pill Button (Matching Screenshot) */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-start gap-3 sm:gap-3.5 flex-1 min-w-0">
            <span className="font-bebas text-3xl sm:text-4xl text-[#D81E28] leading-none flex-shrink-0 pt-0.5">
              {counter}
            </span>

            <div className="min-w-0 flex-1 min-h-0 sm:min-h-[74px]">
              <h3
                id={`project-title-${project.slug}`}
                className="font-bebas text-2xl sm:text-3xl lg:text-[32px] tracking-wide text-white uppercase leading-tight select-none"
              >
                {project.title}
              </h3>
              <p className="font-tech text-xs sm:text-sm text-zinc-300 font-medium mt-1 leading-snug">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* GitHub Pill Button from screenshot: [icon] GitHub */}
          <a
            href={project.githubUrl || "https://github.com/AjmalRizz"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#161619] hover:bg-[#D81E28] border border-white/20 hover:border-[#D81E28] text-white transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(216,30,40,0.4)] flex-shrink-0 group/gh cursor-pointer self-start sm:self-auto mt-0.5"
            aria-label={`View ${project.title} repository on GitHub`}
            title="View GitHub Repository"
          >
            <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current text-white flex-shrink-0" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="font-tech text-xs sm:text-sm font-semibold tracking-wide text-white">
              GitHub
            </span>
          </a>
        </div>
      </div>

      {/* Tech Stack Tags: Clearly Visible, Space Grotesk Font Style & Big Size Font */}
      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs md:text-sm font-tech font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 tracking-wide shadow-sm transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
