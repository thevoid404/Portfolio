"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Interests() {
  const sectionRef = useRef<HTMLElement>(null);
  const { interests } = siteConfig;

  useGSAP(
    () => {
      registerGsapPlugins();
      gsap.from(".interest-card", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="interests"
      ref={sectionRef}
      className="section-accent-glow section-accent-interests relative z-10 overflow-hidden py-24 sm:py-32"
      aria-labelledby="interests-heading"
    >
      <div className="section-padding section-container">
        <SectionHeading
          label="Interests"
          title={interests.headline}
          description={interests.description}
          accent
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.items.map((item, index) => (
            <article
              key={item.id}
              className="interest-card interest-card-accent group rounded-2xl p-6 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="font-mono text-xs text-muted-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                id={index === 0 ? "interests-heading" : undefined}
                className="mt-3 text-lg font-medium text-zinc-100 transition-colors group-hover:text-white"
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
