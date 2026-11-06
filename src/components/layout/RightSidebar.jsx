import React from "react";

export default function RightSidebar() {
  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.53 2.5a18.44 18.44 0 0 1 7.43 18.73" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-4 h-4 fill-currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-24 sm:w-20 bg-[#0c0c0c]/80 backdrop-blur-md border-l border-white/[0.08] z-30 flex flex-col items-center justify-between py-6">
      {/* Centered Social Links */}
      <div className="my-auto flex flex-col items-center gap-3">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            className="group relative w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <span className="transition-transform duration-200 group-hover:scale-110">
              {item.icon}
            </span>

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-50">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
