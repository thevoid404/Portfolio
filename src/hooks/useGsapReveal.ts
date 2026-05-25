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
    y = 60,
    opacity = 0,
    duration = 1,
    delay = 0,
    stagger = 0.08,
    start = "top 85%",
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
        ease: "power3.out",
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
            toggleActions: "play none none reverse",
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
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );
}
