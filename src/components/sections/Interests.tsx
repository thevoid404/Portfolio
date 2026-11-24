"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import {
  siteConfig,
  type ResearchFrontier,
} from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Geometric Micro-Chip / Circuit Node SVG motif for Edge AI
 */
function ChipMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <rect x="13" y="13" width="22" height="22" rx="3" strokeWidth="1.4" />
      <rect
        x="19"
        y="19"
        width="10"
        height="10"
        rx="1"
        fill="currentColor"
        fillOpacity="0.12"
        strokeWidth="1.2"
      />
      <path d="M6 18h7M6 24h7M6 30h7" />
      <path d="M35 18h7M35 24h7M35 30h7" />
      <path d="M18 6v7M24 6v7M30 6v7" />
      <path d="M18 35v7M24 35v7M30 35v7" />
      <circle cx="6" cy="18" r="1.2" fill="currentColor" />
      <circle cx="6" cy="24" r="1.2" fill="currentColor" />
      <circle cx="6" cy="30" r="1.2" fill="currentColor" />
      <circle cx="42" cy="18" r="1.2" fill="currentColor" />
      <circle cx="42" cy="24" r="1.2" fill="currentColor" />
      <circle cx="42" cy="30" r="1.2" fill="currentColor" />
      <circle cx="18" cy="6" r="1.2" fill="currentColor" />
      <circle cx="24" cy="6" r="1.2" fill="currentColor" />
      <circle cx="30" cy="6" r="1.2" fill="currentColor" />
      <circle cx="18" cy="42" r="1.2" fill="currentColor" />
      <circle cx="24" cy="42" r="1.2" fill="currentColor" />
      <circle cx="30" cy="42" r="1.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Decentralized Node-Ring / Constellation SVG motif for Federated Learning
 */
function ConstellationMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="16" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="24" cy="24" r="9" strokeDasharray="2 2" opacity="0.3" />
      <path
        d="M24 8L37 18M37 18L33 34M33 34L15 34M15 34L11 18M11 18L24 8"
        strokeDasharray="2 2"
        opacity="0.45"
      />
      <path d="M24 8L24 24M37 18L24 24M33 34L24 24M15 34L24 24M11 18L24 24" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="8" r="2.2" fill="currentColor" />
      <circle cx="37" cy="18" r="2.2" fill="currentColor" />
      <circle cx="33" cy="34" r="2.2" fill="currentColor" />
      <circle cx="15" cy="34" r="2.2" fill="currentColor" />
      <circle cx="11" cy="18" r="2.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Concentric Wave-Interference / Orbital SVG motif for Quantum Physics
 */
function QuantumMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-30 24 24)" />
      <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(30 24 24)" />
      <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(90 24 24)" />
      <circle cx="24" cy="24" r="2.8" fill="currentColor" />
      <circle cx="9" cy="15" r="1.8" fill="currentColor" />
      <circle cx="39" cy="33" r="1.8" fill="currentColor" />
      <circle cx="39" cy="15" r="1.8" fill="currentColor" />
    </svg>
  );
}

/**
 * Robotic Articulation & Sensor Node SVG motif for Embedded Systems
 */
function EmbeddedMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 40h24M18 40v-4h12v4" strokeWidth="1.4" />
      <path d="M24 36L18 24L30 14" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="11" r="5" strokeWidth="1.3" />
      <circle cx="34" cy="11" r="2" fill="currentColor" fillOpacity="0.3" />
      <path d="M41 8c2 2 2 4 0 6M44 6c3 3 3 7 0 10" strokeDasharray="1.5 1.5" />
      <circle cx="24" cy="36" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />
      <circle cx="18" cy="24" r="2.5" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />
      <circle cx="30" cy="14" r="2" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />
    </svg>
  );
}

function renderCornerMotif(motif: ResearchFrontier["motif"]) {
  const baseClass =
    "pointer-events-none absolute top-4 right-4 h-14 w-14 text-[#0E523D] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.22] opacity-[0.07] dark:text-[#34A885] dark:opacity-[0.13] dark:group-hover:opacity-[0.26]";

  if (motif === "chip") return <ChipMotif className={baseClass} />;
  if (motif === "constellation") return <ConstellationMotif className={baseClass} />;
  if (motif === "embedded") return <EmbeddedMotif className={baseClass} />;
  return <QuantumMotif className={baseClass} />;
}

