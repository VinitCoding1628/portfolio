import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Calendar,
  Briefcase,
  Zap,
  Code2,
  Palette,
  LayoutDashboard,
  BrainCircuit,
  Plug,
  Gauge,
  Globe,
  Layout,
  TrendingUp,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { Marquee } from "@/components/velora/marquee";
import {
  personalInfo,
  stats,
  techStack,
  experiences,
  services,
  projects,
} from "@/data/data";
import DecryptedText from "@/components/DecryptedText";
import { useTheme } from "@/components/theme/ThemeContext";
import { usePreload } from "@/context/PreloadContext";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";
import "../App.css";

const serviceIconMap = {
  Code2,
  Palette,
  LayoutDashboard,
  BrainCircuit,
  Plug,
  Gauge,
  Globe,
  Layout,
  TrendingUp,
  Zap,
};

function ProjectPreview({ project, index }) {
  const [imgError, setImgError] = useState(false);

  if (project.image && !imgError) {
    return (
      <div className="w-full h-full min-h-55 bg-zinc-900 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }

  // Visual Mockup matching the screenshot previews
  const isDark = index % 2 === 0;
  return isDark ? (
    <div className="w-full h-full relative overflow-hidden bg-linear-to-br from-[#0e0a24] via-[#15103a] to-[#080614] p-4 flex items-center justify-center">
      <div className="absolute -top-10 -left-10 w-36 h-36 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />

      {/* Mini Dark UI Layout Mockup */}
      <div className="relative w-full h-full flex gap-3 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
        <div className="w-2/5 h-full rounded-xl bg-zinc-900/90 border border-white/10 p-2.5 space-y-2 shadow-2xl">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xs font-bold text-purple-300">
            {project.title.charAt(0)}
          </div>
          <div className="h-2 w-3/4 bg-white/20 rounded" />
          <div className="h-1.5 w-full bg-white/10 rounded" />
          <div className="h-1.5 w-5/6 bg-white/10 rounded" />
          <div className="pt-2 grid grid-cols-2 gap-1.5">
            <div className="h-6 rounded bg-purple-600/30 border border-purple-500/20" />
            <div className="h-6 rounded bg-white/5 border border-white/10" />
          </div>
        </div>
        <div className="flex-1 h-full rounded-xl bg-zinc-950/80 border border-white/10 p-3 space-y-2.5 shadow-2xl">
          <div className="flex justify-between items-center">
            <div className="h-2.5 w-1/2 bg-white/30 rounded" />
            <div className="h-4 w-12 rounded-full bg-purple-500/20 border border-purple-500/30" />
          </div>
          <div className="h-14 rounded-lg bg-white/4 border border-white/8 p-2 flex items-end">
            <div className="flex gap-1 w-full items-end h-8">
              <div className="flex-1 bg-purple-500/40 h-4 rounded-t" />
              <div className="flex-1 bg-purple-500/70 h-7 rounded-t" />
              <div className="flex-1 bg-purple-500/30 h-3 rounded-t" />
              <div className="flex-1 bg-purple-500/90 h-8 rounded-t" />
              <div className="flex-1 bg-purple-500/50 h-5 rounded-t" />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-white/15 rounded" />
            <div className="h-1.5 w-4/5 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full relative overflow-hidden bg-linear-to-br from-[#ede9fe] via-[#f5f3ff] to-[#e0e7ff] p-4 flex items-center justify-center">
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-300/50 rounded-full blur-2xl pointer-events-none" />

      {/* Mini Light UI Layout Mockup */}
      <div className="relative w-full h-full flex gap-3 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
        <div className="w-2/5 h-full rounded-xl bg-white/95 border border-purple-200/80 p-2.5 space-y-2 shadow-xl">
          <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
            {project.title.charAt(0)}
          </div>
          <div className="h-2 w-3/4 bg-zinc-700 rounded" />
          <div className="h-1.5 w-full bg-zinc-300 rounded" />
          <div className="h-1.5 w-4/5 bg-zinc-200 rounded" />
          <div className="pt-2 h-7 rounded-lg bg-purple-50 border border-purple-200/60" />
        </div>
        <div className="flex-1 h-full rounded-xl bg-white/95 border border-purple-200/80 p-3 space-y-2.5 shadow-xl">
          <div className="flex justify-between items-center">
            <div className="h-2.5 w-2/5 bg-zinc-800 rounded" />
            <div className="h-4 w-10 rounded-full bg-purple-100 border border-purple-300" />
          </div>
          <div className="h-14 rounded-lg bg-purple-50/80 border border-purple-100 p-2 flex items-center justify-around">
            <div className="w-8 h-8 rounded-full bg-purple-600/20" />
            <div className="w-8 h-8 rounded-full bg-purple-600/30" />
            <div className="w-8 h-8 rounded-full bg-purple-600/40" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-zinc-300 rounded" />
            <div className="h-1.5 w-3/4 bg-zinc-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

const GRID_COLS = 8;
const GRID_ROWS = 9;

function PixelatedAvatar({ src, alt, className }) {
  const { isCompleted, hasAvatarAnimated, markAvatarAnimated } = usePreload();
  const [animationState, setAnimationState] = useState(
    hasAvatarAnimated ? "done" : "ready"
  );

  useEffect(() => {
    if (hasAvatarAnimated) {
      setAnimationState("done");
      return;
    }

    if (isCompleted && animationState === "ready") {
      // Trigger cube scattering once the preloader curtain starts unveiling the page
      const startTimer = setTimeout(() => {
        setAnimationState("animating");
      }, 350);

      return () => clearTimeout(startTimer);
    }
  }, [isCompleted, hasAvatarAnimated, animationState]);

  useEffect(() => {
    if (animationState === "animating") {
      // Once cubes dissolve, mark as animated to avoid re-triggering on route changes
      const finishTimer = setTimeout(() => {
        setAnimationState("done");
        markAvatarAnimated();
      }, 2100);

      return () => clearTimeout(finishTimer);
    }
  }, [animationState, markAvatarAnimated]);

  const pixels = useMemo(() => {
    const items = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        // Smooth diagonal wave with gentle random jitter
        const delay = r * 0.065 + c * 0.05 + Math.random() * 0.12;
        const rotateX = (Math.random() - 0.5) * 110;
        const rotateY = (Math.random() - 0.5) * 110;
        items.push({ id: `${r}-${c}`, r, c, delay, rotateX, rotateY });
      }
    }
    return items;
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={src}
          alt={alt}
          initial={{ opacity: 0.85, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={className}
        />
      </AnimatePresence>

      {/* Small pixelated cubes animation (only triggered when preloader is completed) */}
      {!hasAvatarAnimated && animationState !== "done" && (
        <div
          className="absolute inset-0 pointer-events-none z-20 p-0.5 gap-0.5"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
            perspective: 600,
          }}
        >
          {pixels.map((item) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              }}
              animate={
                animationState === "animating"
                  ? {
                      opacity: 0,
                      scale: 0.05,
                      rotateX: item.rotateX,
                      rotateY: item.rotateY,
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                    }
              }
              transition={{
                duration: 0.75,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformPerspective: 500,
                transformStyle: "preserve-3d",
              }}
              className={`w-full h-full rounded-xs border ${(item.r + item.c) % 2 === 0
                  ? "dark:bg-zinc-800 bg-zinc-200 dark:border-white/10 border-black/10"
                  : "dark:bg-zinc-900 bg-zinc-300 dark:border-white/5 border-black/5"
                } shadow-xs`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [isProjectsBtnHovered, setIsProjectsBtnHovered] = useState(false);
  const [isEmailBtnHovered, setIsEmailBtnHovered] = useState(false);
  const [isCallBtnHovered, setIsCallBtnHovered] = useState(false);
  const { theme } = useTheme();

  const avatarSrc =
    typeof personalInfo.avatar === "object"
      ? (theme === "light" ? personalInfo.avatar.light : personalInfo.avatar.dark)
      : (theme === "light" ? personalInfo.avatarLight : personalInfo.avatarDark) || personalInfo.avatar;

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Hero Profile Card */}
      <FadeIn as="section" className="relative rounded-3xl dark:bg-zinc-950/70 bg-white/80 border dark:border-white/8 border-black/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          {/* Avatar with subtle glow & outline matching screenshot */}
          <div className="relative group shrink-0">
            <div className="w-44 h-48 sm:w-52 sm:h-56 rounded-2xl overflow-hidden dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 p-2 shadow-2xl">
              <PixelatedAvatar
                src={avatarSrc}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] drop-shadow-[0_0_12px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio & Intro Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 text-base sm:text-sm font-semibold dark:text-gray-200 text-zinc-700 tracking-wide">
              <span className="wave-hand" aria-hidden="true">👋</span> {personalInfo.greeting}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight dark:text-white text-zinc-900">
              {personalInfo.name}
            </h1>

            <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Link
                to="/contact"
                onMouseEnter={() => setIsEmailBtnHovered(true)}
                onMouseLeave={() => setIsEmailBtnHovered(false)}
                className="group inline-flex items-center justify-center min-w-[145px] gap-2 px-5 py-2.5 rounded-xl dark:bg-zinc-900/90 bg-zinc-100 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white text-zinc-900 text-xs font-semibold uppercase tracking-wider border dark:border-white/10 border-zinc-300 dark:hover:border-white/20 hover:border-zinc-400 transition-all duration-200 shadow-md hover:shadow-black/5 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 shrink-0 dark:text-zinc-400 text-zinc-500 group-hover:scale-110 transition-transform" />
                <DecryptedText
                  text="EMAIL ME"
                  isHovered={isEmailBtnHovered}
                  animateOn="hover"
                  speed={35}
                  maxIterations={12}
                  sequential={false}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
                  className="text-xs font-semibold tracking-wider dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-black transition-colors"
                  encryptedClassName="text-xs font-semibold tracking-wider text-blue-500 dark:text-blue-400"
                  parentClassName="pointer-events-none"
                />
              </Link>

              <Link
                to="/contact"
                onMouseEnter={() => setIsCallBtnHovered(true)}
                onMouseLeave={() => setIsCallBtnHovered(false)}
                className="group inline-flex items-center justify-center min-w-[185px] gap-2 px-5 py-2.5 rounded-xl dark:bg-zinc-900/90 bg-zinc-100 dark:hover:bg-zinc-800 hover:bg-zinc-200 dark:text-white text-zinc-900 text-xs font-semibold uppercase tracking-wider border dark:border-white/10 border-zinc-300 dark:hover:border-white/20 hover:border-zinc-400 transition-all duration-200 shadow-md hover:shadow-black/5 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0 dark:text-zinc-400 text-zinc-500 group-hover:scale-110 transition-transform" />
                <DecryptedText
                  text="SCHEDULE CALL"
                  isHovered={isCallBtnHovered}
                  animateOn="hover"
                  speed={35}
                  maxIterations={12}
                  sequential={false}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
                  className="text-xs font-semibold tracking-wider dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-black transition-colors"
                  encryptedClassName="text-xs font-semibold tracking-wider text-blue-500 dark:text-blue-400"
                  parentClassName="pointer-events-none"
                />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 2. Brand Marquee */}
      <FadeIn as="section" delay={0.08} className="relative py-2 border-y dark:border-white/6 border-black/8 overflow-hidden">
        <Marquee repeat={3} pauseOnHover className="[--duration:25s] [--gap:3rem]">
          {techStack.map((brand, idx) => (
            <span
              key={idx}
              className="text-sm font-semibold tracking-wider dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-300 hover:text-zinc-700 transition-colors uppercase select-none px-4"
            >
              {brand}
            </span>
          ))}
        </Marquee>
      </FadeIn>

      {/* 3. Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 py-4">
        {stats.map((stat, idx) => (
          <FadeIn
            key={idx}
            delay={idx * 0.08}
            className="text-center p-4 sm:p-5 rounded-2xl dark:bg-zinc-950/40 bg-white/70 border dark:border-white/6 border-black/8 backdrop-blur-sm dark:hover:border-white/10 hover:border-black/15 transition-colors shadow-sm"
          >
            <div className="text-2xl sm:text-3xl font-extrabold dark:text-white text-zinc-900 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-500 mt-1 font-medium">
              {stat.label}
            </div>
          </FadeIn>
        ))}
      </section>

      {/* 5. Services Section */}
      <section className="space-y-6 pt-4">
        {/* Section Header */}
        <FadeIn className="space-y-2 border-b border-dashed dark:border-white/10 border-black/10 pb-6">
          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 dark:text-white text-zinc-900" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight dark:text-white text-zinc-900">
              My Services
            </h2>
          </div>
          <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, idx) => {
            const Icon = serviceIconMap[service.icon] || Zap;
            return (
              <FadeIn
                key={service.id || idx}
                delay={idx * 0.08}
                className="p-5 sm:p-6 rounded-2xl dark:bg-zinc-950/70 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-white/15 hover:border-black/15 transition-all duration-200 group backdrop-blur-md shadow-xl"
              >
                {/* Header: Icon Box + Service Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-xl dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 flex items-center justify-center shrink-0 shadow-inner dark:group-hover:border-white/20 group-hover:border-black/20 transition-colors">
                    <Icon className="w-5 h-5 dark:text-white text-zinc-900" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-zinc-900 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* 6. Creative Design Showcase (Projects Section) */}
      <section className="space-y-6 pt-4">
        {/* Section Header */}
        <FadeIn className="space-y-2 border-b border-dashed dark:border-white/10 border-black/10 pb-6">
          <div className="flex items-center gap-2.5">
            <Rocket className="w-5 h-5 dark:text-white text-zinc-900" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight dark:text-white text-zinc-900">
              Project Showcase
            </h2>
          </div>
          <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Explore a collection of my most innovative and visually stunning live projects.
          </p>
        </FadeIn>

        {/* 2 Projects List */}
        <div className="space-y-4 sm:space-y-5">
          {projects.slice(0, 2).map((project, idx) => {
            const domain =
              project.domain ||
              (project.liveUrl
                ? project.liveUrl
                  .replace(/^https?:\/\//, "")
                  .replace(/\/$/, "")
                : `${project.title.toLowerCase().replace(/\s+/g, "")}.com`);

            const metaText =
              project.meta ||
              [
                project.category || "Portfolio",
                project.pages || "4 Pages",
                project.theme || (idx % 2 === 0 ? "Dark Theme" : "Light Theme"),
              ].join("  •  ");

            return (
              <FadeIn
                key={project.id || idx}
                delay={idx * 0.1}
                className="group relative p-4 sm:p-5 md:p-6 rounded-2xl dark:bg-zinc-950/70 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-white/15 hover:border-black/15 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col md:flex-row gap-5 md:gap-6"
              >
                {/* Left Side: Mockup / Preview Image */}
                <div className="w-full md:w-[46%] lg:w-[48%] h-56 sm:h-64 md:h-auto min-h-55 rounded-xl overflow-hidden dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 relative shrink-0 flex">
                  <ProjectPreview project={project} index={idx} />
                </div>

                {/* Right Side: Project Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    {/* Top Row: Title & Domain Link Pill */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-zinc-900 tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-200 transition-colors">
                        {project.title}
                      </h3>

                      <a
                        href={project.liveUrl || project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl dark:bg-zinc-900/90 bg-zinc-100 border dark:border-white/10 border-black/10 text-xs dark:text-zinc-300 text-zinc-700 font-mono dark:hover:text-white hover:text-black dark:hover:border-white/20 hover:border-black/20 dark:hover:bg-zinc-800 hover:bg-zinc-200 transition-all shrink-0"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 dark:text-zinc-400 text-zinc-500"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <span>{domain}</span>
                      </a>
                    </div>

                    {/* Metadata Line */}
                    <div className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-500 font-medium tracking-wide py-3 border-b dark:border-white/6 border-black/8">
                      {metaText}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed pt-3">
                    {project.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <FadeIn delay={0.12}>
          <Link
            to="/projects"
            onMouseEnter={() => setIsProjectsBtnHovered(true)}
            onMouseLeave={() => setIsProjectsBtnHovered(false)}
            className="w-full py-4 px-6 rounded-2xl dark:bg-zinc-950/70 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-white/20 hover:border-black/20 dark:hover:bg-zinc-900/70 hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-xl active:scale-[0.99]"
          >
            <DecryptedText
              text="VIEW ALL PROJECTS"
              isHovered={isProjectsBtnHovered}
              animateOn="hover"
              speed={35}
              maxIterations={12}
              sequential={false}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
              className="text-xs sm:text-sm font-semibold tracking-widest dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-black transition-colors"
              parentClassName="pointer-events-none"
            />
            <ArrowUpRight className="w-4 h-4 dark:text-zinc-400 text-zinc-500 dark:group-hover:text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </FadeIn>
      </section>

      {/* 4. Experience Section */}
      <section className="space-y-6 pt-4">
        <FadeIn className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 dark:text-zinc-300 text-zinc-700" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight dark:text-white text-zinc-900">
            My Experience
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.08}
              className="p-5 sm:p-6 rounded-2xl dark:bg-zinc-950/70 bg-white/80 border dark:border-white/8 border-black/8 dark:hover:border-white/15 hover:border-black/15 transition-all group backdrop-blur-md shadow-xl"
            >
              {/* Top Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                {/* Left: Logo & Company Information */}
                <div className="flex items-center gap-3.5">
                  {/* Company Logo Box */}
                  <div className="w-12 h-12 rounded-xl dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 flex items-center justify-center shrink-0 shadow-inner dark:group-hover:border-white/20 group-hover:border-black/20 transition-colors">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 object-contain"
                      />
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 dark:text-white text-zinc-800"
                      >
                        <path d="M4 6.5h4.2l3.8 5.5 3.8-5.5H20l-4.8 7.2h-6.4L4 6.5z" />
                        <path d="M9.5 14.8h5l-2.5 3.7-2.5-3.7z" />
                      </svg>
                    )}
                  </div>

                  {/* Company Name, Badge & Website */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base sm:text-lg font-bold dark:text-white text-zinc-900 tracking-tight">
                        {exp.company}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium dark:text-zinc-400 text-zinc-600 dark:bg-white/6 bg-zinc-200/70 border dark:border-white/8 border-black/8">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    {exp.website && (
                      <a
                        href={exp.websiteUrl || `https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-200 hover:text-zinc-900 transition-colors mt-0.5"
                      >
                        {exp.website}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Period */}
                <div className="text-base sm:text-lg font-bold dark:text-white text-zinc-900 tracking-tight sm:text-right shrink-0">
                  {exp.period}
                </div>
              </div>

              {/* Bottom Inset Card: Role & Description */}
              <div className="mt-4 p-4 sm:p-5 rounded-xl dark:bg-black/60 bg-zinc-100/80 border dark:border-white/5 border-black/8">
                <h4 className="text-sm sm:text-base font-semibold dark:text-white text-zinc-900 mb-2">
                  {exp.role}
                </h4>
                <div className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc list-inside space-y-1.5 marker:text-zinc-500">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}