"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import { testimonials } from "@/config/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TestimonialCard({
  quote,
  author,
  role,
  company,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <figure className="mx-4 w-[min(100%,380px)] shrink-0 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm">
      <blockquote className="text-base leading-relaxed text-zinc-400">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-white/[0.06] pt-6">
        <p className="text-sm font-medium text-zinc-200">{author}</p>
        <p className="mt-0.5 text-xs text-muted-subtle">
          {role}, {company}
        </p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const duplicated = [...testimonials, ...testimonials];

  useGSAP(
    () => {
      gsap.from(".testimonials-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden py-32"
      aria-label="Client testimonials"
    >
      <div className="section-padding section-container testimonials-header">
        <SectionHeading
          label="Testimonials"
          title="Trusted by teams"
          description="What collaborators say about working together."
          align="center"
        />
      </div>

      <div className="relative mt-4">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-charcoal-950 to-transparent sm:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-charcoal-950 to-transparent sm:w-32"
          aria-hidden
        />

        <div className="overflow-hidden py-4" aria-live="off">
          <div className="marquee-track">
            {duplicated.map((item, index) => (
              <TestimonialCard
                key={`${item.id}-${index}`}
                quote={item.quote}
                author={item.author}
                role={item.role}
                company={item.company}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
