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

      // Safe, fluid card entrance
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
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
      id="academics"
      ref={sectionRef}
      className="relative z-10 py-14 sm:py-16 lg:py-20"
      aria-labelledby="academics-heading"
    >
      <div id="education" className="sr-only" aria-hidden="true" />
      <div className="section-padding section-container">
        <SectionHeading
          label="Education"
          title="Academic background"
          description="Computer Science & Engineering at Southeast University."
        />

        {/* Focused Single Academic Card */}
        <article className="academics-card relative mt-6 overflow-hidden rounded-2xl border border-[#D4E2DC] bg-white/95 p-6 shadow-[0_12px_36px_-14px_rgba(6,45,34,0.09)] transition-transform duration-300 ease-out hover:border-[#0E523D] sm:p-8 lg:p-10 dark:border-[#1E3B31]/80 dark:bg-[#101614]/95 dark:shadow-[inset_0_1px_0_0_rgba(52,211,153,0.12),0_12px_32px_-12px_rgba(0,0,0,0.75)] dark:hover:border-[#255C49]">
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
            {/* Degree & Institution */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#0A4D38] dark:text-emerald-400">
                {academics.program}
              </p>
              <h3
                id="academics-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-[#091713] sm:text-3xl dark:text-white"
              >
                {academics.university}{" "}
                <span className="font-normal text-[#7D938B] dark:text-zinc-500">
                  ·
                </span>{" "}
                <span className="font-normal text-[#4A5D56] dark:text-zinc-300">
                  {academics.faculty}
                </span>
              </h3>

              {/* Clean 3-column metadata strip */}
              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#E2EAE6] pt-6 sm:grid-cols-3 dark:border-white/[0.06]">
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
          </div>
        </article>
      </div>
    </section>
  );
}
