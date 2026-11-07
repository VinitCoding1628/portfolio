import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/data";
import { useTheme } from "@/components/theme/ThemeContext";

function AnimatedVGLogo({ isDark }) {
  return (
    <div className="relative flex items-center justify-center mb-6">
      {/* Outer ambient glow */}
      <div
        className={`absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full pointer-events-none transition-all duration-700 ${
          isDark
            ? "bg-gradient-to-tr from-white/[0.08] to-zinc-500/[0.04] blur-2xl"
            : "bg-gradient-to-tr from-zinc-900/[0.07] to-black/[0.03] blur-2xl"
        }`}
      />

      {/* Slowly rotating orbital dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        className={`absolute w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border border-dashed pointer-events-none ${
          isDark ? "border-white/15" : "border-black/15"
        }`}
      />

      {/* Floating Emblem Badge */}
      <motion.div
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut",
        }}
        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center backdrop-blur-md border shadow-2xl transition-colors duration-300 ${
          isDark
            ? "bg-[#101014]/90 border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.65)]"
            : "bg-white/95 border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Subtle corner tech ticks */}
        <span
          className={`absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l ${
            isDark ? "border-white/40" : "border-black/30"
          }`}
        />
        <span
          className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r ${
            isDark ? "border-white/40" : "border-black/30"
          }`}
        />
        <span
          className={`absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l ${
            isDark ? "border-white/40" : "border-black/30"
          }`}
        />
        <span
          className={`absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r ${
            isDark ? "border-white/40" : "border-black/30"
          }`}
        />

        {/* Shimmering 'VG' Typography */}
        <motion.span
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.6,
            ease: "linear",
          }}
          style={{
            backgroundSize: "250% 100%",
          }}
          className={`font-black font-mono tracking-tighter text-3xl sm:text-4xl bg-clip-text text-transparent select-none ${
            isDark
              ? "bg-gradient-to-r from-zinc-500 via-white to-zinc-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              : "bg-gradient-to-r from-zinc-400 via-zinc-950 to-zinc-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          }`}
        >
          VG
        </motion.span>
      </motion.div>
    </div>
  );
}

export default function Preloader({ onComplete }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ENVIRONMENT");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Smooth, deliberate slow loading pacing (~3 seconds total)
      let step = 1;
      if (current < 22) {
        step = Math.random() > 0.4 ? 2 : 1;
        setStatusText("INITIALIZING ENVIRONMENT");
      } else if (current < 52) {
        step = Math.random() > 0.45 ? 1 : Math.random() > 0.75 ? 2 : 1;
        setStatusText("LOADING ASSETS & GRAPHICS");
      } else if (current < 82) {
        step = Math.random() > 0.4 ? 1 : Math.random() > 0.8 ? 2 : 1;
        setStatusText("PREPARING USER INTERFACE");
      } else if (current < 99) {
        step = 1;
        setStatusText("FINALIZING EXPERIENCE");
      }

      current = Math.min(100, current + step);
      setProgress(current);

      if (current >= 100) {
        setStatusText("WELCOME");
        clearInterval(interval);
        // Hold at 100% and WELCOME for a brief moment before curtain lifts
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  const nameLetters = (personalInfo.name || "Vinit Gite").split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className={`fixed inset-0 z-[99999] ${
        isDark ? "bg-[#080808] text-white" : "bg-[#f4f4f6] text-zinc-900"
      } flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none pointer-events-auto transition-colors duration-300`}
    >
      {/* Background Ambient Radial Glow */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-[radial-gradient(circle_at_50%_45%,rgba(120,119,198,0.12),transparent_65%)]"
            : "bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.04),transparent_65%)]"
        }`}
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 font-mono text-[11px] sm:text-xs tracking-widest dark:text-zinc-300 text-zinc-700 uppercase backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.statusBadge || "Available For Work"}</span>
        </div>

        <div className="font-mono text-[11px] sm:text-xs tracking-widest dark:text-zinc-500 text-zinc-400 uppercase">
          PORTFOLIO • 2026
        </div>
      </div>

      {/* Center Hero: Animated 'VG' Shimmer Emblem + Staggered Name */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
        {/* Animated VG Shimmer Logo */}
        <AnimatedVGLogo isDark={isDark} />

        {/* Animated Staggered Name Reveal */}
        <div className="flex items-center justify-center overflow-hidden py-1">
          {nameLetters.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 60, opacity: 0, rotateX: -45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + idx * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase inline-block ${
                isDark
                  ? "text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                  : "text-zinc-900 drop-shadow-[0_4px_15px_rgba(0,0,0,0.06)]"
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Role Subtitle & Subtle Separator with Shimmering Sheen */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mt-3 text-xs sm:text-sm font-mono tracking-widest uppercase"
        >
          <span className="h-px w-8 sm:w-12 dark:bg-gradient-to-r dark:from-transparent dark:to-zinc-600 bg-gradient-to-r from-transparent to-zinc-400" />
          <motion.span
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
            className={`bg-clip-text text-transparent font-medium ${
              isDark
                ? "bg-gradient-to-r from-zinc-400 via-white to-zinc-400"
                : "bg-gradient-to-r from-zinc-600 via-zinc-950 to-zinc-600"
            }`}
          >
            {personalInfo.role || "Frontend Developer"}
          </motion.span>
          <span className="h-px w-8 sm:w-12 dark:bg-gradient-to-l dark:from-transparent dark:to-zinc-600 bg-gradient-to-l from-transparent to-zinc-400" />
        </motion.div>
      </div>

      {/* Bottom Section: Status & Percentage Counter & Theme-based Progress Line */}
      <div className="relative z-10 w-full max-w-xl mx-auto space-y-3">
        <div className="flex items-end justify-between font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full dark:bg-emerald-400 bg-emerald-500 animate-pulse" />
            <span className="text-xs tracking-wider dark:text-zinc-400 text-zinc-600 uppercase">
              {statusText}
            </span>
          </div>
          <div className="text-3xl sm:text-5xl font-extrabold tracking-tighter dark:text-white text-zinc-900 tabular-nums">
            {progress}
            <span className="text-sm sm:text-xl dark:text-zinc-500 text-zinc-400 ml-1 font-mono">
              %
            </span>
          </div>
        </div>

        {/* Progress Bar Track (Themed) */}
        <div className="relative w-full h-1.5 dark:bg-zinc-800/80 bg-zinc-200 rounded-full overflow-hidden border dark:border-white/5 border-black/5">
          <motion.div
            className={`absolute top-0 bottom-0 left-0 rounded-full ${
              isDark
                ? "bg-gradient-to-r from-zinc-500 via-zinc-200 to-white"
                : "bg-gradient-to-r from-zinc-600 via-zinc-800 to-zinc-950"
            }`}
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.08 }}
          />
          {/* Subtle Glowing Leading Light */}
          <div
            className={`absolute top-0 bottom-0 w-8 blur-xs transition-all duration-75 ${
              isDark ? "bg-white/90" : "bg-black/60"
            }`}
            style={{ left: `calc(${progress}% - 16px)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
