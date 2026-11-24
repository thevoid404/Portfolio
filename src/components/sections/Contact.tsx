"use client";

import { useRef, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-config";
import { siteConfig } from "@/config/site-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactSocials = [
  {
    name: "LinkedIn",
    url: siteConfig.social.linkedin,
    icon: (
      <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: siteConfig.social.x || siteConfig.social.twitter,
    icon: (
      <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: siteConfig.social.facebook,
    icon: (
      <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: siteConfig.social.instagram,
    icon: (
      <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    url: siteConfig.social.discord,
    icon: (
      <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: siteConfig.social.whatsapp,
    icon: (
      <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
];

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
        <div className="contact-reveal relative overflow-hidden rounded-2xl border border-[#0A3D2E]/35 bg-white/95 p-8 shadow-[0_14px_40px_-12px_rgba(6,45,34,0.12)] sm:p-12 lg:p-16 dark:border-[#0F523E]/80 dark:bg-[#101614]/95 dark:shadow-[0_0_40px_-14px_rgba(11,74,55,0.45),inset_0_1px_0_0_rgba(20,105,79,0.35)]">
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

              {/* Connect in Section */}
              <div className="contact-reveal mt-9 border-t border-[#E2EAE6] pt-6 dark:border-white/[0.08]">
                <p className="font-mono text-xs uppercase tracking-widest text-[#7D938B] dark:text-muted-subtle">
                  Connect in
                </p>
                <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
                  {contactSocials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE5E0] bg-[#F1F6F3] text-[#4A5D56] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0D4A38]/50 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/50 dark:hover:text-[#34A885]"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
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
