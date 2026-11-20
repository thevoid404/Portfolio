import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  align?: "left" | "center";
  accent?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  titleClassName,
  align = "left",
  accent = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "section-heading-reveal mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "section-label mb-4 font-mono text-xs uppercase tracking-[0.2em]",
          accent
            ? "accent-label-gradient font-medium"
            : "text-[#063729] dark:text-[#34A885]"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight text-[#0C1814] dark:text-zinc-50 sm:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#4A5D56] dark:text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
