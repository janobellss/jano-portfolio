import { cn } from "@/lib/cn";

type AnimatedBackgroundProps = {
  className?: string;
};

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow-primary),transparent_34%),radial-gradient(circle_at_80%_20%,var(--glow-secondary),transparent_30%),linear-gradient(180deg,transparent,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px] opacity-45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl motion-safe:animate-pulse" />
    </div>
  );
}
