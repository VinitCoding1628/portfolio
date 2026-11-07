import React, { useRef, useEffect, useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import RisingLines from "@/components/background/RisingLines";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";
import { User, Zap, Mail, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navItems, socialLinks, personalInfo } from "@/data/data";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { useTheme } from "@/components/theme/ThemeContext";

const iconMap = {
  User,
  Zap,
  Mail,
};

export default function Layout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const linkedInItem = socialLinks.find((s) => s.platform === "linkedin") || {
    name: "LinkedIn",
    href: personalInfo.linkedin || "https://www.linkedin.com/in/vinitgite",
  };

  const resumeItem = socialLinks.find((s) => s.platform === "resume") || {
    name: "Download Resume",
    href: personalInfo.resumeUrl || "/Vinit_Gite_Resume.pdf",
    download: true,
  };

  // Ref for the scrollable middle container
  const scrollContainerRef = useRef(null);
  const location = useLocation();

  // Function to scroll the middle container to the top
  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Scroll middle container to top & close more options on route change
  useEffect(() => {
    setIsMoreOpen(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return (
    <div
      className={`relative min-h-screen w-full ${
        isDark ? "bg-[#080808] text-white" : "bg-[#f4f4f6] text-zinc-900"
      } overflow-hidden font-sans select-none antialiased transition-colors duration-300`}
    >
      {/* 1. RisingLines Background Layer - Stays persistent across routes */}
      <RisingLines
        lineCount={180}
        color={isDark ? "#737373" : "#94a3b8"}
        thickness={1}
        speed={10}
        heightMin={120}
        heightMax={370}
        opacityMin={isDark ? 0.12 : 0.2}
        opacityMax={isDark ? 0.5 : 0.6}
        direction="bottom-to-top"
      />

      {/* Subtle radial glow in the center */}
      <div
        className={`fixed inset-0 pointer-events-none z-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_50%_20%,rgba(120,119,198,0.06),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.08),transparent_60%)]"
        }`}
      />

      {/* 2. Fixed Outer Layout: TopBar */}
      <TopBar />

      {/* 3. Fixed Outer Layout: Left Sidebar (Desktop/Tablet) */}
      <div className="hidden sm:block">
        <LeftSidebar onScrollToTop={handleScrollToTop} />
      </div>

      {/* 4. Fixed Outer Layout: Right Sidebar (Desktop/Tablet) */}
      <RightSidebar />

      {/* Backdrop overlay for More options drawer on mobile */}
      {isMoreOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setIsMoreOpen(false)}
        />
      )}

      {/* More Options Drawer / Panel */}
      <AnimatePresence>
        {isMoreOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="sm:hidden fixed bottom-20 left-4 right-4 z-50 p-4 rounded-2xl dark:bg-[#111111]/95 bg-white/95 backdrop-blur-xl border dark:border-white/10 border-black/10 shadow-2xl space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b dark:border-white/8 border-black/8">
              <span className="text-xs font-semibold tracking-wider uppercase dark:text-zinc-400 text-zinc-600">
                More Options
              </span>
              <button
                type="button"
                onClick={() => setIsMoreOpen(false)}
                className="p-1 rounded-lg dark:text-zinc-400 text-zinc-500 hover:dark:text-white hover:text-black transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Right sidebar components inside More Options */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {/* 1. LinkedIn */}
              <a
                href={linkedInItem.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMoreOpen(false)}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/8 border-black/8 dark:hover:bg-white/10 hover:bg-black/10 transition-all active:scale-95"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center dark:text-zinc-300 text-zinc-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <span className="text-[11px] font-medium dark:text-zinc-300 text-zinc-700 text-center">
                  LinkedIn
                </span>
              </a>

              {/* 2. Theme Switcher */}
              <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/8 border-black/8 transition-all">
                <ThemeSwitcher />
                <span className="text-[11px] font-medium dark:text-zinc-300 text-zinc-700 text-center">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </span>
              </div>

              {/* 3. Download Resume */}
              <a
                href={resumeItem.href}
                download="Vinit_Gite_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMoreOpen(false)}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/8 border-black/8 dark:hover:bg-white/10 hover:bg-black/10 transition-all active:scale-95"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center dark:text-zinc-300 text-zinc-700">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium dark:text-zinc-300 text-zinc-700 text-center">
                  Resume
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Mobile Navigation Bar (Bottom on small screens) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 h-16 dark:bg-[#0c0c0c]/90 bg-white/90 backdrop-blur-lg border-t dark:border-white/10 border-black/10 z-40 flex items-center justify-around px-2 transition-colors duration-300">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] || User;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors ${
                  isActive
                    ? "dark:text-white text-zinc-900 font-semibold"
                    : "dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-zinc-900"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.shortLabel || item.label}</span>
            </NavLink>
          );
        })}

        {/* More options (Hamburger) button */}
        <button
          type="button"
          onClick={() => setIsMoreOpen((prev) => !prev)}
          className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors cursor-pointer ${
            isMoreOpen
              ? "dark:text-white text-zinc-900 font-semibold"
              : "dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-zinc-900"
          }`}
          aria-label="More options"
        >
          {isMoreOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span className="text-[11px]">More options</span>
        </button>
      </nav>

      {/* 6. Middle Part: ONLY THIS CONTAINER SCROLLS AND CHANGES CONTENT */}
      <main
        ref={scrollContainerRef}
        className="fixed top-16 bottom-16 sm:bottom-0 left-0 sm:left-20 right-0 sm:right-20 overflow-y-auto overflow-x-hidden custom-scrollbar z-10"
      >
        <div className="min-h-full w-full flex flex-col justify-between">
          <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 sm:px-8 sm:py-12">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
