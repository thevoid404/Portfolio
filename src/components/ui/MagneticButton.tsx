"use client";

import { useRef, type ReactNode, type MouseEvent, type RefObject } from "react";
import { gsap } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  ariaLabel,
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = buttonRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(inner, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const el = buttonRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    gsap.to([el, inner], {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const variants = {
    primary:
      "border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]",
    secondary:
      "border border-[#DCE5E0] bg-[#F1F6F3] text-[#1A2E27] hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-100 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/40 dark:hover:text-[#34A885]",
    ghost:
      "text-[#4A5D56] hover:text-[#063729] dark:text-zinc-400 dark:hover:text-[#34A885]",
  };

  const sharedClass = cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300",
    variants[variant],
    className
  );

  const content = (
    <span ref={innerRef} className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as unknown as RefObject<HTMLAnchorElement>}
        href={href}
        className={sharedClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as unknown as RefObject<HTMLButtonElement>}
      type={type}
      className={sharedClass}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
