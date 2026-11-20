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
      gsap.from(".academics-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="academics"
      ref={sectionRef}
      className="relative z-10 py-24 sm:py-32"
      aria-labelledby="academics-heading"
    >
      <div className="section-padding section-container">
        <div className="academics-reveal">
          <SectionHeading
            label="Academics"
            title="University & academic background"
            description="Undergraduate computer science track, core engineering focus areas, and national competition milestones."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Main University Card */}
          <article className="academics-reveal bento-card relative col-span-1 overflow-hidden rounded-3xl p-8 lg:col-span-7 lg:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {academics.status}
                </span>
                <span className="font-mono text-xs text-muted-subtle">
                  Computer Science & Engineering
                </span>
              </div>

              <h3
                id="academics-heading"
                className="mt-6 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
              >
                {academics.university}
              </h3>
              <p className="mt-2 text-sm text-muted">{academics.faculty}</p>
              <p className="mt-1 text-lg font-medium text-zinc-300">
                {academics.program}
              </p>

              {/* Real verified stats — NO 6th semester and NO fake exam dates */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-xs text-muted-subtle">Status</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {academics.status}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-xs text-muted-subtle">CGPA</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {academics.cgpa}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-xs text-muted-subtle">Campus</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {academics.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted">
                {academics.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {academics.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/[0.06] px-3 py-1 text-xs text-muted"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Real Highlights (Final-Year CSE Track, IEEE Datathon 4th Place Finalist, Applied AI & Systems Engineering) */}
          <div className="academics-reveal col-span-1 flex flex-col gap-5 lg:col-span-5">
            <article className="bento-card rounded-3xl p-8">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted">
                Academic & Systems Engineering Track
              </h4>
              <ul className="mt-5 space-y-4">
                {academics.highlights.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-white/[0.04] pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-zinc-200">{item.title}</p>
                      {item.badge && (
                        <span className="shrink-0 rounded-full bg-violet-500/10 px-2.5 py-0.5 font-mono text-[10px] text-violet-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bento-card rounded-3xl p-8">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted">
                National Datathon & Honors
              </h4>
              <ul className="mt-5 space-y-4">
                {academics.milestones.map((item) => (
                  <li key={item.title} className="relative pl-5">
                    <span
                      className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                      aria-hidden
                    />
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-zinc-200">{item.title}</p>
                      {item.badge && (
                        <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
