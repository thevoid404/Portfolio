"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type ExperienceItem = {
  id: string;
  name: string;
  role: string;
  company: string;
  badge: string;
  period: string;
  description: string;
  bullets: string[];
  liveUrl?: string;
  linkLabel?: string;
  kaggleUrl?: string;
  certificateUrl?: string;
  isAmber?: boolean;
};

const experienceItems: ExperienceItem[] = [
  {
    id: "aria",
    name: "Aria",
    role: "Full-Stack & AI Engineer · Co-Founder",
    company: "Autonomous AI & Commerce Operations Platform",
    badge: "Ongoing",
    period: "2026 — Present",
    description:
      "Architecting autonomous AI customer support and commerce operations across Next.js frontend, NestJS backend, Redis state caching, and LangGraph agent orchestration.",
    bullets: [
      "Multi-agent tool execution pipelines with LangGraph & deterministic validation",
      "Real-time bidirectional WebSocket event streams with Socket.io & Redis cache",
      "Containerized Docker microservices paired with relational PostgreSQL schemas",
    ],
    liveUrl: "https://aria-autonomous-agent-puce.vercel.app/",
    linkLabel: "Live Platform ↗",
    isAmber: false,
  },
  {
    id: "nexus-studio",
    name: "Nexus Studio",
    role: "Frontend Engineer · Co-Founder",
    company: "Digital Product & Web Studio",
    badge: "Ongoing",
    period: "2026 — Present",
    description:
      "Designing and shipping high-craft modern web experiences for brands, startups, and high-performance products.",
    bullets: [
      "Frontend motion craft, responsive layouts & interactive design systems with GSAP",
      "Sub-second load times and 98+ Lighthouse performance scores across client builds",
      "Translating product identities into memorable, high-conversion digital platforms",
    ],
    liveUrl: "https://digital-agency-gamma-lac.vercel.app/",
    linkLabel: "Live Studio ↗",
    isAmber: false,
  },
  {
    id: "react-datathon",
    name: "REACT 2026 Datathon",
    role: "4th Place Finalist",
    company: "IEEE SEU Student Branch · Temporal Fraud Detection",
    badge: "Competition · Sep 2026",
    period: "Sep 2026",
    description:
      "Placed 4th nationally in a temporal fraud detection datathon—predicting fraud probability from raw chronological payment streams with zero pre-built historical features.",
    bullets: [
      "Engineered strictly leakage-safe, past-only behavioral signals across customer, device, merchant, location, and entity-relationship patterns",
      "Built time-aware validation pipelines instead of random K-fold to prevent temporal and target leakage across sequential transactions",
      "Optimized calibrated probability rankings for PR-AUC (Average Precision) under severe ~1.5–2% fraud class imbalance",
    ],
    kaggleUrl:
      "https://www.kaggle.com/competitions/react-2026-datathon/leaderboard",
    certificateUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7504212660033589248/",
    isAmber: true,
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const section = sectionRef.current;
      const timeline = timelineRef.current;
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

      // Scrubbed Vertical Deep-Emerald Timeline Progress Beam
      if (timeline) {
        gsap.fromTo(
          ".experience-timeline-beam",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timeline,
              start: "top 75%",
              end: "bottom 75%",
              scrub: true,
            },
          }
        );
      }

      // Staggered Cards Entrance (React-19 safe, no stuck opacity)
      gsap.fromTo(
        ".experience-timeline-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timeline || section,
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
      id="experience"
      ref={sectionRef}
      className="section-accent-glow section-accent-ventures relative z-10 overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="section-padding section-container">
        {/* Section Heading */}
        <SectionHeading
          label="Experience"
          title="Experience & Building"
          description="Ventures I’m actively building and competitive engineering work."
          accent
        />

        {/* Natural-Scrolling Vertical Timeline Showcase */}
        <div
          ref={timelineRef}
          className="relative mt-10 sm:mt-12 pl-6 sm:pl-10 md:pl-12"
        >
          {/* Left Vertical Line Track */}
          <div className="pointer-events-none absolute left-2 sm:left-3.5 top-3 bottom-6 w-0.5 bg-[#DCE6E1] dark:bg-white/[0.08]">
            <div className="experience-timeline-beam h-full w-full origin-top bg-gradient-to-b from-[#0D4A38] via-[#115E47] to-[#187A5C] dark:from-[#0D4A38] dark:via-[#187A5C] dark:to-[#34A885]" />
          </div>

          {/* Stacked Timeline Cards */}
          <div className="space-y-8 sm:space-y-10">
            {experienceItems.map((item) => (
              <div key={item.id} className="relative">
                {/* Timeline Node Dot */}
                <div
                  className="pointer-events-none absolute -left-[21px] sm:-left-[27px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#0D4A38] shadow-md transition-colors group-hover:bg-[#187A5C] dark:border-[#050505] dark:bg-[#34A885]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-[#050505]" />
                </div>

                {/* Timeline Card */}
                <article className="experience-timeline-card group relative overflow-hidden rounded-2xl border border-[#DCE5E0] bg-white/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0E523D] dark:border-white/[0.10] dark:bg-[#101614]/95 dark:shadow-[inset_0_1px_0_0_rgba(52,211,153,0.12),0_12px_32px_-12px_rgba(0,0,0,0.75)] dark:hover:border-[#255C49]">
                  {/* Top Hairline Highlight */}
                  <div className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-emerald-400/25" />

                  {/* Header: Title, Short Role, Badge, Period */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E2EAE6] pb-4 dark:border-white/[0.06]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl font-bold tracking-tight text-[#0C1814] sm:text-2xl dark:text-zinc-50">
                          {item.name}
                        </h3>
                        <span className="font-mono text-xs text-[#7D938B] dark:text-zinc-500">
                          ·
                        </span>
                        <span className="font-sans text-sm font-medium text-[#0A4D38] dark:text-[#34A885]">
                          {item.role}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px]",
                          item.isAmber
                            ? "border border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-300"
                            : "border border-[#115E47]/30 bg-[#07291F]/10 text-[#063729] dark:border-[#146B51]/40 dark:bg-[#06241B]/60 dark:text-[#34A885]"
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            item.isAmber
                              ? "bg-amber-500"
                              : "bg-[#115E47] dark:bg-[#146B51] animate-pulse"
                          )}
                        />
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs text-[#7D938B] dark:text-muted-subtle">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-[#4A5D56] sm:text-base dark:text-zinc-300">
                    {item.description}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-[#4A5D56] sm:text-sm dark:text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#115E47] dark:bg-[#146B51]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links row */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#E2EAE6] pt-4 dark:border-white/[0.06]">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-4 py-1.5 font-sans text-xs font-medium text-[#ECFDF5] shadow-[0_4px_16px_-4px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_6px_20px_-3px_rgba(14,77,58,0.45)]"
                      >
                        {item.linkLabel || "Visit Live ↗"}
                      </a>
                    )}
                    {item.kaggleUrl && (
                      <a
                        href={item.kaggleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-4 py-1.5 font-sans text-xs font-medium text-[#ECFDF5] shadow-[0_4px_16px_-4px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_6px_20px_-3px_rgba(14,77,58,0.45)]"
                      >
                        Competition Leaderboard ↗
                      </a>
                    )}
                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-4 py-1.5 font-sans text-xs font-medium text-[#1A2E27] transition-colors hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/10 dark:bg-white/[0.04] dark:text-muted dark:hover:border-[#125E47] dark:hover:text-[#34A885]"
                      >
                        Award Verification ↗
                      </a>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
