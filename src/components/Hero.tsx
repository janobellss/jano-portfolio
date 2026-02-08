"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";

const ctaClassName =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-theme";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Intro"
      className="relative overflow-hidden py-24 sm:py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-8 bottom-10 h-52 w-52 rounded-full bg-muted blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          {heroContent.name}
        </p>
        <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {heroContent.role}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
          {heroContent.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={heroContent.primaryCta.href}
              className={`${ctaClassName} bg-primary text-primary-foreground hover:bg-primary/90`}
            >
              {heroContent.primaryCta.label}
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={heroContent.secondaryCta.href}
              className={`${ctaClassName} border border-border bg-background text-foreground hover:border-primary/40 hover:text-primary`}
            >
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
