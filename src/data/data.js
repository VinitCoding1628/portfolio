import coderevImg from "@/assets/images/coderev.png";
import summarizoImg from "@/assets/images/summarizo.png";
import xchangeoImg from "@/assets/images/xchangeo.png";
import chistatsLogo from "@/assets/images/chistats_logo.webp";

export const personalInfo = {
  name: "Vinit Gite",
  greeting: "Hello I Am",
  role: "Experienced Frontend Developer",
  bio: "Experienced frontend developer from Pune, Maharashtra, India, with a passion for crafting seamless digital experiences and a proven track record.",
  avatar: {
    light: "/light_profile.png",
    dark: "/dark_profile.png",
  },
  avatarLight: "/light_profile.png",
  avatarDark: "/dark_profile.png",
  email: "vinitgite1628@gmail.com",
  location: "Pune, Maharashtra, India",
  availability: "Open to new projects",
  statusBadge: "Available For Work",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "Local Time ( IST )",
};

export const stats = [
  { value: "14+", label: "Technologies Used" },
  { value: "2", label: "Years of Experience" },
  { value: "3+", label: "Projects Completed" },
];

export const techStack = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Vite",
  "Shadcn UI",
  "Node.js",
  "Figma",
  "Framer Motion",
  "Sass",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Framer",
];

export const experiences = [
  {
    role: "Associate Frontend Developer",
    company: "ChiStats",
    badge: "Tech Firm",
    website: "chistats.ai",
    websiteUrl: "https://chistats.ai/",
    period: "Apr, 2025 - July, 2026",
    logo: chistatsLogo,
    description: [
      "Built and optimized responsive UI components for data analytics applications, improving UI performance and development efficiency by 40%.",
      "Developed the Aquatech Dashboard using React.js and Bootstrap, integrating REST APIs for real-time monitoring, analytics, and interactive data visualization.",
      "Built FinGeni, an AI-powered financial chatbot interface using React.js and Material Tailwind, integrating APIs to deliver real-time financial insights and recommendations.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "ChiStats",
    badge: "Internship",
    website: "chistats.ai",
    websiteUrl: "https://chistats.ai/",
    period: "Jun, 2024 - Apr, 2025",
    logo: chistatsLogo,
    description: [
      "Developed responsive web interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS, building reusable components for dashboards and data-driven applications.",
      "Developed frontend workflows for JurisAssist, an AI-driven legal document analysis platform, and built a Sentiment Analysis interface with ZIP uploads and real-time loading states.",
      "Integrated REST APIs and implemented reusable component architecture, responsive design practices, and Git-based workflows to deliver maintainable and scalable interfaces.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CodeRev",
    subtitle: "AI-Powered Code Review Platform",
    meta: "AI  •  2 Pages  •  Dark Theme",
    description:
      "An AI-powered code review platform that analyzes source code, identifies potential issues, explains code quality problems, and provides intelligent code fixes.",
    category: "AI Application",
    image: coderevImg,
    liveUrl: "https://coderev-self.vercel.app/",
    githubUrl: "",
    featured: true,
    technologies: [
      "React 19",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Monaco Editor",
      "Google Gemini API",
      "React Router",
      "Motion",
      "shadcn/ui",
    ],
    features: [
      "AI-powered code analysis and explanations",
      "Automated code fixes and suggestions",
      "Support for 40+ programming languages",
      "Line-level issue detection and security insights",
      "Code quality scoring",
      "Custom editor themes",
      "Bring Your Own API Key (BYOK) support",
    ],
  },
  {
    id: 2,
    title: "Summarizo",
    subtitle: "AI-Powered Text Summarizer",
    meta: "Summarizer  •  2 Pages  •  Light Theme",
    description:
      "A modern AI-powered text summarization application that transforms lengthy articles and notes into clear, concise summaries using Google's Gemini API.",
    category: "AI Application",
    image: summarizoImg,
    liveUrl: "https://summarizo.vercel.app/",
    githubUrl: "",
    featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Google Gemini API",
      "React Router",
    ],
    features: [
      "AI-powered text summarization",
      "Live word and sentence counter",
      "Five free API usages with quota tracking",
      "Custom Gemini API key integration",
      "API key testing and local storage",
      "One-click summary copying",
      "Light and dark theme support",
    ],
  },
  {
    id: 3,
    title: "Xchangeo",
    subtitle: "Currency Converter & Exchange Tracker",
    meta: "Converter  •  2 Pages  •  Light Theme",
    description:
      "A responsive currency conversion application that provides worldwide currency exchange rates, historical rate comparisons, and interactive financial charts.",
    category: "Web Application",
    image: xchangeoImg,
    liveUrl: "https://xchangeo-currency-converter-app.vercel.app/",
    githubUrl: "",
    featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Material UI",
      "Frankfurter API",
      "Recharts",
      "React Router",
    ],
    features: [
      "Worldwide currency conversion",
      "Latest exchange rate information",
      "24-hour exchange rate changes",
      "Historical exchange rate charts",
      "Custom date range selection",
      "Currency pair selection",
      "One-click converted amount copying",
    ],
  },
];

