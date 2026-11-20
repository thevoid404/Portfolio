"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { splitWords } from "@/lib/utils";

interface ClickWave {
  id: number;
  x: number;
  y: number;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [waves, setWaves] = useState<ClickWave[]>([]);
  const name = siteConfig.name;

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    // Strictly restrict to Laptop / PC (disable on mobile, tablet, and touch screens)
    if (
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 || !window.matchMedia("(pointer: fine)").matches)
    ) {
      return;
    }

    // Ignore double-clicks on interactive elements (links, buttons, inputs)
    const target = e.target as HTMLElement | null;
    if (target?.closest("a, button, input, textarea, select")) {
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now() + Math.random();
    setWaves((prev) => [...prev.slice(-1), { id, x, y }]);
  };

  useGSAP(
    () => {
      registerGsapPlugins();
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-orb",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08 }
      )
        .fromTo(
          ".hero-badge",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.5"
        )
        .fromTo(
          ".hero-word-inner",
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-title-line",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-intro",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          "-=0.4"
        )
        .fromTo(
          ".hero-social",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
          "-=0.35"
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  const nameWords = splitWords(name);

  return (
    <section
      id="top"
      ref={sectionRef}
      onDoubleClick={handleDoubleClick}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14"
      aria-label="Introduction"
    >
      <div className="hero-mesh" aria-hidden>
        <div className="hero-orb hero-orb-violet" />
        <div className="hero-orb hero-orb-cyan" />
        <div className="hero-orb hero-orb-slate" />
        {/* Restrained light mode atmosphere wash */}
        <div
          className="absolute inset-0 opacity-40 dark:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,185,129,0.06) 0%, transparent 42%, rgba(14,77,58,0.04) 100%)",
          }}
        />
        {/* Preserved dark mode ambient wash */}
        <div
          className="absolute inset-0 hidden opacity-40 dark:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,78,59,0.2) 0%, transparent 42%, rgba(16,185,129,0.08) 100%)",
          }}
        />
        {/* Right-Side Sweeping Curved Hairline Arcs */}
        <div
          className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[520px] w-[520px] select-none opacity-80"
          aria-hidden="true"
        >
          <svg className="h-full w-full" viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="170" stroke="rgba(52, 211, 153, 0.09)" strokeWidth="1" strokeDasharray="3 6" />
            <circle cx="250" cy="250" r="220" stroke="rgba(52, 211, 153, 0.06)" strokeWidth="1" />
            <path d="M60 250 A190 190 0 0 1 440 250" stroke="rgba(52, 211, 153, 0.09)" strokeWidth="1" />
            <path d="M110 250 A140 140 0 0 1 390 250" stroke="rgba(52, 211, 153, 0.08)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* On-Demand Double-Click Emerald Waves (Strictly Laptop/PC - Zero Idle GPU Cost) */}
      {waves.length > 0 && (
        <div
          className="pointer-events-none absolute inset-0 hidden select-none overflow-hidden lg:block"
          aria-hidden="true"
        >
          {waves.map((wave) => (
            <div
              key={wave.id}
              className="hero-click-wave pointer-events-none absolute select-none will-change-[transform,opacity]"
              style={{ left: `${wave.x}px`, top: `${wave.y}px` }}
              onAnimationEnd={() => {
                setWaves((prev) => prev.filter((w) => w.id !== wave.id));
              }}
            />
          ))}
        </div>
      )}

      <div className="section-padding section-container relative z-10 max-w-5xl">
        <div className="max-w-4xl">
          <div className="hero-badge mb-8 inline-block">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B7E4CE] bg-[#EBF7F1] px-4 py-2 dark:border-emerald-500/25 dark:bg-emerald-500/[0.08] dark:shadow-[0_0_20px_-4px_rgba(16,185,129,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs tracking-wider text-[#0A4D38] dark:text-emerald-300/90">
                {siteConfig.hero.availabilityBadge}
              </span>
            </div>
          </div>

          <h1>
            <span className="sr-only">{name}</span>
            <span
              className="flex flex-wrap gap-x-[0.25em] gap-y-1 text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-[#0C1814] dark:text-zinc-50 lg:whitespace-nowrap"
              aria-hidden
            >
              {nameWords.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="hero-word inline-block overflow-hidden"
                >
                  <span className="hero-word-inner inline-block">{word}</span>
                </span>
              ))}
            </span>
          </h1>

          <div className="mt-5 overflow-hidden">
            <p className="hero-title-line hero-gradient-text text-[clamp(1.35rem,3.2vw,2.5rem)] font-medium tracking-tight">
              {siteConfig.title}
            </p>
          </div>

          <p className="hero-intro mt-6 max-w-xl text-base leading-relaxed text-[#4A5D56] dark:text-muted sm:text-lg">
            {siteConfig.intro}
          </p>

          {/* Social Links with Official Vector Logos */}
          <div
            className="hero-social mt-8 flex flex-wrap items-center gap-3"
            role="group"
            aria-label="Social and contact links"
          >
            {/* GitHub */}
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-5 py-2.5 text-sm font-medium text-[#1A2E27] transition-all duration-300 hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/40 dark:hover:text-[#34A885]"
            >
              <svg
                className="h-[15px] w-[15px] shrink-0 text-[#0B221B]/80 transition-colors group-hover:text-[#074231] dark:text-zinc-300 dark:group-hover:text-emerald-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-5 py-2.5 text-sm font-medium text-[#1A2E27] transition-all duration-300 hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/40 dark:hover:text-[#34A885]"
            >
              <svg
                className="h-[15px] w-[15px] shrink-0 text-[#0B221B]/80 transition-colors group-hover:text-[#074231] dark:text-zinc-300 dark:group-hover:text-emerald-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-5 py-2.5 text-sm font-medium text-[#1A2E27] transition-all duration-300 hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/40 dark:hover:text-[#34A885]"
            >
              <svg
                className="h-[15px] w-[15px] shrink-0 text-[#0B221B]/80 transition-colors group-hover:text-[#074231] dark:text-zinc-300 dark:group-hover:text-emerald-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll section-padding section-container absolute bottom-6 left-0 right-0 z-10 flex items-end justify-between">
        <span className="font-mono text-xs tracking-widest text-[#7D938B] dark:text-muted-subtle">
          Scroll to explore
        </span>
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-[#DCE5E0] bg-[#F1F6F3] p-2 dark:border-white/10 dark:bg-white/[0.02]">
          <span className="h-2 w-px animate-bounce bg-gradient-to-b from-[#10B981] to-[#0E5A42] dark:from-emerald-400 dark:to-teal-300" />
        </div>
      </div>
    </section>
  );
}
