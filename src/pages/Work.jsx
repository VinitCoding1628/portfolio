import React from "react";
import { Zap, ArrowUpRight } from "lucide-react";

export default function Work() {
  const projects = [
    {
      title: "Velora UI Design System",
      description: "A dark-mode first component library featuring fluid motion, accessible primitives, and micro-interactions built with Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      year: "2024",
      link: "#",
      github: "#",
    },
    {
      title: "Chronos Analytics Dashboard",
      description: "Real-time telemetry and data visualization platform with customizable charts, high-frequency metrics, and sub-millisecond response rates.",
      tags: ["TypeScript", "Next.js", "Recharts"],
      year: "2024",
      link: "#",
      github: "#",
    },
    {
      title: "Synthetix AI Workspace",
      description: "Generative AI canvas interface for multimodal prompt chaining, markdown streaming, and node-based workflow orchestration.",
      tags: ["React", "WebSockets", "Vite"],
      year: "2023",
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Page Header */}
      <div className="space-y-2 border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-300 uppercase">
          <Zap className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Selected Work
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          A showcase of recent web applications, interfaces, and digital experiments.
        </p>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative p-6 sm:p-7 rounded-3xl bg-zinc-950/60 border border-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-zinc-500 mb-1 block">
                  {project.year}
                </span>
                <h2 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  title="Source Code"
                  className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={project.link}
                  title="Live Demo"
                  className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