export function Interests() {
  const sectionRef = useRef<HTMLElement>(null);
  const { interests } = siteConfig;

  useGSAP(
    () => {
      registerGsapPlugins();
      const section = sectionRef.current;
      if (!section) return;

      // Section Heading Reveal
      gsap.fromTo(
        ".section-heading-reveal",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Tier 1 Research Frontier Cards entrance
      gsap.fromTo(
        ".interest-frontier-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".interest-frontier-grid",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Tier 2 Active Engineering Craft Cards entrance
      gsap.fromTo(
        ".interest-craft-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".interest-craft-grid",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="interests"
      ref={sectionRef}
      className="section-accent-glow section-accent-interests relative z-10 overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="interests-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="Curiosity & Research"
          title={interests.headline}
          description={interests.description}
          accent
        />

        {/* 2-Tier Architectural Layout */}
        <div className="mt-8">
          {/* TIER 1: Featured Research Frontier Cards */}
          <div className="interest-frontier-grid grid grid-cols-1 gap-6 lg:grid-cols-3">
            {interests.frontiers.map((frontier) => {
              const isExploring = frontier.status === "Exploring";

              return (
                <article
                  key={frontier.id}
                  className={cn(
                    "interest-frontier-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7",
                    "bg-white/95 transition-transform duration-300 ease-out",
                    "border border-[#D4E2DC] shadow-[0_8px_30px_-10px_rgba(12,24,20,0.06)] hover:-translate-y-1 hover:border-[#0E523D]",
                    "dark:border-[#1E3B31]/80 dark:bg-[#101614]/95 dark:shadow-[inset_0_1px_0_0_rgba(52,211,153,0.12),0_12px_32px_-12px_rgba(0,0,0,0.75)] dark:hover:border-[#255C49]"
                  )}
                >
                  {/* Top Hairline Highlight */}
                  <div className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-emerald-400/25" />

                  {/* Corner Motif SVG */}
                  {renderCornerMotif(frontier.motif)}

                  {/* Top: Status Pill + Title + Summary */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-wider",
                          isExploring
                            ? "border border-[#0D4A38]/20 bg-[#063729]/[0.06] text-[#063729] dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300"
                            : "border border-teal-600/20 bg-teal-600/[0.06] text-teal-800 dark:border-teal-400/25 dark:bg-teal-400/10 dark:text-teal-300"
                        )}
                      >
                        {frontier.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#091713] transition-colors group-hover:text-[#063729] dark:text-white dark:group-hover:text-emerald-300">
                      {frontier.title}
                    </h3>

                    <p className="mt-2.5 text-[14px] leading-[1.6] text-[#4A5D56] dark:text-zinc-400">
                      {frontier.summary}
                    </p>
                  </div>

                  {/* Bottom: Hairline Divider + Exploration & Central Question */}
                  <div className="mt-6 border-t border-[#E2EAE6] pt-4 dark:border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#063729]/75 dark:text-emerald-400/80">
                        EXPLORATION
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-[13px] italic leading-snug text-[#1A2E27] dark:text-zinc-300">
                      “{frontier.centralQuestion}”
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* TIER 2: Compact Active Engineering Craft Cards */}
          <div className="mt-8 sm:mt-10">
            <div className="mb-4 flex items-center gap-2 px-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0E5A42] dark:bg-emerald-400" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#063729] dark:text-[#34A885]">
                Active Engineering Craft
              </h3>
            </div>

            <div className="interest-craft-grid grid grid-cols-1 gap-5 md:grid-cols-3">
              {interests.crafts.map((craft) => (
                <article
                  key={craft.id}
                  className={cn(
                    "interest-craft-card group relative flex flex-col justify-between overflow-hidden rounded-xl p-5",
                    "bg-white/95 transition-transform duration-300 ease-out",
                    "border border-[#DCE6E1] hover:-translate-y-1 hover:border-[#0E523D]/40",
                    "dark:border-[#1E3B31]/80 dark:bg-[#101614]/95 dark:shadow-[inset_0_1px_0_0_rgba(52,211,153,0.12),0_12px_32px_-12px_rgba(0,0,0,0.75)] dark:hover:border-[#255C49]"
                  )}
                >
                  {/* Top Hairline Highlight */}
                  <div className="pointer-events-none absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/15 to-transparent dark:via-emerald-400/20" />

                  <div>
                    {/* Status Dot + Tag */}
                    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#063729] dark:text-[#34A885]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0E5A42] animate-pulse dark:bg-emerald-400 will-change-[transform,opacity]" />
                      <span>{craft.status}</span>
                    </div>

                    <h4 className="mt-2.5 text-[16px] font-semibold tracking-[-0.015em] text-[#091713] transition-colors group-hover:text-[#063729] dark:text-zinc-100 dark:group-hover:text-emerald-300">
                      {craft.title}
                    </h4>

                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#4A5D56] dark:text-zinc-400">
                      {craft.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
