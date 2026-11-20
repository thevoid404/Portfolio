"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import { siteConfig, techSkills } from "@/config/site-data";
import { TechIcon } from "@/components/icons/TechIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.from(".about-bento-item", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".tech-icon-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-32"
      aria-labelledby="about-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="About"
          title={siteConfig.about.headline}
          description="Full-stack engineering meets agentic AI orchestration and empathetic problem solving."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Story Card */}
          <article className="about-bento-item bento-card col-span-1 rounded-3xl p-8 md:col-span-7 md:p-10">
            <h3 id="about-heading" className="mb-6 text-xl font-medium text-zinc-200">
              The perspective
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {siteConfig.about.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Location & Real Stats Card */}
          <div className="about-bento-item bento-card col-span-1 flex flex-col justify-between rounded-3xl p-8 md:col-span-5 md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-subtle">
                Based in
              </p>
              <p className="mt-2 text-2xl font-medium text-zinc-100">
                {siteConfig.location}
              </p>
            </div>
            {/* 3 Honest Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-8">
              {siteConfig.about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-subtle">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Expertise Card (17 Verified Technologies) */}
          <div className="about-bento-item bento-card col-span-1 rounded-3xl p-8 md:col-span-12 md:p-10">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-medium text-zinc-200">
                  Tech expertise & systems stack
                </h3>
                <p className="mt-1 text-sm text-muted-subtle">
                  Monochrome stack — hover to highlight
                </p>
              </div>
              <p className="font-mono text-xs text-muted-subtle">
                {techSkills.length} technologies
              </p>
            </div>
            <div className="tech-grid grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {techSkills.map((skill) => (
                <div key={skill.id} className="tech-icon-item">
                  <TechIcon skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="about-bento-item bento-card col-span-1 flex items-center justify-center rounded-3xl p-10 md:col-span-6">
            <blockquote className="text-center">
              <p className="text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl">
                &ldquo;Code is the medium. Experience is the message.&rdquo;
              </p>
              <footer className="mt-4 font-mono text-xs text-muted-subtle">
                — Design & Engineering Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Deliverables Card */}
          <div className="about-bento-item bento-card relative col-span-1 overflow-hidden rounded-3xl p-8 md:col-span-6 md:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
              }}
            />
            <h3 className="relative text-xl font-medium text-zinc-200">
              What I build & deliver
            </h3>
            <ul className="relative mt-6 space-y-4">
              {[
                "Production Next.js & NestJS web applications",
                "Autonomous agentic AI workflows with LangGraph & LangSmith",
                "Real-time event-driven backends with WebSockets & Redis",
                "Cinematic user interfaces with fluid GSAP motion systems",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
