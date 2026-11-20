"use client";

import { siteConfig } from "@/config/site-data";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-10 border-t border-[#DCE6E1] py-8 dark:border-white/[0.08]">
      <div className="section-padding section-container flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
        {/* Left: Identity & Location */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[#4A5D56] dark:text-zinc-400 sm:justify-start">
          <span className="font-medium text-[#1A2E27] dark:text-zinc-300">
            © 2026 {siteConfig.name}
          </span>
          <span className="text-[#CBD5E1] dark:text-zinc-700">·</span>
          <span className="text-[#7D938B] dark:text-zinc-500">Dhaka, Bangladesh</span>
        </div>

        {/* Center / Right: Social Links + Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-[#4A5D56] dark:text-zinc-400">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#073B2C] dark:hover:text-emerald-300"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#073B2C] dark:hover:text-emerald-300"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#073B2C] dark:hover:text-emerald-300"
          >
            X
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-[#073B2C] dark:hover:text-emerald-300"
          >
            Email
          </a>
          <span className="hidden text-[#CBD5E1] dark:text-zinc-700 sm:inline">·</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex cursor-pointer items-center gap-1 font-mono text-[11px] text-[#7D938B] transition-colors hover:text-[#073B2C] dark:text-zinc-500 dark:hover:text-emerald-300"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <span
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
