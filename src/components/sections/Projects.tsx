"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { projects, type Project } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

const projectEnterOffsets = [
  { x: -120, y: 140, rotate: -5, scale: 0.88 },
  { x: 100, y: 120, rotate: 4, scale: 0.9 },
  { x: -80, y: 100, rotate: -3, scale: 0.92 },
  { x: 90, y: 130, rotate: 5, scale: 0.89 },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const grid = gridRef.current;
      if (!grid) return;

      const cards = grid.querySelectorAll<HTMLElement>(".project-card");

      cards.forEach((card, index) => {
        const offset = projectEnterOffsets[index % projectEnterOffsets.length];

        gsap.set(card, {
          opacity: 0,
          x: offset.x,
          y: offset.y,
          rotation: offset.rotate,
          scale: offset.scale,
          transformOrigin: "center center",
        });

        gsap.to(card, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.15,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-accent-glow section-accent-projects relative z-10 overflow-hidden py-32"
      aria-labelledby="projects-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="Selected Work"
          title="Featured projects"
          description="Featured full-stack engineering builds, agentic systems, and competitive ML achievements."
          accent
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              data-project-index={index}
              className="project-card project-card-gradient group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl border border-white/[0.06] text-left will-change-transform hover:border-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
              onClick={() => setSelectedProject(project)}
              aria-label={`View case study: ${project.title}`}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
                  project.gradient
                )}
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${project.accent}22 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 p-8">
                <span className="font-mono text-xs text-muted-subtle">
                  {project.year} · {project.role.split("(")[0].trim()}
                </span>
                <h3
                  id={index === 0 ? "projects-heading" : undefined}
                  className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 transition-colors group-hover:text-white"
                >
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.06] bg-black/20 px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-full border border-white/[0.06] bg-black/20 px-2 py-0.5 text-xs text-muted-subtle">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-all duration-300 group-hover:gap-3 group-hover:text-zinc-100">
                  View case study & details
                  <span aria-hidden>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
