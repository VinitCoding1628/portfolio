import React, { useRef, useEffect } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import RisingLines from "@/components/background/RisingLines";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { User, Zap, Mail } from "lucide-react";

export default function Layout() {
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

  // Scroll middle container to top on route change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white overflow-hidden font-sans select-none antialiased">
      {/* 1. RisingLines Background Layer - Stays persistent across routes */}
      <RisingLines
        lineCount={180}
        color="#737373"
        thickness={1}
        speed={10}
        heightMin={120}
        heightMax={370}
        opacityMin={0.12}
        opacityMax={0.5}
        direction="bottom-to-top"
      />

      {/* Subtle radial glow in the center */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(120,119,198,0.06),transparent_60%)]" />

      {/* 2. Fixed Outer Layout: TopBar */}
      <TopBar />

      {/* 3. Fixed Outer Layout: Left Sidebar (Desktop/Tablet) */}
      <div className="hidden sm:block">
        <LeftSidebar onScrollToTop={handleScrollToTop} />
      </div>

      {/* 4. Fixed Outer Layout: Right Sidebar (Desktop/Tablet) */}
      <div className="hidden sm:block">
        <RightSidebar />
      </div>

      {/* 5. Mobile Navigation Bar (Bottom on small screens) */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0c0c0c]/90 backdrop-blur-lg border-t border-white/10 z-40 flex items-center justify-around px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors ${
              isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"
            }`
          }
        >
          <User className="w-5 h-5" />
          <span>About</span>
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors ${
              isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"
            }`
          }
        >
          <Zap className="w-5 h-5" />
          <span>Work</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors ${
              isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"
            }`
          }
        >
          <Mail className="w-5 h-5" />
          <span>Contact</span>
        </NavLink>
      </nav>

      {/* 6. Middle Part: ONLY THIS CONTAINER SCROLLS AND CHANGES CONTENT */}
      <main
        ref={scrollContainerRef}
        className="fixed top-16 bottom-16 sm:bottom-0 left-0 right-0 sm:left-20 sm:right-20 overflow-y-auto overflow-x-hidden custom-scrollbar z-10"
      >
        <div className="min-h-full w-full max-w-4xl mx-auto px-4 py-8 sm:px-8 sm:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
