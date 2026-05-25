import { siteConfig } from "@/config/site-data";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
] as const;

type HeroSocialLinksProps = {
  className?: string;
};

export function HeroSocialLinks({ className }: HeroSocialLinksProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-3", className)}
      role="group"
      aria-label="Social and contact links"
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-gradient-to-r hover:from-violet-500/15 hover:to-cyan-500/10 hover:text-zinc-50"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
