import { siteConfig } from "@/config/site-data";
import { cn } from "@/lib/utils";

type ResumeButtonProps = {
  className?: string;
  variant?: "primary" | "outline";
};

export function ResumeButton({
  className,
  variant = "outline",
}: ResumeButtonProps) {
  const { resume } = siteConfig;

  const styles = {
    primary:
      "resume-btn-primary border-transparent bg-gradient-to-r from-violet-200 via-zinc-100 to-cyan-100 text-zinc-950 hover:from-white hover:via-white hover:to-cyan-50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    outline:
      "border-white/10 bg-white/[0.04] text-zinc-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white",
  };

  return (
    <a
      href={resume.file}
      download
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300",
        styles[variant],
        className
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path
          d="M12 3v12m0 0l4-4m-4 4L8 11M4 15v2a2 2 0 002 2h12a2 2 0 002-2v-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {resume.label}
    </a>
  );
}
