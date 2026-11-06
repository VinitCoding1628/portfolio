import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/[0.08] z-30 flex items-center justify-between px-4 sm:px-6">
      {/* Left section: Avatar & Available badge */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          to="/"
          className="relative group block rounded-full p-[2px] bg-gradient-to-b from-white/20 to-white/5 hover:from-white/40 transition-all"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-zinc-900 border border-white/20">
            <img
              src="/avatar.png"
              alt="Pragadesh V"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Available For Work pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white/90 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
          </span>
          <span className="tracking-wide">Available For Work</span>
        </div>
      </div>

      {/* Right section: Local Time */}
      <div className="flex items-center gap-2 sm:gap-3 text-xs">
        <span className="text-white/40 font-mono tracking-wider hidden sm:inline">
          Local Time ( IST )
        </span>
        <div className="px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] font-mono font-medium text-white/90 text-xs tracking-wider shadow-inner">
          {time || "11:36:56"}
        </div>
      </div>
    </header>
  );
}
