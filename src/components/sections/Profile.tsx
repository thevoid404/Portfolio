"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Profile() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const section = sectionRef.current;
      const photo = photoRef.current;
      if (!section) return;

      // Bold Section Heading Reveal
      gsap.fromTo(
        ".section-heading-reveal",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      if (photo) {
        // Fluid Card Entrance
        gsap.fromTo(
          photo,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: photo,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        // Tactile Scroll-Linked Image Parallax Scrub
        gsap.fromTo(
          ".profile-parallax-img",
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: photo,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      gsap.fromTo(
        ".profile-content-reveal",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".profile-content-col",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const { profile } = siteConfig;

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="section-accent-glow section-accent-profile relative z-10 overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="profile-heading"
    >
      <div className="section-padding section-container">
        <div className="profile-heading-reveal">
          <SectionHeading
            label="Profile"
            title="Meet the developer behind the work"
            description="Engineering scalable web products, agentic AI workflows, and resilient distributed backends."
            accent
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={photoRef}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            {/* Light mode soft emerald photo glow */}
            <div
              className="profile-photo-glow pointer-events-none absolute -inset-6 rounded-[2rem] opacity-60 dark:hidden"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.18) 0%, rgba(14,77,58,0.06) 50%, transparent 70%)",
              }}
              aria-hidden
            />
            {/* Dark mode deep emerald glow */}
            <div
              className="profile-photo-glow pointer-events-none absolute -inset-6 hidden rounded-[2rem] opacity-60 dark:block"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.2) 0%, rgba(6,78,59,0.12) 50%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="profile-photo-inner relative">
              <ProfileImage
                priority
                className="w-full shadow-2xl shadow-[#0C1814]/10 dark:shadow-black/40"
              />
            </div>
            <p className="mt-4 text-center font-mono text-xs text-[#7D938B] lg:text-left dark:text-muted-subtle">
              {profile.tagline}
            </p>
          </div>

          <div className="profile-content-col space-y-7">
            <div className="profile-content-reveal">
              <h3
                id="profile-heading"
                className="text-2xl font-semibold tracking-tight text-[#0C1814] sm:text-3xl dark:text-zinc-50"
              >
                {siteConfig.name}
              </h3>
              <p className="mt-2 text-lg text-[#4A5D56] dark:text-muted">{siteConfig.title}</p>
              <p className="mt-1 text-sm font-medium text-[#4A5D56] dark:text-zinc-400">
                Co-Founder at <span className="text-[#0C1814] dark:text-zinc-200">Aria</span> &amp; <span className="text-[#0C1814] dark:text-zinc-200">Nexus Studio</span>
              </p>
            </div>

            <p className="profile-content-reveal text-base leading-relaxed text-[#4A5D56] dark:text-zinc-400">
              {profile.bio}
            </p>

            <ul className="profile-content-reveal flex flex-wrap gap-2.5">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#B7E4CE] bg-[#EBF7F1] px-4 py-2 font-mono text-xs text-[#0A4D38] dark:border-emerald-500/20 dark:bg-emerald-500/[0.06] dark:text-emerald-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="profile-content-reveal flex flex-wrap items-center gap-4 pt-2">
              <ResumeButton variant="primary" />
              <MagneticButton href="#projects" variant="secondary">
                Selected Work
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Get in touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
