import React from "react";
import { personalInfo } from "@/data/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full dark:bg-[#0c0c0c]/80 bg-white/80 backdrop-blur-md border-t dark:border-white/8 border-black/8 z-20 transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm dark:text-zinc-400 text-zinc-600">
        <div>
          @{year}, All Rights Reserved
        </div>
        <div className="dark:text-zinc-200 text-zinc-700 font-medium">
          Developed By <span className="dark:text-white text-zinc-900 font-semibold">{personalInfo.name || "Vinit Gite"}</span>
        </div>
      </div>
    </footer>
  );
}
