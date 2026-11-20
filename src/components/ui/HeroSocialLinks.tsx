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
          className="inline-flex items-center justify-center rounded-full border border-[#DCE5E0] bg-[#F1F6F3] px-5 py-2.5 text-sm font-medium text-[#1A2E27] transition-all duration-300 hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-[#125E47] dark:hover:bg-[#072B20]/40 dark:hover:text-[#34A885]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
