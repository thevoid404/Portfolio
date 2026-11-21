"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { projects, type Project } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

type ProjectTheme = {
  stageBg: string;
  glowColor: string;
  roleLabel: string;
  isBright?: boolean;
};

const projectThemes: Record<string, ProjectTheme> = {
  aria: {
    stageBg: "dark:bg-gradient-to-br dark:from-[#0B1D17] dark:via-[#0A1612] dark:to-[#060D0B]",
    glowColor: "rgba(16, 185, 129, 0.22)",
    roleLabel: "Co-Founder · AI & Commerce Ops",
    isBright: true, // Harmonize bright white preview at rest in dark mode
  },
  audiolux: {
    stageBg: "dark:bg-gradient-to-br dark:from-[#0B1A1E] dark:via-[#081317] dark:to-[#050B0E]",
    glowColor: "rgba(20, 184, 166, 0.20)",
    roleLabel: "Full-Stack · Audio Commerce",
  },
  "nexus-studio": {
    stageBg: "dark:bg-gradient-to-br dark:from-[#0E1E1A] dark:via-[#0A1713] dark:to-[#060D0B]",
    glowColor: "rgba(52, 211, 153, 0.18)",
    roleLabel: "Co-Founder · Digital Agency",
  },
  "creators-vault": {
    stageBg: "dark:bg-gradient-to-br dark:from-[#181816] dark:via-[#111210] dark:to-[#090A09]",
    glowColor: "rgba(245, 158, 11, 0.15)",
    roleLabel: "Creator · Asset Workspace",
  },
};

/**
 * Sleek Workspace Blueprint Mock for Creators Vault:
 * Renders until a real screenshot is dropped into public/images/projects/creators-vault.png
 */
function CreatorsVaultPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#F4EFEA] to-[#EAE3DC] p-4 select-none dark:from-[#14110E] dark:via-[#0E0C0A] dark:to-[#080706]">
      {/* Subtle glowing radial mesh */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 hidden h-40 w-40 rounded-full opacity-30 blur-2xl dark:block"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-2xl dark:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d97706 1px, transparent 1px), linear-gradient(to bottom, #d97706 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      {/* Workspace Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-amber-600/15 pb-2 dark:border-amber-500/10">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md border border-amber-600/30 bg-amber-600/10 font-mono text-[9px] font-bold text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
            CV
          </div>
          <span className="font-mono text-[10px] font-medium text-[#1A2E27] dark:text-zinc-300">
            Workspace / Digital Assets
          </span>
        </div>
        <span className="rounded-full border border-amber-600/20 bg-amber-600/10 px-2 py-0.5 font-mono text-[9px] text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400/90">
          Graph Engine
        </span>
      </div>

      {/* Center UI Layout preview cards */}
      <div className="relative z-10 my-auto grid grid-cols-3 gap-2 py-1">
        <div className="space-y-1.5 rounded-lg border border-[#DCE5E0] bg-white/80 p-2 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <div className="h-1.5 w-10 rounded bg-amber-500/50 dark:bg-amber-400/40" />
          <div className="h-1 w-14 rounded bg-[#CBD5E1] dark:bg-white/15" />
          <div className="h-6 rounded border border-[#E2EAE6] bg-[#F1F6F3] dark:border-white/[0.04] dark:bg-white/[0.03]" />
        </div>
        <div className="space-y-1.5 rounded-lg border border-[#DCE5E0] bg-white/80 p-2 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <div className="h-1.5 w-8 rounded bg-teal-600/50 dark:bg-teal-400/40" />
          <div className="h-1 w-12 rounded bg-[#CBD5E1] dark:bg-white/15" />
          <div className="h-6 rounded border border-[#E2EAE6] bg-[#F1F6F3] dark:border-white/[0.04] dark:bg-white/[0.03]" />
        </div>
        <div className="space-y-1.5 rounded-lg border border-[#DCE5E0] bg-white/80 p-2 dark:border-white/[0.06] dark:bg-white/[0.02]">
          <div className="h-1.5 w-11 rounded bg-emerald-600/50 dark:bg-emerald-400/40" />
          <div className="h-1 w-10 rounded bg-[#CBD5E1] dark:bg-white/15" />
          <div className="h-6 rounded border border-[#E2EAE6] bg-[#F1F6F3] dark:border-white/[0.04] dark:bg-white/[0.03]" />
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="relative z-10 flex items-center justify-between pt-1 font-mono text-[9px] text-[#7D938B] dark:text-zinc-500">
        <span>Semantic Index: Ready</span>
        <span className="text-amber-700 dark:text-amber-400/70">1,536-dim embeddings</span>
      </div>
    </div>
  );
}

