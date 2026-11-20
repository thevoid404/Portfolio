"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig, techSkills } from "@/config/site-data";
import { TechIcon } from "@/components/icons/TechIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

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

      // Staggered Bento Cards Entrance
      gsap.fromTo(
        ".about-bento-item",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Tech Stack Icons Crisp Wave Stagger
      gsap.fromTo(
        ".tech-icon-item",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-grid",
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
      id="about"
      ref={sectionRef}
      className="relative z-10 py-14 sm:py-16 lg:py-20"
      aria-labelledby="about-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="About"
          title={siteConfig.about.headline}
          titleClassName="text-3xl md:text-4xl max-w-2xl leading-tight"
          description="Software engineering grounded in empathy, systems thinking, and solving real user friction."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Story Card: The Perspective */}
          <article className="about-bento-item bento-card relative col-span-1 overflow-hidden rounded-3xl p-8 md:col-span-7 md:p-10">
            <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-white/15" />
            <h3
              id="about-heading"
              className="mb-6 text-xl font-medium text-[#0C1814] dark:text-zinc-200"
            >
              The perspective
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-[#4A5D56] dark:text-muted">
              {siteConfig.about.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Upper-Right Card: Metadata, Beyond the Screen & Availability */}
          <div className="about-bento-item bento-card relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl p-8 md:col-span-5 md:p-10">
            <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#10B981]/25 to-transparent dark:via-emerald-400/25" />

            {/* Top 2-Column Metadata Row */}
            <div className="grid grid-cols-2 gap-4 border-b border-[#E3ECE8] pb-5 dark:border-white/[0.08]">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                  Based in
                </p>
                <p className="mt-1.5 font-sans text-base font-semibold text-[#0C1814] dark:text-zinc-100">
                  {siteConfig.location}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                  Languages
                </p>
                <p className="mt-1.5 font-sans text-base font-semibold text-[#0C1814] dark:text-zinc-100">
                  {siteConfig.about.languages}
                </p>
              </div>
            </div>

            {/* Middle Section: Beyond the Screen */}
            <div className="py-5 space-y-3.5">
              <p className="font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                Beyond the screen
              </p>
              <div className="space-y-3">
                {siteConfig.about.beyondScreen.map((item) => (
                  <div key={item.title} className="flex flex-col">
                    <span className="font-sans text-[14px] font-semibold text-[#0C1814] dark:text-zinc-100">
                      {item.title}
                    </span>
                    <span className="mt-0.5 font-sans text-xs text-[#4A5D56] dark:text-zinc-400">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Availability Strip */}
            <div className="mt-auto border-t border-[#E3ECE8] pt-4 dark:border-white/[0.08]">
              <div className="rounded-xl border border-[#0D4A38]/20 bg-[#EDF5F1] px-4 py-3 dark:border-[#165E48]/50 dark:bg-[#091F18]/80">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0E5A42] animate-pulse dark:bg-emerald-400" />
                  <span className="font-sans text-[13.5px] font-semibold text-[#073326] dark:text-emerald-300">
                    {siteConfig.about.availability.status}
                  </span>
                </div>
                <p className="mt-0.5 font-sans text-[13px] text-[#3E544C] dark:text-zinc-300">
                  {siteConfig.about.availability.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Block */}
          <div className="about-bento-item bento-card relative col-span-1 overflow-hidden rounded-3xl p-8 md:col-span-12 md:p-10">
            <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-emerald-400/25" />
            <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#0C1814] dark:text-zinc-100">
                  Tech Stack
                </h3>
                <p className="mt-1 text-sm text-[#4A5D56] dark:text-zinc-400">
                  Tools I work with day to day.
                </p>
              </div>
            </div>
            <div className="tech-grid grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {techSkills.map((skill) => (
                <div key={skill.id} className="tech-icon-item">
                  <TechIcon skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* What I Build Block (Full-Width 2x2 Grid, Zero Corporate Fluff) */}
          <div className="about-bento-item bento-card relative col-span-1 overflow-hidden rounded-3xl p-8 md:col-span-12 md:p-10">
            <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#10B981]/25 to-transparent dark:via-emerald-400/25" />
            <div
              className="pointer-events-none absolute -right-20 -top-20 hidden h-60 w-60 rounded-full opacity-20 dark:block"
              style={{
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 70%)",
              }}
            />
            <h3 className="relative text-xl font-semibold tracking-tight text-[#0C1814] dark:text-zinc-100">
              What I build
            </h3>

            <div className="relative mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Full-stack web apps with Next.js, NestJS & PostgreSQL",
                  desc: "Production web applications built with strict TypeScript, modular architecture, and reliable data layers.",
                },
                {
                  title: "AI agent workflows with LangGraph & structured validation",
                  desc: "Reliable agent systems with deterministic tool calling, multi-step execution graphs, and trace evaluation.",
                },
                {
                  title: "Real-time backends using Socket.io, Redis & Docker",
                  desc: "Event-driven real-time services with pub/sub caching, containerized execution, and resilient APIs.",
                },
                {
                  title: "Clean, responsive interfaces with thoughtful motion",
                  desc: "Polished, accessible user experiences crafted with Tailwind CSS and fluid, performant GSAP animation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#DCE6E1] bg-[#F7FAF8]/80 p-5 transition-all duration-300 hover:border-[#0E523D]/40 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-emerald-500/25"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0E5A42] dark:bg-emerald-400" />
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[#0C1814] dark:text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-[#4A5D56] dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
