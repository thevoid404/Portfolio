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

      tl.from(".hero-orb", { scale: 0.8, opacity: 0, duration: 1.4, stagger: 0.15 })
        .from(".hero-badge", { y: 20, opacity: 0, duration: 0.8 }, "-=1")
        .from(
          ".hero-word-inner",
          {
            y: "110%",
            opacity: 0,
            duration: 1.1,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-title-line",
          { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.6"
        )
        .from(
          ".hero-intro",
          { y: 24, opacity: 0, duration: 0.9 },
          "-=0.5"
        )
        .from(
          ".hero-social",
          { y: 16, opacity: 0, duration: 0.7, stagger: 0.08 },
          "-=0.4"
        )
        .from(".hero-scroll", { opacity: 0, duration: 1 }, "-=0.2");
    },
    { scope: sectionRef }
  );

  const nameWords = splitWords(name);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-20"
      aria-label="Introduction"
    >
      <div className="hero-mesh" aria-hidden>
        <div className="hero-orb hero-orb-violet" />
        <div className="hero-orb hero-orb-cyan" />
        <div className="hero-orb hero-orb-slate" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(139,92,246,0.07) 0%, transparent 42%, rgba(34,211,238,0.05) 100%)",
          }}
        />
      </div>

      <div className="section-padding section-container relative z-10">
        <div className="hero-badge hero-badge-gradient mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs tracking-wider text-muted">
            {siteConfig.hero.availabilityBadge}
          </span>
        </div>

        <h1 className="max-w-5xl">
          <span className="sr-only">{name}</span>
          <span
            className="flex flex-wrap gap-x-[0.25em] gap-y-1 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-50"
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

        <div className="mt-6 overflow-hidden">
          <p className="hero-title-line hero-gradient-text text-[clamp(1.5rem,4vw,3rem)] font-medium tracking-tight">
            {siteConfig.title}
          </p>
        </div>

        <p className="hero-intro mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {siteConfig.intro}
        </p>

        <HeroSocialLinks className="hero-social mt-10" />
      </div>

      <div className="hero-scroll section-padding section-container absolute bottom-8 left-0 right-0 z-10 flex items-end justify-between">
        <span className="font-mono text-xs tracking-widest text-muted-subtle">
          Scroll to explore
        </span>
        <div className="flex h-12 w-6 items-start justify-center rounded-full border border-white/10 bg-white/[0.02] p-2">
          <span className="h-2 w-px animate-bounce bg-gradient-to-b from-violet-400 to-cyan-400" />
        </div>
      </div>
    </section>
  );
}
