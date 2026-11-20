"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "group relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300",
        "border-[#DCE5E0] bg-[#F1F6F3] text-[#1A2E27] hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729]",
        "dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/40 dark:hover:text-[#34A885] dark:hover:shadow-[0_0_20px_rgba(18,94,71,0.3)]",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>

      {/* Sun Icon (rendered when light) */}
      <svg
        className={cn(
          "h-4 w-4 transition-transform duration-300",
          isDark ? "hidden scale-0" : "block scale-100 text-[#063729]"
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>

      {/* Moon Icon (rendered when dark) */}
      <svg
        className={cn(
          "h-4 w-4 transition-transform duration-300",
          isDark
            ? "block scale-100 text-[#34A885] group-hover:text-emerald-200"
            : "hidden scale-0"
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
