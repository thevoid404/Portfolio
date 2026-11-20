"use client";

import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import type { RefObject } from "react";

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  scrub?: boolean | number;
  markers?: boolean;
};

export function useGsapReveal(
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options: RevealOptions = {}
) {
  const {
    y = 16,
    opacity = 0,
    duration = 0.45,
    delay = 0,
    stagger = 0.04,
    start = "top 94%",
    scrub = false,
    markers = false,
  } = options;

  useGSAP(
    () => {
      registerGsapPlugins();

      const container = containerRef.current;
      if (!container) return;

      const elements = container.querySelectorAll(selector);
      if (!elements.length) return;

      gsap.set(elements, { y, opacity });

      const animationConfig: gsap.TweenVars = {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power2.out",
      };

      if (scrub) {
        gsap.to(elements, {
          ...animationConfig,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start,
            end: "bottom 20%",
            scrub: typeof scrub === "number" ? scrub : 1,
            markers,
          },
        });
      } else {
        gsap.to(elements, {
          ...animationConfig,
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: "play none none none",
            once: true,
            markers,
          },
        });
      }
    },
    { scope: containerRef, dependencies: [selector] }
  );
}

export function useGsapTimelineReveal(
  containerRef: RefObject<HTMLElement | null>,
  itemSelector: string
) {
  useGSAP(
    () => {
      registerGsapPlugins();

      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll(itemSelector);
      if (!items.length) return;

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 94%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );
}
