import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

type ButtonAsButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border-primary bg-primary text-primary-foreground shadow-[0_16px_40px_-22px_var(--primary)] hover:bg-primary/90 hover:shadow-[0_20px_48px_-24px_var(--primary)]",
  secondary:
    "border-border/80 bg-surface/80 text-foreground shadow-sm backdrop-blur hover:border-primary/45 hover:text-primary hover:shadow-md",
  ghost: "border-transparent bg-transparent text-foreground/75 hover:bg-muted/70 hover:text-foreground",
};

const sizeClassNames: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:h-13 sm:px-7",
};

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classNames = cn(
    "inline-flex shrink-0 items-center justify-center rounded-full border font-semibold transition-theme",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:translate-y-px disabled:pointer-events-none disabled:opacity-55",
    variantClassNames[variant],
    sizeClassNames[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={classNames} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} type="button" {...props}>
      {children}
    </button>
  );
}
