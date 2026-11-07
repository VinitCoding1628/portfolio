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
    <aside className="fixed left-0 top-16 bottom-0 w-24 sm:w-20 bg-[#0c0c0c]/80 backdrop-blur-md border-r border-white/8 z-30 flex flex-col items-center justify-between py-6">
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
                    ? "bg-white/15 text-white border border-white/25 shadow-lg shadow-white/5"
                    : "text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/10 border border-transparent"
                }`
              }
            >
              <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />

              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
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
        className="group relative w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-200 border border-transparent hover:border-white/10"
      >
        <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
        <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
          Scroll to Top
        </span>
      </button>
    </aside>
  );
}
