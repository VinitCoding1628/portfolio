export const personalInfo = {
  name: "Vinit Gite",
  greeting: "Hello I Am",
  role: "Experienced Frontend Developer",
  bio: "Experienced frontend developer from Pune, Maharashtra, India, with a passion for crafting seamless digital experiences and a proven track record.",
  avatar: "/avatar.png",
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
    logo: 'src/assets/images/chistats_logo.webp',
    description: [
      "Contributed as an Assistant Frontend Developer by integrating AI-powered financial chatbot with React and Tailwind CSS, enhancing real-time data loading and monitoring.",
      "Designed and developed responsive UI components and best practice frameworks achieving 40% efficiency improvement.",
      "Implemented real-time monitoring dashboards for data visualization and analysis using BoTools and Dashboard technology, facilitating quicker decision making.",
    ],
  },
  {
    role: "Frontend Internship",
    company: "ChiStats",
    badge: "Tech Firm",
    logo: 'src/assets/images/chistats_logo.webp',
    website: "chistats.ai",
    websiteUrl: "https://chistats.ai/",
    period: "June, 2024 - March, 2025",
    description: "Designed responsive interfaces and scalable design systems for global SaaS clients.",
  },
];

export const projects = [
  {
    id: 1,
    title: "CodeRev",
    subtitle: "AI-Powered Code Review Platform",
    domain: "coderev.com",
    meta: "Portfolio  •  4 Pages  •  Dark Theme",
    description:
      "An AI-powered code review platform that analyzes source code, identifies potential issues, explains code quality problems, and provides intelligent code fixes.",
    category: "AI Application",
    image: "/projects/coderev.png",
    liveUrl: "https://coderev.com",
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
    domain: "summarizo.com",
    meta: "Fitness  •  5 Pages  •  Light Theme",
    description:
      "A modern AI-powered text summarization application that transforms lengthy articles and notes into clear, concise summaries using Google's Gemini API.",
    category: "AI Application",
    image: "/projects/summarizo.png",
    liveUrl: "https://summarizo.com",
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
    description:
      "A responsive currency conversion application that provides worldwide currency exchange rates, historical rate comparisons, and interactive financial charts.",
    category: "Web Application",
    image: "/projects/xchangeo.png",
    liveUrl: "",
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


const portfolioData = {
  personalInfo,
  stats,
  techStack,
  experiences,
  projects,
  contactInfo,
  socialLinks,
  navItems,
  services
};

export default portfolioData;

