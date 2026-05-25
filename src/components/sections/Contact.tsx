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
      gsap.from(".contact-reveal", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
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
      className="section-accent-glow section-accent-contact relative z-10 overflow-hidden py-32"
      aria-labelledby="contact-heading"
    >
      <div className="section-padding section-container">
        <div className="contact-reveal gradient-panel overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                label="Contact"
                title="Let's build something exceptional"
                description="Have a project in mind? I'd love to hear about it. Drop a message and I'll respond within 48 hours."
                accent
              />
              <div className="mt-10 space-y-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-muted transition-colors group-hover:text-zinc-200"
                      aria-hidden
                    >
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-muted-subtle">Email</p>
                    <p className="text-lg font-medium text-zinc-200 transition-colors group-hover:text-white">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-muted"
                      aria-hidden
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-muted-subtle">Location</p>
                    <p className="text-lg font-medium text-zinc-200">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-reveal mt-10">
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
              className="contact-reveal space-y-5"
              aria-labelledby="contact-heading"
            >
              <h2 id="contact-heading" className="sr-only">
                Contact form
              </h2>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-subtle"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-white/20 focus:bg-white/[0.05] focus:ring-1 focus:ring-white/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-subtle"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-white/20 focus:bg-white/[0.05] focus:ring-1 focus:ring-white/10"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-subtle"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-700 focus:border-white/20 focus:bg-white/[0.05] focus:ring-1 focus:ring-white/10"
                  placeholder="Tell me about your project..."
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
