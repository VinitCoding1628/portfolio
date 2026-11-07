import React from "react";
import { NavLink } from "react-router-dom";
import { User, Zap, Mail, ArrowUp } from "lucide-react";
import { navItems } from "@/data/data";

const iconMap = {
  User,
  Zap,
  Mail,
};

export default function LeftSidebar({ onScrollToTop }) {

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-24 sm:w-20 dark:bg-[#0c0c0c]/80 bg-white/80 backdrop-blur-md border-r dark:border-white/8 border-black/8 z-30 flex flex-col items-center justify-between py-6 transition-colors duration-300">
      {/* Center navigation buttons */}
      <div className="my-auto flex flex-col items-center gap-3">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] || User;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.label}
              className={({ isActive }) =>
                `group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "dark:bg-white/15 bg-zinc-900/10 dark:text-white text-zinc-900 dark:border-white/25 border-zinc-300 border shadow-lg dark:shadow-white/5 shadow-black/5"
                    : "dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-zinc-900 dark:hover:bg-white/10 hover:bg-black/5 dark:hover:border-white/10 hover:border-black/10 border border-transparent"
                }`
              }
            >
              <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />

              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md dark:bg-zinc-900 bg-white border dark:border-white/10 border-zinc-200 text-xs dark:text-white text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>

      {/* Bottom: Scroll to top button */}
      <button
        type="button"
        onClick={onScrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
        className="group relative w-10 h-10 rounded-xl flex items-center justify-center dark:text-zinc-500 text-zinc-400 dark:hover:text-white hover:text-zinc-900 dark:hover:bg-white/10 hover:bg-black/5 transition-all duration-200 border border-transparent dark:hover:border-white/10 hover:border-black/10"
      >
        <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md dark:bg-zinc-900 bg-white border dark:border-white/10 border-zinc-200 text-xs dark:text-white text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
          Scroll to Top
        </span>
      </button>
    </aside>
  );
}
