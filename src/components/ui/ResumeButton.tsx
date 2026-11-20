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
      "resume-btn-primary border border-[#115C45]/70 bg-gradient-to-r from-[#041812] via-[#072B20] to-[#051F17] text-[#ECFDF5] shadow-[0_8px_24px_-6px_rgba(4,28,21,0.55)] transition-all duration-300 hover:border-[#187A5C] hover:shadow-[0_10px_28px_-4px_rgba(14,77,58,0.45)]",
    outline:
      "border border-[#DCE5E0] bg-[#F1F6F3] text-[#1A2E27] hover:border-[#0D4A38]/40 hover:bg-[#EBF7F1] hover:text-[#063729] dark:border-[#125E47]/50 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-[#187A5C] dark:hover:bg-[#072B20]/30 dark:hover:text-[#34A885]",
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
