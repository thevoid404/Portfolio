"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { experiences, processSteps } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      const timeline = timelineRef.current;
      if (timeline) {
        const items = timeline.querySelectorAll(".timeline-item");

        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.85,
              delay: index * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        const line = timeline.querySelector(".timeline-progress");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: timeline,
                start: "top 70%",
                end: "bottom 30%",
                scrub: 1,
              },
            }
          );
        }
      }

      const process = processRef.current;
      if (process) {
        gsap.from(".process-card", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: process,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-10 py-32"
      aria-labelledby="experience-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="Milestones"
          title="Engineering Journey & Milestones"
          description="A progression from full-stack fundamentals to distributed real-time systems and agentic AI architectures."
        />

        <div ref={timelineRef} className="relative max-w-3xl">
          <div
            className="timeline-line absolute left-[7px] top-0 hidden h-full w-px md:block"
            aria-hidden
          />
          <div
            className="timeline-progress timeline-line absolute left-[7px] top-0 hidden h-full w-px origin-top bg-gradient-to-b from-violet-500/60 via-zinc-400/40 to-transparent md:block"
            aria-hidden
          />

          <ol className="space-y-16">
            {experiences.map((exp) => (
              <li key={exp.id} className="timeline-item relative md:pl-12">
                <span
                  className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-zinc-700 bg-charcoal-950 md:block"
                  aria-hidden
                />
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3
                      id={exp.id === "1" ? "experience-heading" : undefined}
                      className="text-xl font-medium text-zinc-100"
                    >
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-muted-subtle">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {exp.company}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted-subtle"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/80" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div ref={processRef} className="mt-32">
          <SectionHeading
            label="Process"
            title="How I work"
            description="A disciplined engineering workflow from problem discovery through production launch."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.id}
                className="process-card bento-card group rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-mono text-3xl font-light text-zinc-700 transition-colors duration-300 group-hover:text-muted">
                  {step.step}
                </span>
                <h4 className="mt-4 text-base font-medium text-zinc-200">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-subtle">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
