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
        className="absolute inset-0 bg-black/60 backdrop-blur-md dark:bg-black/80"
        onClick={handleClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        className={cn(
          "project-modal-panel relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#DCE5E0] bg-white shadow-2xl dark:border-white/[0.08] dark:bg-zinc-950",
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
          <div className="project-modal-overlay-gradient absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/40" />
          <button
            type="button"
            onClick={handleClose}
            className="project-modal-close-btn absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5E0] bg-white/90 text-[#0C1814] backdrop-blur-sm transition-colors hover:bg-[#F1F6F3] hover:text-black dark:border-white/10 dark:bg-black/40 dark:text-zinc-300 dark:hover:bg-black/60 dark:hover:text-white"
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
          <p className="font-mono text-xs uppercase tracking-widest text-[#7D938B] dark:text-muted-subtle">
            {project.year} · {project.role}
          </p>
          <h2
            id="modal-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-[#0C1814] dark:text-zinc-50"
          >
            {project.title}
          </h2>
          <p className="mt-2 text-lg text-[#4A5D56] dark:text-muted">{project.tagline}</p>

          <p className="mt-6 text-base leading-relaxed text-[#4A5D56] dark:text-zinc-400">
            {project.longDescription}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[#E2EAE6] py-8 dark:border-white/[0.06]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center sm:text-left">
                <p
                  className="text-xl font-semibold sm:text-2xl"
                  style={{ color: project.accent }}
                >
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-[#7D938B] dark:text-muted-subtle">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-3 py-1 font-mono text-xs text-[#1A2E27] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-muted"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-5 py-2.5 text-sm font-medium text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-5 py-2.5 text-sm font-medium text-[#1A2E27] transition-colors hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/10 dark:bg-white/[0.04] dark:text-muted dark:hover:border-[#125E47] dark:hover:text-[#34A885]"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-5 py-2.5 text-sm font-medium text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#B7E4CE] bg-[#EBF7F1] px-5 py-2.5 text-sm font-medium text-[#0A4D38] transition-colors hover:border-[#0E5A42]/40 hover:bg-[#D5EFE3] dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-100"
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
