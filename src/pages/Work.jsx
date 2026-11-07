import React from "react";
import { Zap, ArrowUpRight, Layers, ArrowRight } from "lucide-react";
import { projects, stacks } from "@/data/data";

function StackIcon({ icon, name }) {
  switch (icon) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="#38bdf8" className="w-6 h-6">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
      );
    case "javascript":
      return (
        <div className="w-6 h-6 rounded bg-[#F7DF1E] text-black font-extrabold flex items-center justify-end pr-0.5 pb-0.5 text-[10px] leading-none select-none">
          JS
        </div>
      );
    case "vite":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#BD34FE" d="M21.5 3.5l-9.2 17.8a.7.7 0 0 1-1.2 0L2.5 3.5a.7.7 0 0 1 .8-1l8.7 2.1 8.7-2.1a.7.7 0 0 1 .8 1z" />
          <path fill="#FFD62E" d="M13.8 3.5l-4.5 9 3 0-1.8 5.5 5.5-8.5-3.2 0 1-6z" />
        </svg>
      );
    case "reactrouter":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 19L14 4h6" />
          <path d="M4 19h16" />
          <circle cx="18" cy="19" r="2" fill="#F44250" />
          <circle cx="6" cy="19" r="2" fill="#F44250" />
          <circle cx="18" cy="4" r="2" fill="#F44250" />
        </svg>
      );
    case "shadcn":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 dark:text-white text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20L20 4" />
          <path d="M14 20h6v-6" />
        </svg>
      );
    default:
      return (
        <span className="text-sm font-bold dark:text-white text-zinc-900">
          {name.charAt(0)}
        </span>
      );
  }
}

export default function Work() {
  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <div className="space-y-2 border-b dark:border-white/8 border-black/8 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-500 dark:text-blue-300 uppercase">
          <Zap className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-zinc-900">
          Projects
        </h1>
        <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base max-w-xl">
          A showcase of recent web applications, interfaces, and digital experiments.
        </p>
      </div>

      {/* My Stacks Section */}
      <section className="space-y-6">
        <div className="space-y-2 border-b border-dashed dark:border-white/10 border-black/10 pb-6">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 dark:text-white text-zinc-900" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight dark:text-white text-zinc-900">
              My Stacks
            </h2>
          </div>
          <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Commitment to staying updated with the latest design trends and techniques.
          </p>
        </div>

        {/* 2-Column Stacks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {stacks.map((stack, idx) => (
            <a
              key={idx}
              href={stack.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl dark:bg-zinc-950/70 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-white/20 hover:border-black/20 dark:hover:bg-zinc-900/60 hover:bg-zinc-100 transition-all duration-200 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 flex items-center justify-center shrink-0 shadow-inner dark:group-hover:border-white/20 group-hover:border-black/20 transition-colors">
                  <StackIcon icon={stack.icon} name={stack.name} />
                </div>
                <div>
                  <h3 className="text-base font-bold dark:text-white text-zinc-900 tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-200 transition-colors">
                    {stack.name}
                  </h3>
                  <p className="text-xs dark:text-zinc-400 text-zinc-500 mt-0.5">
                    {stack.category}
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 dark:text-zinc-500 text-zinc-400 dark:group-hover:text-white group-hover:text-black group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <section className="space-y-6 pt-2">
        <div className="space-y-2 border-b border-dashed dark:border-white/10 border-black/10 pb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight dark:text-white text-zinc-900">
            All Projects
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base max-w-xl">
            A comprehensive list of recent web applications, interfaces, and digital experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => {
          const tags = project.technologies || project.tags || [];
          const githubUrl = project.githubUrl || project.github;
          const liveUrl = project.liveUrl || project.link;
          const categoryOrYear = project.category || project.year || project.subtitle;

          return (
            <div
              key={project.id || idx}
              className="group relative p-6 sm:p-7 rounded-3xl dark:bg-zinc-950/60 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-white/20 hover:border-black/20 transition-all duration-300 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  {categoryOrYear && (
                    <span className="text-xs font-mono dark:text-zinc-500 text-zinc-400 mb-1 block">
                      {categoryOrYear}
                    </span>
                  )}
                  <h2 className="text-xl font-bold dark:text-white text-zinc-900 group-hover:text-blue-500 dark:group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h2>
                  {project.subtitle && project.category && (
                    <p className="text-xs dark:text-zinc-400 text-zinc-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Source Code"
                      className="p-2 rounded-xl dark:bg-white/5 bg-zinc-100 border dark:border-white/8 border-black/8 dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black dark:hover:bg-white/10 hover:bg-zinc-200 transition-colors"
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
                  )}
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="p-2 rounded-xl dark:bg-white/5 bg-zinc-100 border dark:border-white/8 border-black/8 dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black dark:hover:bg-white/10 hover:bg-zinc-200 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags / Technologies */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg dark:bg-white/4 bg-zinc-100/90 border dark:border-white/6 border-black/8 text-xs font-mono dark:text-zinc-300 text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        </div>
      </section>
    </div>
  );
}
