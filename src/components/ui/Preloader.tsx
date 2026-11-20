"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion to fast-track exit if requested
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const holdDuration = prefersReducedMotion ? 400 : 1300;
    const exitDuration = prefersReducedMotion ? 200 : 500;

    // Lock body scroll strictly while the preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Hold briefly, then trigger the smooth fade out
    const holdTimer = setTimeout(() => {
      setIsExiting(true);
    }, holdDuration);

    // Completely unmount component after exit transition finishes (0% idle cost)
    const unmountTimer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      setMounted(false);
    }, holdDuration + exitDuration);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] px-6 select-none transition-all duration-500 ease-out ${
        isExiting ? "pointer-events-none -translate-y-3 opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="preloader-content flex flex-col items-center text-center">
        {/* Line 1: Primary Monogram Name in crisp pearl-white */}
        <span className="font-sans text-xl font-semibold tracking-[0.22em] text-[#F4F8F6] sm:text-3xl md:text-4xl">
          ASHRAF UDDIN ANAS
        </span>

        {/* Line 2: Portfolio Tag in muted emerald-silver */}
        <span className="mt-3 font-mono text-[11px] tracking-[0.48em] text-[#34D399]/80 sm:text-xs">
          PORTFOLIO
        </span>
      </div>
    </div>
  );
}
