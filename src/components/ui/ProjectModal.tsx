"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import type { Project } from "@/config/site-data";
import { cn } from "@/lib/utils";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!project || !overlayRef.current || !panelRef.current) return;

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    },
    { dependencies: [project?.id] }
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleClose = () => {
    if (!overlayRef.current || !panelRef.current) {
      onClose();
      return;
    }
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(panelRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        className={cn(
          "project-modal-panel relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/[0.08] bg-zinc-950 shadow-2xl",
          "scrollbar-thin"
        )}
        data-lenis-prevent
      >
        <div
          className={cn(
            "relative h-48 sm:h-56 bg-gradient-to-br",
            project.gradient
          )}
        >
          <div className="project-modal-overlay-gradient absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          <button
            type="button"
            onClick={handleClose}
            className="project-modal-close-btn absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-zinc-300 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white"
            aria-label="Close project details"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-8 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-subtle">
            {project.year} · {project.role}
          </p>
          <h2
            id="modal-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50"
          >
            {project.title}
          </h2>
          <p className="mt-2 text-lg text-muted">{project.tagline}</p>

          <p className="mt-6 text-base leading-relaxed text-zinc-400">
            {project.longDescription}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/[0.06] py-8">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center sm:text-left">
                <p
                  className="text-xl font-semibold sm:text-2xl"
                  style={{ color: project.accent }}
                >
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-muted-subtle">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-white"
              >
                View live
                <span aria-hidden>→</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-muted transition-colors hover:border-white/20 hover:text-zinc-200"
              >
                Source code
                <span aria-hidden>↗</span>
              </a>
            )}
            {project.kaggleUrl && (
              <a
                href={project.kaggleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-100"
              >
                Kaggle Notebook
                <span aria-hidden>↗</span>
              </a>
            )}
            {project.certificateUrl && (
              <a
                href={project.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-100"
              >
                Award / Certificate
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
