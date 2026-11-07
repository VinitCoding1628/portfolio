import React from "react";
import { Download } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/data";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function RightSidebar() {
  const linkedInItem = socialLinks.find((s) => s.platform === "linkedin") || {
    name: "LinkedIn",
    href: personalInfo.linkedin || "https://www.linkedin.com/in/vinitgite",
  };

  const resumeItem = socialLinks.find((s) => s.platform === "resume") || {
    name: "Download Resume",
    href: personalInfo.resumeUrl || "/Vinit_Gite_Resume.pdf",
    download: true,
  };

  return (
    <aside className="hidden sm:flex fixed right-0 top-16 bottom-0 w-20 dark:bg-[#0c0c0c]/80 bg-white/80 backdrop-blur-md border-l dark:border-white/8 border-black/8 z-30 flex-col items-center justify-center py-6 transition-colors duration-300">
      <div className="flex flex-col items-center gap-3.5 sm:gap-4">
        {/* 1. LinkedIn */}
        <a
          href={linkedInItem.href}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn Profile"
          className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/8 border-black/8 border dark:hover:border-white/20 hover:border-black/20 dark:hover:bg-white/10 hover:bg-black/10 flex items-center justify-center dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black transition-all duration-200 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>

          {/* Desktop Tooltip */}
          <span className="hidden sm:block pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
            LinkedIn
          </span>
        </a>

        {/* 2. Theme Switcher with animation */}
        <ThemeSwitcher />

        {/* 3. Download Resume */}
        <a
          href={resumeItem.href}
          download="Vinit_Gite_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume"
          aria-label="Download Resume"
          className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/8 border-black/8 border dark:hover:border-white/20 hover:border-black/20 dark:hover:bg-white/10 hover:bg-black/10 flex items-center justify-center dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black transition-all duration-200 active:scale-95"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-110 group-hover:translate-y-0.5" />

          {/* Desktop Tooltip */}
          <span className="hidden sm:block pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
            Download Resume
          </span>
        </a>
      </div>
    </aside>
  );
}
