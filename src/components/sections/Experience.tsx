"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap-config";
import { processSteps } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type MilestoneItem = {
  id: string;
  index: string;
  name: string;
  shortRole: string;
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

const milestoneItems: MilestoneItem[] = [
  {
    id: "aria",
    index: "01",
    name: "Aria",
    shortRole: "Co-Founder & Full-Stack Engineer",
    role: "Co-Founder & Full-Stack Engineer — Aria",
    company: "Active Venture · Autonomous AI & Commerce Operations",
    badge: "Active Venture",
    period: "2024 — Present",
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
    index: "02",
    name: "Nexus Studio",
    shortRole: "Co-Founder",
    role: "Co-Founder — Nexus Studio",
    company: "Active Venture · Digital Product & Web Agency",
    badge: "Active Venture",
    period: "2024 — Present",
    description:
      "Running our digital web studio—designing and shipping high-craft modern web experiences for brands, startups, and high-performance products.",
    bullets: [
      "Frontend motion craft, responsive layouts & interactive design systems with GSAP",
      "Sub-second load times and 98+ Lighthouse performance scores across client builds",
      "Translating brand identities into memorable, high-conversion digital platforms",
    ],
    liveUrl: "https://digital-agency-gamma-lac.vercel.app/",
    linkLabel: "Live Studio ↗",
    isAmber: false,
  },
  {
    id: "ieee-datathon",
    index: "03",
    name: "IEEE Datathon",
    shortRole: "4th Place Finalist",
    role: "4th Place Finalist — IEEE Datathon",
    company: "IEEE National Competition · Machine Learning Track",
    badge: "National Finalist",
    period: "2024",
    description:
      "Placed 4th nationwide under IEEE, competing on end-to-end machine learning modeling pipelines and data analysis under strict competition constraints.",
    bullets: [
      "Built feature engineering & predictive modeling pipelines in Python and Scikit-learn",
      "Secured 4th place national standing against competitive engineering teams nationwide",
      "Conducted deep exploratory data analysis & model validation on complex competitive datasets",
    ],
    kaggleUrl: "https://www.kaggle.com",
    certificateUrl: "https://www.linkedin.com/in/ashraf-uddin-ahmed-anas/",
    isAmber: true,
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const detailCardRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  // Animate content change on activeIndex update
  useEffect(() => {
    activeIndexRef.current = activeIndex;
    if (contentInnerRef.current) {
      gsap.fromTo(
        contentInnerRef.current,
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  useGSAP(
    () => {
      registerGsapPlugins();

      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      // Desktop: Scroll-Lock sticky progression across 280vh track
      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          onUpdate: (self) => {
            const p = self.progress;
            let nextIndex = 0;
            if (p >= 0.66) {
              nextIndex = 2;
            } else if (p >= 0.33) {
              nextIndex = 1;
            } else {
              nextIndex = 0;
            }
            if (nextIndex !== activeIndexRef.current) {
              activeIndexRef.current = nextIndex;
              setActiveIndex(nextIndex);
            }
          },
        });

        return () => trigger.kill();
      });

      // Process section (How I work)
      const process = processRef.current;
      if (process) {
        gsap.fromTo(
          ".process-beam-progress",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: process,
              start: "top 88%",
              end: "bottom 75%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          ".process-card",
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: process,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const handleMilestoneClick = (index: number) => {
    setActiveIndex(index);
    activeIndexRef.current = index;

    if (typeof window !== "undefined" && window.innerWidth >= 1024 && trackRef.current) {
      const track = trackRef.current;
      const trackRect = track.getBoundingClientRect();
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const trackTop = trackRect.top + currentScroll;
      const scrollableDistance = track.offsetHeight - window.innerHeight;

      // Center within the 3 active segments
      const progressTargets = [0.08, 0.5, 0.92];
      const targetY = trackTop + scrollableDistance * progressTargets[index];

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const activeMilestone = milestoneItems[activeIndex];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-accent-glow section-accent-ventures relative z-10"
      aria-labelledby="experience-heading"
    >
      {/* Ventures & Milestones: Scroll-Locked Split Showcase */}
      <div ref={trackRef} className="relative lg:h-[280vh]">
        {/* Sticky Viewport Container */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden py-14 sm:py-16 lg:py-0">
          <div className="section-padding section-container w-full">
            {/* Section Header */}
            <div className="mb-8 lg:mb-10">
              <SectionHeading
                label="Milestones"
                title="Ventures & Milestones"
                description="Co-founded active ventures and competitive engineering achievements."
                className="mb-0 max-w-2xl"
              />
            </div>

            {/* Split Showcase Grid */}
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Compact Milestone List with Transferring Deep-Green Border */}
              <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-3 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:gap-3.5">
                {milestoneItems.map((item, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleMilestoneClick(idx)}
                      className={cn(
                        "group relative flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 w-full cursor-pointer",
                        isActive
                          ? "border-[#115E47] bg-[#07291F]/10 shadow-[0_4px_20px_-4px_rgba(17,94,71,0.25)] opacity-100 dark:border-[#146B51] dark:bg-[#06241B]/60 dark:shadow-[0_4px_24px_-4px_rgba(20,107,81,0.35)]"
                          : "border-transparent bg-transparent opacity-50 hover:opacity-85 hover:border-[#0D4A38]/30 dark:hover:border-white/10"
                      )}
                      aria-pressed={isActive}
                      aria-label={`View details for ${item.name}`}
                    >
                      {/* Numeric Index */}
                      <span
                        className={cn(
                          "font-mono text-xs font-semibold tracking-wider transition-colors",
                          isActive
                            ? "text-[#063729] dark:text-[#34A885]"
                            : "text-[#7D938B] dark:text-muted-subtle"
                        )}
                      >
                        {item.index}
                      </span>

                      {/* Title & Short Tag */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="truncate text-base font-semibold tracking-tight text-[#0C1814] sm:text-lg dark:text-zinc-100">
                            {item.name}
                          </h4>
                          <span
                            className={cn(
                              "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px]",
                              item.isAmber
                                ? "border border-amber-400/30 bg-amber-400/10 text-amber-600 dark:text-amber-300"
                                : "border border-[#115E47]/30 bg-[#07291F]/10 text-[#063729] dark:border-[#146B51]/40 dark:bg-[#06241B]/60 dark:text-[#34A885]"
                            )}
                          >
                            <span
                              className={cn(
                                "h-1 w-1 rounded-full",
                                item.isAmber
                                  ? "bg-amber-500"
                                  : "bg-[#115E47] dark:bg-[#146B51] animate-pulse"
                              )}
                            />
                            {item.badge}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-xs text-[#4A5D56] dark:text-zinc-400">
                          {item.shortRole}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Compact Elevated Detail Box (Swaps Cleanly on Scroll) */}
              <div className="lg:col-span-7">
                <article
                  ref={detailCardRef}
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#0F523E]/60 bg-white/90 p-6 sm:p-8 lg:p-9 shadow-[0_12px_36px_-12px_rgba(4,28,21,0.18)] backdrop-blur-xl dark:border-[#125E47]/70 dark:bg-[#070B0A]/90 dark:shadow-[0_0_40px_-14px_rgba(11,74,55,0.4),inset_0_1px_0_0_rgba(20,105,79,0.3)]"
                >
                  {/* Top Hairline Highlight */}
                  <div className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0D4A38]/30 to-transparent dark:via-[#146B51]/40" />

                  {/* Subtle Ambient Radial Glow */}
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500"
                    style={{
                      background: activeMilestone.isAmber
                        ? "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 70%)",
                    }}
                    aria-hidden
                  />

                  {/* Inner Swappable Content */}
                  <div
                    ref={contentInnerRef}
                    className="relative z-10 flex flex-1 flex-col justify-between"
                  >
                    <div>
                      {/* Header Row: Status Badge + Period + Vertical Step Progress Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2EAE6] pb-4 dark:border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs",
                              activeMilestone.isAmber
                                ? "border-amber-400/30 bg-amber-400/10 text-amber-600 dark:text-amber-300"
                                : "border-[#115E47]/30 bg-[#07291F]/10 text-[#063729] dark:border-[#146B51]/40 dark:bg-[#06241B]/60 dark:text-[#34A885]"
                            )}
                          >
                            <span
                              className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                activeMilestone.isAmber
                                  ? "bg-amber-500"
                                  : "bg-[#115E47] dark:bg-[#146B51] animate-pulse"
                              )}
                            />
                            {activeMilestone.badge}
                          </span>
                          <span className="font-mono text-xs text-[#7D938B] dark:text-muted-subtle">
                            {activeMilestone.period}
                          </span>
                        </div>

                        {/* Step Progress Indicator */}
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-medium text-[#063729] dark:text-[#34A885]">
                            0{activeIndex + 1} / 03
                          </span>
                          <div className="h-1 w-16 overflow-hidden rounded-full bg-[#DCE5E0] dark:bg-white/10">
                            <div
                              className="h-full bg-gradient-to-r from-[#0D4A38] to-[#187A5C] transition-all duration-300"
                              style={{ width: `${((activeIndex + 1) / 3) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <div className="mt-5">
                        <h3
                          id="experience-heading"
                          className="text-xl font-bold tracking-tight text-[#0C1814] sm:text-2xl dark:text-zinc-50"
                        >
                          {activeMilestone.role}
                        </h3>
                        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#063729] dark:text-[#34A885]">
                          {activeMilestone.company}
                        </p>
                      </div>

                      {/* Concise 2-line summary */}
                      <p className="mt-3 text-sm leading-relaxed text-[#4A5D56] sm:text-base dark:text-zinc-300">
                        {activeMilestone.description}
                      </p>

                      {/* 2-3 Short Crisp Bullet Points */}
                      <ul className="mt-5 space-y-2.5">
                        {activeMilestone.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-xs leading-relaxed text-[#4A5D56] sm:text-sm dark:text-zinc-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#115E47] dark:bg-[#146B51]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links Row */}
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#E2EAE6] pt-5 dark:border-white/[0.06]">
                      {activeMilestone.liveUrl && (
                        <a
                          href={activeMilestone.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-4 py-2 font-mono text-xs font-medium text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]"
                        >
                          {activeMilestone.linkLabel || "Visit Live ↗"}
                        </a>
                      )}
                      {activeMilestone.kaggleUrl && (
                        <a
                          href={activeMilestone.kaggleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-4 py-2 font-mono text-xs font-medium text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]"
                        >
                          Kaggle Notebook ↗
                        </a>
                      )}
                      {activeMilestone.certificateUrl && (
                        <a
                          href={activeMilestone.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-4 py-2 font-mono text-xs font-medium text-[#1A2E27] transition-colors hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/10 dark:bg-white/[0.04] dark:text-muted dark:hover:border-[#125E47] dark:hover:text-[#34A885]"
                        >
                          Award / Verification ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "How I Work" Interactive Connected Workflow */}
      <div className="section-padding section-container pb-14 sm:pb-16 lg:pb-20">
        <div ref={processRef} className="mt-20 sm:mt-24 lg:mt-28">
          <SectionHeading
            label="Process"
            title="How I work"
            description="A disciplined engineering cadence from root problem discovery through containerized launch."
          />

          <div className="relative">
            {/* Connected Luminous Progress Line (Desktop) */}
            <div className="pointer-events-none absolute top-10 left-[8%] right-[8%] z-0 hidden h-[2px] bg-[#DCE5E0] lg:block dark:bg-white/[0.06]">
              <div className="process-beam-progress h-full origin-left bg-gradient-to-r from-[#0D4A38] via-[#115E47] to-[#187A5C] shadow-[0_0_12px_rgba(13,74,56,0.3)] dark:from-[#0D4A38] dark:via-[#187A5C] dark:to-[#115E47] dark:shadow-[0_0_14px_rgba(17,94,71,0.65)]" />
            </div>

            {/* 4 Crisp Steps Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.id}
                  onMouseMove={handleCardMouseMove}
                  className="process-card group relative overflow-hidden rounded-2xl border border-[#DCE5E0] bg-white/85 p-6 opacity-100 shadow-[0_10px_35px_-12px_rgba(12,24,20,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0D4A38]/40 dark:border-white/[0.10] dark:bg-[#0F1219]/90 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_40px_-12px_rgba(0,0,0,0.7)] dark:hover:border-[#125E47]"
                >
                  {/* Cursor-Following Radial Spotlight Glow */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
                    style={{
                      background:
                        "radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(13, 74, 56, 0.12), transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -inset-px hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:block"
                    style={{
                      background:
                        "radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(18, 94, 71, 0.15), transparent 70%)",
                    }}
                    aria-hidden
                  />

                  {/* Top Hairline Highlight */}
                  <div className="pointer-events-none absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#0D4A38]/20 to-transparent dark:via-[#146B51]/30" />

                  <div className="relative z-10">
                    {/* Step Numeral (Illuminates on hover) */}
                    <span className="font-mono text-3xl font-light text-[#7D938B] transition-all duration-300 group-hover:text-[#063729] group-hover:drop-shadow-[0_0_10px_rgba(13,74,56,0.3)] dark:text-zinc-600 dark:group-hover:text-[#34A885] dark:group-hover:drop-shadow-[0_0_10px_rgba(20,107,81,0.5)]">
                      {step.step}
                    </span>

                    <h4 className="mt-4 text-base font-semibold tracking-tight text-[#0C1814] transition-colors group-hover:text-[#063729] dark:text-zinc-200 dark:group-hover:text-[#34A885]">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-[#4A5D56] sm:text-sm dark:text-muted-subtle">
                      {step.description}
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
