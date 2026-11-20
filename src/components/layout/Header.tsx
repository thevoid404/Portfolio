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
          ? "border-b border-white/[0.06] bg-charcoal-950/80 py-4 backdrop-blur-xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="section-padding section-container flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-100"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs transition-colors group-hover:border-white/20 group-hover:bg-white/[0.06]">
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
              className="text-sm text-muted transition-colors duration-300 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-zinc-100"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={cn(
                  "h-px w-full bg-zinc-300 transition-transform duration-300",
                  menuOpen && "translate-y-[5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-zinc-300 transition-opacity duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-zinc-300 transition-transform duration-300",
                  menuOpen && "-translate-y-[5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 flex flex-col gap-6 bg-charcoal-950/95 p-8 backdrop-blur-xl transition-all duration-500 md:hidden",
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
            className="text-2xl font-medium text-zinc-300 transition-colors hover:text-zinc-50"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-6">
          <span className="text-sm font-medium text-muted">Theme</span>
          <ThemeToggle />
        </div>
        <a
          href="#contact"
          className="mt-2 text-lg text-muted"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}
