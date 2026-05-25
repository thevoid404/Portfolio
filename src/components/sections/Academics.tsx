"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Academics() {
  const sectionRef = useRef<HTMLElement>(null);
  const { education } = siteConfig;

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
            title="University & semester details"
            description="Keep this block updated each semester — courses, status, and recent milestones."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
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
                  {education.status}
                </span>
                <span className="font-mono text-xs text-muted-subtle">
                  {education.academicYear}
                </span>
              </div>

              <h3
                id="academics-heading"
                className="mt-6 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
              >
                {education.university}
              </h3>
              <p className="mt-2 text-sm text-muted">{education.faculty}</p>
              <p className="mt-1 text-lg font-medium text-zinc-300">
                {education.program}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-xs text-muted-subtle">Semester</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {education.currentSemester}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-xs text-muted-subtle">GPA</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {education.gpa}
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:col-span-2">
                  <p className="text-xs text-muted-subtle">Campus</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {education.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted">
                {education.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {education.focusAreas.map((area) => (
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

          <div className="academics-reveal col-span-1 flex flex-col gap-5 lg:col-span-5">
            <article className="bento-card rounded-3xl p-8">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted">
                Current courses
              </h4>
              <ul className="mt-5 space-y-3">
                {education.currentCourses.map((course) => (
                  <li
                    key={course.code}
                    className="flex items-start justify-between gap-4 border-b border-white/[0.04] pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-mono text-xs text-violet-400/90">
                        {course.code}
                      </p>
                      <p className="mt-0.5 text-sm text-zinc-300">{course.name}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wide text-muted">
                      {course.status}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bento-card rounded-3xl p-8">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted">
                Recent updates
              </h4>
              <ul className="mt-5 space-y-5">
                {education.recentUpdates.map((update) => (
                  <li key={update.title} className="relative pl-5">
                    <span
                      className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                      aria-hidden
                    />
                    <p className="font-mono text-xs text-muted-subtle">{update.date}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-200">
                      {update.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {update.detail}
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
