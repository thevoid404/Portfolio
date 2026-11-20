"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[#E2EAE6] bg-white/80 py-4 backdrop-blur-xl dark:border-emerald-500/[0.14] dark:bg-[#0B0F0E]/80"
          : "bg-transparent py-6"
      )}
    >
      <div className="section-padding section-container flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight text-[#0C1814] dark:text-zinc-100"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE5E0] bg-[#F1F6F3] font-mono text-xs transition-colors group-hover:border-[#0E5A42]/30 group-hover:bg-[#EBF7F1] dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-emerald-500/30 dark:group-hover:bg-emerald-500/10">
            A
          </span>
          <span className="hidden sm:inline">Anas</span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4A5D56] transition-colors duration-300 hover:text-[#0C1814] dark:text-muted dark:hover:text-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-5 py-2 text-sm font-medium text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE5E0] bg-white/80 dark:border-white/10 dark:bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={cn(
                  "h-px w-full bg-[#0C1814] transition-transform duration-300 dark:bg-zinc-300",
                  menuOpen && "translate-y-[5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-[#0C1814] transition-opacity duration-300 dark:bg-zinc-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-[#0C1814] transition-transform duration-300 dark:bg-zinc-300",
                  menuOpen && "-translate-y-[5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 flex flex-col gap-6 border-b border-[#E2EAE6] bg-white/95 p-8 backdrop-blur-xl transition-all duration-500 md:hidden dark:border-white/[0.08] dark:bg-charcoal-950/95",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        {siteConfig.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-2xl font-medium text-[#1A2E27] transition-colors hover:text-[#0C1814] dark:text-zinc-300 dark:hover:text-emerald-300"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-4 flex items-center justify-between border-t border-[#E2EAE6] pt-6 dark:border-white/[0.08]">
          <span className="text-sm font-medium text-[#4A5D56] dark:text-muted">Theme</span>
          <ThemeToggle />
        </div>
        <a
          href="#contact"
          className="mt-2 text-lg font-medium text-[#0E5A42] dark:text-emerald-400"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}
