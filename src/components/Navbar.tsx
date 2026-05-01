"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { fadeIn, slideInFromRight } from "@/lib/motion";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const itemClassName =
  "rounded-full px-3.5 py-2 text-sm font-medium text-foreground/72 transition-theme hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/78 shadow-sm shadow-foreground/[0.03] backdrop-blur-xl"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="rounded-full text-sm font-semibold tracking-[0.2em] text-foreground/90 uppercase transition-theme hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          dev by boss
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
              <Link href={link.href} className={itemClassName}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground shadow-sm transition-theme hover:border-primary/40 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span aria-hidden="true" className="relative h-4 w-4">
              <span
                className={cn(
                  "absolute left-0 top-1 h-0.5 w-4 rounded-full bg-current transition-theme",
                  open && "top-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-1 left-0 h-0.5 w-4 rounded-full bg-current transition-theme",
                  open && "bottom-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn}
            className="border-t border-border/60 bg-background/94 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={slideInFromRight}>
                  <Link
                    href={link.href}
                    className={cn(itemClassName, "flex px-3")}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
