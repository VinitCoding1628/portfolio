import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router-dom";
import { usePreload } from "@/context/PreloadContext";
import { useTheme } from "@/components/theme/ThemeContext";

const NUM_COLUMNS = 8;
const TRANSITION_EASE = [0.76, 0, 0.24, 1];

function StairsOverlay({ onFinish }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, simply unmount after a brief delay
  useEffect(() => {
    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        onFinish();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [shouldReduceMotion, onFinish]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-80 pointer-events-auto flex overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Leading Step Layer (Subtle theme tone: zinc-800 in dark, zinc-300 in light) */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">
        {[...Array(NUM_COLUMNS)].map((_, index) => (
          <div key={`lead-${index}`} className="relative h-full flex-1 overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: ["-100%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 0.82,
                times: [0, 0.42, 0.54, 1],
                delay: index * 0.035,
                ease: TRANSITION_EASE,
              }}
              className={`relative w-full h-full ${
                isDark ? "bg-zinc-800" : "bg-zinc-300"
              }`}
            />
          </div>
        ))}
      </div>

      {/* 2. Main Surface Curtain Layer (Pure Theme Colors, NO gradients) */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">
        {[...Array(NUM_COLUMNS)].map((_, index) => (
          <div
            key={`main-${index}`}
            className="relative h-full flex-1 overflow-hidden border-r dark:border-white/8 border-black/8 last:border-r-0"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: ["-100%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 0.82,
                times: [0, 0.42, 0.54, 1],
                delay: index * 0.035 + 0.045,
                ease: TRANSITION_EASE,
              }}
              onAnimationComplete={
                index === NUM_COLUMNS - 1 ? onFinish : undefined
              }
              className={`relative w-full h-full shadow-[-4px_0_20px_rgba(0,0,0,0.5)] ${
                isDark ? "bg-[#080808]" : "bg-[#f4f4f6]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StairsTransition() {
  const location = useLocation();
  const { isCompleted } = usePreload();
  const [activeTransitionKey, setActiveTransitionKey] = useState(null);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // If preloader is not completed yet, keep tracking current pathname without triggering
    if (!isCompleted) {
      prevPathRef.current = location.pathname;
      return;
    }

    // Only trigger transition when the pathname actually changes to a different route
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setActiveTransitionKey(location.pathname);
    }
  }, [location.pathname, isCompleted]);

  // If no transition is active, render nothing so zero overhead and zero interference
  if (!activeTransitionKey) {
    return null;
  }

  return (
    typeof document !== "undefined" &&
    createPortal(
      <StairsOverlay
        key={activeTransitionKey}
        onFinish={() => setActiveTransitionKey(null)}
      />,
      document.body
    )
  );
}
