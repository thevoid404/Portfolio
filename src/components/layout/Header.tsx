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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = siteConfig.nav.map((item) =>
      item.href.replace("#", "")
    );

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
      if (scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: "power2.out" }
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
        "fixed top-0 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 ease-out",
        scrolled ? "pt-2.5" : "pt-5"
      )}
    >
      {/* Floating Translucent Glass Capsule */}
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between rounded-full backdrop-blur-md transition-all duration-300 ease-out",
          scrolled
            ? "w-full max-w-[980px] px-5 py-2 bg-white/88 border border-[#0A3D2E]/[0.18] shadow-[0_12px_36px_-8px_rgba(6,45,34,0.14)] dark:bg-[#0B100E]/88 dark:border-[#244D3F]/85 dark:shadow-[0_14px_40px_-8px_rgba(0,0,0,0.8)]"
            : "w-full max-w-[1300px] px-7 py-3.5 bg-white/88 border border-[#0A3D2E]/[0.12] shadow-[0_8px_30px_-10px_rgba(6,45,34,0.08)] dark:bg-[#0B100E]/88 dark:border-[#1E3B31]/70 dark:shadow-[0_10px_32px_-10px_rgba(0,0,0,0.65)]"
        )}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#0C1814] dark:text-zinc-100"
          aria-label="Ashraf Uddin Anas - Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0A3D2E]/20 bg-[#07291F]/[0.06] font-mono text-xs font-bold text-[#063729] transition-all duration-200 group-hover:border-[#115E47] group-hover:bg-[#07291F]/10 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
            A
          </span>
          <span className="font-sans text-sm font-medium tracking-tight text-[#1A2E27] dark:text-zinc-200">
            Anas
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden items-center gap-1 lg:gap-1.5 md:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 font-sans text-xs transition-all duration-200",
                  isActive
                    ? "bg-[#07291F]/[0.08] font-semibold text-[#063729] dark:bg-emerald-400/[0.14] dark:text-emerald-300"
                    : "font-medium text-[#4A5D56] hover:bg-[#07291F]/[0.05] hover:text-[#0C1814] dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] px-4.5 py-2 font-sans text-xs font-medium text-[#ECFDF5] shadow-[0_4px_16px_-4px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_6px_20px_-3px_rgba(14,77,58,0.45)] hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A3D2E]/15 bg-white/70 transition-colors dark:border-white/10 dark:bg-white/[0.05]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <div className="flex w-3.5 flex-col gap-1">
              <span
                className={cn(
                  "h-0.5 w-full bg-[#0C1814] transition-transform duration-300 dark:bg-zinc-200",
                  menuOpen && "translate-y-[4.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-[#0C1814] transition-opacity duration-300 dark:bg-zinc-200",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-[#0C1814] transition-transform duration-300 dark:bg-zinc-200",
                  menuOpen && "-translate-y-[4.5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Card */}
      <div
        className={cn(
          "pointer-events-auto fixed inset-x-4 z-50 mx-auto flex max-w-[420px] flex-col gap-4 rounded-2xl border border-[#0A3D2E]/[0.15] bg-white/95 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 md:hidden dark:border-[#1E3B31]/80 dark:bg-[#0B100E]/95",
          scrolled ? "top-[64px]" : "top-[76px]",
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-2">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-base font-medium text-[#1A2E27] transition-colors hover:bg-[#07291F]/[0.06] hover:text-[#0C1814] dark:text-zinc-200 dark:hover:bg-white/[0.06] dark:hover:text-emerald-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="border-t border-[#E2EAE6] pt-4 dark:border-white/[0.08]">
          <a
            href="#contact"
            className="flex w-full items-center justify-center rounded-xl border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] py-2.5 font-sans text-sm font-medium text-[#ECFDF5] shadow-[0_6px_20px_-4px_rgba(4,28,21,0.55)]"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </header>
  );
}
