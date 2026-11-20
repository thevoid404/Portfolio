"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Academics() {
  const sectionRef = useRef<HTMLElement>(null);
  const { academics } = siteConfig;

  useGSAP(
    () => {
      registerGsapPlugins();
      const section = sectionRef.current;
      if (!section) return;

      const card = section.querySelector(".academics-card");
      if (!card) return;

      // Safe, single-fire entrance animation that never hides inner elements on theme toggle
      gsap.fromTo(
        card,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 92%",
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
      id="academics"
      ref={sectionRef}
      className="relative z-10 py-14 sm:py-16 lg:py-20"
      aria-labelledby="academics-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="Academics"
          title="University & academic background"
          description="Formal computer science education and academic track."
        />

        {/* Unified Crisp 2-Row Academic Card (Zero Clutter, 100% visible by default) */}
        <article className="academics-card relative mt-6 overflow-hidden rounded-2xl border border-[#D4E2DC] bg-white/90 p-6 shadow-[0_12px_36px_-14px_rgba(6,45,34,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-[#0E523D] sm:p-8 lg:p-10 dark:border-[#1E3B31]/80 dark:bg-[#101614]/95 dark:shadow-[inset_0_1px_0_0_rgba(52,211,153,0.12),0_12px_32px_-12px_rgba(0,0,0,0.75)] dark:hover:border-[#255C49]">
          {/* Top Hairline Highlight */}
          <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-emerald-400/25" />

          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-35 dark:hidden"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.16) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-16 -right-16 hidden h-48 w-48 rounded-full opacity-30 dark:block"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col">
            {/* Primary Block (Top — University) */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#0A4D38] dark:text-emerald-400">
                {academics.program}
              </p>
              <h3
                id="academics-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-[#091713] sm:text-3xl dark:text-white"
              >
                {academics.university}{" "}
                <span className="font-normal text-[#7D938B] dark:text-zinc-500">·</span>{" "}
                <span className="font-normal text-[#4A5D56] dark:text-zinc-300">
                  {academics.faculty}
                </span>
              </h3>

              {/* Clean 3-column metadata strip with high font contrast */}
              <div className="mt-6 grid grid-cols-1 gap-4 border-y border-[#E2EAE6] py-5 sm:grid-cols-3 dark:border-white/[0.06]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                    Status
                  </p>
                  <p className="mt-1 font-sans text-base font-semibold text-[#1A2E27] dark:text-zinc-200">
                    {academics.status}
                  </p>
                </div>
                <div className="sm:border-l sm:border-[#E2EAE6] sm:pl-6 dark:sm:border-white/[0.06]">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                    CGPA
                  </p>
                  <p className="mt-1 font-sans text-base font-semibold text-[#091713] dark:text-emerald-400">
                    {academics.cgpa}
                  </p>
                </div>
                <div className="sm:border-l sm:border-[#E2EAE6] sm:pl-6 dark:sm:border-white/[0.06]">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle">
                    Campus
                  </p>
                  <p className="mt-1 font-sans text-base font-semibold text-[#1A2E27] dark:text-zinc-200">
                    {academics.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Secondary Row (Bottom — HSC Science) */}
            <div className="mt-6 border-t border-[#E3ECE8] pt-5 dark:border-white/[0.08]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-[#0A4D38] dark:text-emerald-400/90">
                    {academics.hsc.program}
                  </p>
                  <h4 className="mt-0.5 text-[15px] font-semibold text-[#091713] dark:text-white">
                    {academics.hsc.college}
                  </h4>
                </div>
                <div className="flex items-center gap-2 font-sans text-xs">
                  <span className="font-semibold text-[#091713] dark:text-emerald-400">
                    {academics.hsc.gpa}
                  </span>
                  <span className="text-[#CBD5E1] dark:text-zinc-700">·</span>
                  <span className="text-[#4A5D56] dark:text-zinc-400">
                    {academics.hsc.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
