export const personalInfo = {
  name: "Pragadesh V",
  greeting: "Hello I Am",
  role: "Experienced Web Developer",
  bio: "Experienced web developer from Tamil Nadu, India, with a passion for crafting seamless digital experiences and a proven track record.",
  avatar: "/avatar.png",
  email: "pragadesh@example.com",
  location: "Tamil Nadu, India",
  availability: "Open to new projects",
  statusBadge: "Available For Work",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "Local Time ( IST )",
};

export const stats = [
  { value: "52+", label: "Happy Clients" },
  { value: "6+", label: "Years of Experience" },
  { value: "40+", label: "Completed Tasks" },
  { value: "10+", label: "Awards Received" },
];

export const brandLogos = [
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

export const experiences = [
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

export const projects = [
  {
    title: "Velora UI Design System",
    description: "A dark-mode first component library featuring fluid motion, accessible primitives, and micro-interactions built with Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    title: "Chronos Analytics Dashboard",
    description: "Real-time telemetry and data visualization platform with customizable charts, high-frequency metrics, and sub-millisecond response rates.",
    tags: ["TypeScript", "Next.js", "Recharts"],
    year: "2024",
    link: "#",
    github: "#",
  },
  {
    title: "Synthetix AI Workspace",
    description: "Generative AI canvas interface for multimodal prompt chaining, markdown streaming, and node-based workflow orchestration.",
    tags: ["React", "WebSockets", "Vite"],
    year: "2023",
    link: "#",
    github: "#",
  },
];

export const contactInfo = {
  email: "pragadesh@example.com",
  location: "Tamil Nadu, India",
  availability: "Open to new projects",
};

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    platform: "instagram",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com",
    platform: "dribbble",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    platform: "twitter",
  },
];

export const navItems = [
  {
    to: "/",
    label: "About Me",
    shortLabel: "About",
    icon: "User",
  },
  {
    to: "/work",
    label: "Selected Work",
    shortLabel: "Work",
    icon: "Zap",
  },
  {
    to: "/contact",
    label: "Contact",
    shortLabel: "Contact",
    icon: "Mail",
  },
];

const portfolioData = {
  personalInfo,
  stats,
  brandLogos,
  experiences,
  projects,
  contactInfo,
  socialLinks,
  navItems,
};

export default portfolioData;
