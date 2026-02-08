"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";
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
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const itemClassName =
  "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-theme hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="text-sm font-semibold tracking-[0.24em] text-foreground/90 uppercase transition-theme hover:text-primary"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-muted/70 text-foreground md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "x" : "="}
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-border/70 bg-background/90 md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(itemClassName, "px-2")}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
