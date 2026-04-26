import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  centered?: boolean;
  className?: string;
  description?: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({
  centered = false,
  className,
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-7 text-foreground/68 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
