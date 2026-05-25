import { siteConfig } from "@/config/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-12">
      <div className="section-padding section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-subtle">
          © {year} {siteConfig.name}. Crafted with intent.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-zinc-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
