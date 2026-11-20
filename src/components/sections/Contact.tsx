"use client";

import { useRef, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-accent-glow section-accent-contact relative z-10 overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="section-padding section-container">
        <div className="contact-reveal relative overflow-hidden rounded-2xl border border-[#0A3D2E]/35 bg-white/90 p-8 shadow-[0_14px_40px_-12px_rgba(6,45,34,0.12)] backdrop-blur-xl sm:p-12 lg:p-16 dark:border-[#0F523E]/80 dark:bg-[#070B0A]/90 dark:shadow-[0_0_40px_-14px_rgba(11,74,55,0.45),inset_0_1px_0_0_rgba(20,105,79,0.35)]">
          {/* Top Hairline Highlight */}
          <div className="pointer-events-none absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#0D4A38]/30 to-transparent dark:via-[#146B51]/40" />

          {/* Ambient Glow Orb behind CTA */}
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 hidden h-64 w-64 rounded-full opacity-40 blur-3xl dark:block"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-30 blur-3xl dark:hidden"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                label="Contact"
                title="Let's build something exceptional"
                description="Have an ambitious product, engineering role, or selective build in mind? Let's connect."
                accent
              />
              <div className="mt-8 space-y-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCE5E0] bg-[#F1F6F3] transition-all duration-500 group-hover:border-[#0D4A38]/40 group-hover:bg-[#EBF7F1] dark:border-white/[0.08] dark:bg-white/[0.03] dark:group-hover:border-[#125E47] dark:group-hover:bg-white/[0.06]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[#4A5D56] transition-colors group-hover:text-[#063729] dark:text-muted dark:group-hover:text-[#34A885]"
                      aria-hidden
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-[#7D938B] font-mono dark:text-muted-subtle">Email</p>
                    <p className="text-base font-medium text-[#0C1814] transition-colors group-hover:text-[#063729] sm:text-lg dark:text-zinc-200 dark:group-hover:text-white">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCE5E0] bg-[#F1F6F3] dark:border-white/[0.08] dark:bg-white/[0.03]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[#4A5D56] dark:text-muted"
                      aria-hidden
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-[#7D938B] font-mono dark:text-muted-subtle">Location</p>
                    <p className="text-base font-medium text-[#0C1814] sm:text-lg dark:text-zinc-200">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-reveal mt-8">
                <MagneticButton
                  href={`mailto:${siteConfig.email}`}
                  variant="primary"
                >
                  Send an email directly
                </MagneticButton>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-reveal space-y-4"
              aria-labelledby="contact-heading"
            >
              <h2 id="contact-heading" className="sr-only">
                Contact form
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-[#DCE5E0] bg-[#F1F6F3]/80 px-4 py-3 text-sm text-[#0C1814] outline-none transition-all duration-300 placeholder:text-[#7D938B] focus:border-[#0E5A42]/40 focus:bg-white focus:ring-1 focus:ring-[#0E5A42]/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-white/20 dark:focus:bg-white/[0.05] dark:focus:ring-white/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-[#DCE5E0] bg-[#F1F6F3]/80 px-4 py-3 text-sm text-[#0C1814] outline-none transition-all duration-300 placeholder:text-[#7D938B] focus:border-[#0E5A42]/40 focus:bg-white focus:ring-1 focus:ring-[#0E5A42]/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-white/20 dark:focus:bg-white/[0.05] dark:focus:ring-white/10"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-[#7D938B] dark:text-muted-subtle"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#DCE5E0] bg-[#F1F6F3]/80 px-4 py-3 text-sm text-[#0C1814] outline-none transition-all duration-300 placeholder:text-[#7D938B] focus:border-[#0E5A42]/40 focus:bg-white focus:ring-1 focus:ring-[#0E5A42]/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-white/20 dark:focus:bg-white/[0.05] dark:focus:ring-white/10"
                  placeholder="Tell me about your project or role..."
                />
              </div>
              <MagneticButton
                type="submit"
                variant="secondary"
                ariaLabel="Submit contact form"
              >
                Submit inquiry
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
