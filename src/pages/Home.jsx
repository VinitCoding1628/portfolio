import React from "react";
import { Link } from "react-router-dom";
import { Mail, Calendar, Briefcase, ExternalLink } from "lucide-react";
import { Marquee } from "@/components/velora/marquee";

export default function Home() {
  const stats = [
    { value: "52+", label: "Happy Clients" },
    { value: "6+", label: "Years of Experience" },
    { value: "40+", label: "Completed Tasks" },
    { value: "10+", label: "Awards Received" },
  ];

  const brandLogos = [
    "Discord",
    "Dribbble",
    "Facebook",
    "Pinterest",
    "Snapchat",
    "Spotify",
    "TikTok",
    "GitHub",
    "Framer",
  ];

  const experiences = [
    {
      role: "Lead Frontend Engineer",
      company: "Velora Labs",
      period: "2023 - Present",
      description: "Architecting high-performance React applications, micro-frontends, and modern interaction libraries.",
    },
    {
      role: "Senior UI/UX Developer",
      company: "Digital Forge",
      period: "2021 - 2023",
      description: "Designed responsive interfaces and scalable design systems for global SaaS clients.",
    },
    {
      role: "Web Application Developer",
      company: "Nexus Technologies",
      period: "2019 - 2021",
      description: "Built performant full-stack features, optimized Core Web Vitals, and crafted interactive motion designs.",
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Hero Profile Card */}
      <section className="relative rounded-3xl bg-zinc-950/70 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          {/* Avatar with subtle glow & outline matching screenshot */}
          <div className="relative group shrink-0">
            <div className="w-44 h-48 sm:w-52 sm:h-56 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 p-2 shadow-2xl">
              <img
                src="/avatar.png"
                alt="Pragadesh V"
                className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio & Intro Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-300/90 tracking-wide">
              <span>👋</span> Hello I Am
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Pragadesh V
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Experienced web developer from Tamil Nadu, India, with a passion for
              crafting seamless digital experiences and a proven track record.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all duration-200 shadow-md hover:shadow-white/5 active:scale-95"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>EMAIL ME</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all duration-200 shadow-md hover:shadow-white/5 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span>SCHEDULE CALL</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Marquee */}
      <section className="relative py-2 border-y border-white/[0.06] overflow-hidden">
        <Marquee repeat={3} pauseOnHover className="[--duration:25s] [--gap:3rem]">
          {brandLogos.map((brand, idx) => (
            <span
              key={idx}
              className="text-sm font-semibold tracking-wider text-zinc-500 hover:text-zinc-300 transition-colors uppercase select-none px-4"
            >
              {brand}
            </span>
          ))}
        </Marquee>
      </section>

      {/* 3. Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-4 sm:p-5 rounded-2xl bg-zinc-950/40 border border-white/[0.06] backdrop-blur-sm hover:border-white/10 transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* 4. Experience Section */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 text-zinc-300" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            My Experience
          </h2>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-950/50 border border-white/[0.06] hover:border-white/15 transition-all group backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                <h3 className="text-base font-semibold text-white group-hover:text-zinc-200">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <div className="text-xs font-medium text-zinc-400 mb-2">
                {exp.company}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
