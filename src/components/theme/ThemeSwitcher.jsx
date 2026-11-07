import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
      className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/8 border-black/8 border dark:hover:border-white/20 hover:border-black/20 dark:hover:bg-white/10 hover:bg-black/10 flex items-center justify-center dark:text-zinc-400 text-zinc-600 dark:hover:text-white hover:text-black transition-all duration-200 cursor-pointer active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-indigo-300 transition-transform group-hover:scale-110" />
          ) : (
            <Sun className="w-5 h-5 text-amber-400 transition-transform group-hover:scale-110" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Tooltip on desktop */}
      <span className="hidden sm:block pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md dark:bg-zinc-900 bg-white border dark:border-white/10 border-zinc-200 text-xs dark:text-white text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
