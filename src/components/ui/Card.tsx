import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glow?: boolean;
  hover?: boolean;
};

export function Card({ children, className, glow = false, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border/70 bg-surface/80 p-5 shadow-sm backdrop-blur transition-theme",
        glow &&
          "before:pointer-events-none before:absolute before:inset-x-8 before:-top-16 before:h-32 before:rounded-full before:bg-primary/15 before:blur-3xl before:content-['']",
        hover &&
          "hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_22px_60px_-42px_var(--primary)]",
        className,
      )}
      {...props}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
