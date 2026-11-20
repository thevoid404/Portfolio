"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { splitWords } from "@/lib/utils";
import { HeroSocialLinks } from "@/components/ui/HeroSocialLinks";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const name = siteConfig.name;

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

      <div className="section-padding section-container relative z-10 max-w-5xl">
        <div className="max-w-4xl">
          <div className="hero-badge mb-8 inline-block">
            <div className="hero-float-badge inline-flex items-center gap-2 rounded-full border border-[#B7E4CE] bg-[#EBF7F1] px-4 py-2 dark:border-emerald-500/25 dark:bg-emerald-500/[0.08] dark:shadow-[0_0_20px_-4px_rgba(16,185,129,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
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

          <HeroSocialLinks className="hero-social mt-8" />
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
