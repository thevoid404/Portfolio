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

      gsap.from(".profile-heading-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      if (photo) {
        gsap.fromTo(
          photo,
          {
            opacity: 0,
            y: 80,
            scale: 0.88,
            rotation: -4,
            clipPath: "inset(12% 8% 100% 8% round 24px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: photo,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const inner = photo.querySelector(".profile-photo-inner");
        if (inner) {
          gsap.from(inner, {
            scale: 1.2,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photo,
              start: "top 90%",
              end: "top 35%",
              scrub: 0.6,
            },
          });
        }

        gsap.from(".profile-photo-glow", {
          opacity: 0,
          scale: 0.6,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: photo,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.from(".profile-content-reveal", {
        x: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".profile-content-col",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  const { profile } = siteConfig;

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="section-accent-glow section-accent-profile relative z-10 overflow-hidden py-24 sm:py-32"
      aria-labelledby="profile-heading"
    >
      <div className="section-padding section-container">
        <div className="profile-heading-reveal">
          <SectionHeading
            label="Profile"
            title="Meet the developer behind the work"
            description="A quick introduction — swap in your own photo and bio anytime."
            accent
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={photoRef}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div
              className="profile-photo-glow pointer-events-none absolute -inset-6 rounded-[2rem] opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.18) 0%, rgba(34,211,238,0.08) 50%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="profile-photo-inner relative">
              <ProfileImage
                priority
                className="w-full shadow-2xl shadow-black/40"
              />
            </div>
            <p className="mt-4 text-center font-mono text-xs text-muted-subtle lg:text-left">
              {profile.tagline}
            </p>
          </div>

          <div className="profile-content-col space-y-8">
            <div className="profile-content-reveal">
              <h3
                id="profile-heading"
                className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
              >
                {siteConfig.name}
              </h3>
              <p className="mt-2 text-lg text-muted">{siteConfig.title}</p>
            </div>

            <p className="profile-content-reveal text-base leading-relaxed text-zinc-400">
              {profile.bio}
            </p>

            <ul className="profile-content-reveal flex flex-wrap gap-3">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-violet-500/15 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 px-4 py-2 text-sm text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="profile-content-reveal flex flex-wrap items-center gap-4">
              <ResumeButton variant="primary" />
              <MagneticButton href="#academics" variant="secondary">
                Academic updates
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
