import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  accent?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
  accent = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "section-label mb-4 font-mono text-xs uppercase tracking-[0.2em]",
          accent ? "accent-label-gradient" : "text-muted-subtle"
        )}
      >
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
