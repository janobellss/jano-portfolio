"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";
import { fadeIn, fadeInUp, scaleIn, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Intro"
      className="relative overflow-hidden py-24 sm:py-28 md:py-36"
    >
      <AnimatedBackground />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="text-center lg:text-left">
          <motion.div variants={fadeInUp} className="mb-5 flex justify-center lg:justify-start">
            <Badge className="bg-surface/70 text-primary">{heroContent.name}</Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {heroContent.role}
            <span className="block bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              for product teams.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-foreground/72 sm:text-lg lg:mx-0"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button href={heroContent.primaryCta.href} size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} size="lg" variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-foreground/58 lg:justify-start"
          >
            <span>React</span>
            <span aria-hidden="true">/</span>
            <span>TypeScript</span>
            <span aria-hidden="true">/</span>
            <span>Design systems</span>
            <span aria-hidden="true">/</span>
            <span>Performance</span>
          </motion.div>
        </div>

        <motion.div
          variants={scaleIn}
          className="relative mx-auto w-full max-w-sm lg:mr-0"
          aria-hidden="true"
        >
          <div className="rounded-lg border border-border/70 bg-surface/75 p-4 shadow-[0_32px_90px_-58px_var(--primary)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/75" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/75" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
            </div>
            <div className="space-y-4 pt-5 text-left font-mono text-xs text-foreground/70">
              <p>
                <span className="text-primary">type</span> FrontendSystem = &#123;
              </p>
              <p className="pl-4">architecture: &quot;clean&quot;;</p>
              <p className="pl-4">motion: &quot;purposeful&quot;;</p>
              <p className="pl-4">performance: &quot;measured&quot;;</p>
              <p>&#125;;</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
