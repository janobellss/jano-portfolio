import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs font-medium text-foreground/75 transition-theme",
        "hover:border-primary/35 hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