export const contactInfo = {
  email: "vinitgite1628@gmail.com",
  location: "Pune, Maharashtra, India",
  availability: "Open to new projects",
  linkedin: "https://www.linkedin.com/in/vinitgite",
  resumeUrl: "/Vinit_Gite_Resume.pdf",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vinitgite",
    platform: "linkedin",
  },
  {
    name: "Theme",
    platform: "theme",
  },
  {
    name: "Download Resume",
    href: "/Vinit_Gite_Resume.pdf",
    platform: "resume",
    download: true,
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
    to: "/projects",
    label: "Projects",
    shortLabel: "Projects",
    icon: "Zap",
  },
  {
    to: "/contact",
    label: "Contact",
    shortLabel: "Contact",
    icon: "Mail",
  },
];

export const services = [
  {
    id: 1,
    title: "React.js Development",
    description:
      "Building modern, scalable, and responsive web applications using React.js and JavaScript.",
    icon: "Code2",
    technologies: ["React.js", "JavaScript", "Vite", "React Router"],
  },
  {
    id: 2,
    title: "UI Development & Figma to React",
    description:
      "Transforming Figma designs into pixel-perfect, responsive, and interactive user interfaces.",
    icon: "Palette",
    technologies: ["Figma", "Tailwind CSS", "shadcn/ui", "CSS3"],
  },
  {
    id: 3,
    title: "Dashboard Development",
    description:
      "Creating interactive analytics dashboards, admin panels, and data-driven interfaces.",
    icon: "LayoutDashboard",
    technologies: ["React.js", "ECharts", "Recharts", "REST APIs"],
  },
  {
    id: 4,
    title: "AI-Powered Web Applications",
    description:
      "Developing AI-powered applications with intelligent features, chat interfaces, and automated workflows.",
    icon: "BrainCircuit",
    technologies: ["React.js", "Gemini API", "Google GenAI SDK"],
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Integrating REST APIs to build dynamic applications with seamless data fetching and real-time interactions.",
    icon: "Plug",
    technologies: ["REST APIs", "JavaScript", "Postman", "React.js"],
  },
  {
    id: 6,
    title: "Website Optimization & Maintenance",
    description:
      "Improving frontend performance, fixing UI issues, and maintaining responsive, user-friendly applications.",
    icon: "Gauge",
    technologies: ["React.js", "JavaScript", "Git", "Vite"],
  },
];

export const stacks = [
  {
    name: "React",
    category: "Frontend Library",
    url: "https://react.dev",
    icon: "react",
  },
  {
    name: "Tailwind CSS",
    category: "Styling Framework",
    url: "https://tailwindcss.com",
    icon: "tailwind",
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "javascript",
  },
  {
    name: "Vite",
    category: "Build Tool",
    url: "https://vite.dev",
    icon: "vite",
  },
  {
    name: "React Router",
    category: "Routing Library",
    url: "https://reactrouter.com",
    icon: "reactrouter",
  },
  {
    name: "shadcn/ui",
    category: "Component Library",
    url: "https://ui.shadcn.com",
    icon: "shadcn",
  },
];

const portfolioData = {
  personalInfo,
  stats,
  techStack,
  experiences,
  projects,
  contactInfo,
  socialLinks,
  navItems,
  services,
  stacks,
};

export default portfolioData;