/**
 * Studio Showcase Viewport:
 * Slimmer refined framing (p-2 sm:p-2.5) with direct screenshot viewport (aspect-[16/10]),
 * no fake browser bar, filling ~90% of the media viewport with high visual impact.
 */
function ProjectShowcaseStage({
  project,
  theme,
  isFlagship = false,
}: {
  project: Project;
  theme: ProjectTheme;
  isFlagship?: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const showFallback = !project.previewImage || imgError;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden p-2 sm:p-2.5",
        "bg-[#EBF1EE] dark:bg-[#10131A]",
        theme.stageBg
      )}
    >
      {/* Subtle Ambient Radial Glow for Dark Mode */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 hidden h-56 w-56 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-75 dark:block"
        style={{
          background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`,
        }}
        aria-hidden
      />
      {/* Light Mode Soft Emerald Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full opacity-35 blur-3xl transition-opacity duration-500 group-hover:opacity-60 dark:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Subtle dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden
      />

      {/* Screenshot / Blueprint Frame: fills ~90% of viewport, aspect-[16/10], crisp 1px borders */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/[0.08] bg-[#F1F6F3] shadow-[0_8px_24px_-8px_rgba(6,35,26,0.12)] transition-all duration-300 group-hover:border-[#0E4D3A]/30 dark:border-white/[0.12] dark:bg-[#0A0C10] dark:shadow-[0_14px_32px_-10px_rgba(0,0,0,0.65)] dark:group-hover:border-white/[0.25]">
        {project.id === "creators-vault" && showFallback ? (
          <CreatorsVaultPreview />
        ) : project.previewImage && !imgError ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            className={cn(
              "project-parallax-img h-full w-full object-cover object-top scale-110 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.13]",
              theme.isBright &&
                "brightness-100 dark:brightness-[0.92] dark:contrast-[1.02] dark:group-hover:brightness-100"
            )}
            onError={() => setImgError(true)}
            sizes={
              isFlagship
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            priority={isFlagship}
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-[#F1F6F3] dark:bg-[#0E1117]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7D938B] dark:text-zinc-500">
              {project.title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

      // Aria Flagship Card Scroll Entrance
      gsap.fromTo(
        ".project-flagship-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".project-flagship-card",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Bottom 3 Cards Staggered Scroll Entrance
      gsap.fromTo(
        ".project-bottom-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".project-bottom-row",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Subtle Scroll-Linked Image Parallax Scrub
      gsap.utils.toArray<HTMLElement>(".project-parallax-img").forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;
        gsap.fromTo(
          img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  const flagship = projects[0];
  const supporting = projects.slice(1);
  const flagshipTheme = projectThemes[flagship?.id] ?? projectThemes.aria;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-accent-glow section-accent-projects relative z-10 overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="Selected Work"
          title="Featured projects"
          description="Real products I’ve designed, built, and shipped—from full-stack web apps to AI workflows."
          accent
        />

        {/* 1 + 3 Flagship Studio Layout */}
        <div>
          {/* Top Flagship Card: Aria (Full-Width Horizontal Split) */}
          {flagship && (
            <article className="project-flagship-card group relative overflow-hidden rounded-2xl border border-[#DCE5E0] bg-white/85 shadow-[0_10px_35px_-12px_rgba(12,24,20,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#0E4D3A]/30 dark:border-white/[0.10] dark:bg-[#0F1219]/90 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_40px_-12px_rgba(0,0,0,0.7)] dark:hover:border-emerald-400/30">
              {/* Top Hairline Highlight */}
              <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-emerald-400/25" />

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: Studio Showcase Media Viewport */}
                <a
                  href={flagship.link || flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer border-b border-[#E2EAE6] lg:col-span-7 lg:border-b-0 lg:border-r lg:border-[#E2EAE6] dark:border-white/[0.06] dark:lg:border-white/[0.06]"
                  aria-label={`Visit ${flagship.title} live site`}
                >
                  <ProjectShowcaseStage
                    project={flagship}
                    theme={flagshipTheme}
                    isFlagship
                  />
                </a>

                {/* Right: Solid Content Info Block */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#063729] dark:text-[#34A885]">
                        {flagshipTheme.roleLabel}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#CBD5E1] dark:bg-zinc-600" />
                      <span className="font-mono text-[11px] text-[#7D938B] dark:text-muted-subtle">
                        {flagship.year}
                      </span>
                    </div>

                    <h3
                      id="projects-heading"
                      className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#091713] transition-colors group-hover:text-[#063729] sm:text-[28px] dark:text-white dark:group-hover:text-emerald-300"
                    >
                      {flagship.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.6] text-[#4A5D56] dark:text-zinc-400">
                      {flagship.description}
                    </p>

                    {/* Single-line Minimal Tech Stack Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {flagship.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[#DCE6E1] bg-[#F2F6F4] px-2.5 py-1 font-sans text-[11.5px] font-medium text-[#2C4039] dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Balanced Architectural Spec Block */}
                    <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#E2EAE6] py-3.5 dark:border-white/[0.06]">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[#7D938B] dark:text-zinc-500">
                          Architecture
                        </p>
                        <p className="mt-0.5 font-sans text-xs font-medium text-[#1A2E27] dark:text-zinc-200">
                          Next.js, NestJS, Redis & PostgreSQL
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[#7D938B] dark:text-zinc-500">
                          AI Engine
                        </p>
                        <p className="mt-0.5 font-sans text-xs font-medium text-[#1A2E27] dark:text-zinc-200">
                          LangGraph & LangSmith Workflows
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#E2EAE6] pt-5 dark:border-white/[0.06]">
                    <a
                      href={flagship.link || flagship.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-4 py-2 font-sans text-xs font-medium text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]"
                    >
                      <span>Live Site</span>
                      <span aria-hidden>↗</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(flagship)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-transparent px-4 py-2 font-sans text-xs font-medium text-[#4A5D56] transition-colors hover:border-[#0D4A38]/40 hover:text-[#063729] dark:border-white/[0.08] dark:text-muted dark:hover:border-[#125E47] dark:hover:text-[#34A885]"
                    >
                      <span>Details</span>
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Bottom Row: AudioLux, Creators Vault, Nexus Studio (Equal-Height Cards) */}
          <div className="project-bottom-row mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {supporting.map((project) => {
              const theme =
                projectThemes[project.id] ?? projectThemes["audiolux"];

              return (
                <article
                  key={project.id}
                  className="project-bottom-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DCE5E0] bg-white/85 shadow-[0_10px_35px_-12px_rgba(12,24,20,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0E4D3A]/30 dark:border-white/[0.10] dark:bg-[#0F1219]/90 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_12px_40px_-12px_rgba(0,0,0,0.7)] dark:hover:border-emerald-400/30"
                >
                  {/* Top Hairline Highlight */}
                  <div className="pointer-events-none absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0E5A42]/20 to-transparent dark:via-emerald-400/25" />

                  {/* Top Half: Framed Mockup on Padded Stage (Zero Text on Image) */}
                  <a
                    href={project.link || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer border-b border-[#E2EAE6] dark:border-white/[0.06]"
                    aria-label={`Open ${project.title}`}
                  >
                    <ProjectShowcaseStage project={project} theme={theme} />
                  </a>

                  {/* Bottom Half: Solid Content Zone */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#063729] dark:text-[#34A885]">
                          {theme.roleLabel}
                        </span>
                        <span className="font-mono text-[11px] text-[#7D938B] dark:text-muted-subtle">
                          {project.year}
                        </span>
                      </div>

                      <h4 className="mt-2 text-[19px] font-semibold tracking-[-0.025em] text-[#091713] transition-colors group-hover:text-[#063729] dark:text-white dark:group-hover:text-emerald-300">
                        {project.title}
                      </h4>

                      <p className="mt-2 text-[14px] leading-[1.6] text-[#4A5D56] dark:text-zinc-400">
                        {project.description}
                      </p>

                      {/* Single-line Tech Pills (Max 3, no wrapping, no orphaned +1) */}
                      <div className="mt-4 flex flex-nowrap items-center gap-1.5 overflow-hidden">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="shrink-0 rounded-md border border-[#DCE6E1] bg-[#F2F6F4] px-2.5 py-1 font-sans text-[11.5px] font-medium text-[#2C4039] dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="mt-6 flex items-center justify-between border-t border-[#E2EAE6] pt-4 dark:border-white/[0.06]">
                      <a
                        href={project.link || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#063729] transition-colors hover:text-[#0D4A38] dark:text-zinc-300 dark:hover:text-[#34A885]"
                      >
                        <span>{project.link ? "Live Site" : "GitHub"}</span>
                        <span aria-hidden>↗</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#4A5D56] transition-colors hover:text-[#063729] dark:text-muted dark:hover:text-[#34A885]"
                      >
                        <span>Details</span>
                        <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
