"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const strengths = [
  {
    title: "Scalable frontend architecture",
    description:
      "Component boundaries, typed data flows, and patterns that support long-lived product surfaces.",
  },
  {
    title: "Complex UI systems",
    description:
      "Enterprise screens with dense data, modal workflows, validation, and state that needs to stay predictable.",
  },
  {
    title: "Practical delivery mindset",
    description:
      "Production-focused decisions that balance user experience, maintainability, and team velocity.",
  },
] as const;

export function AboutSection() {
  return (
    <Section id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="About"
            title="Senior frontend work with structure and product context."
            description={profile.summary}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card glow className="p-6 sm:p-7">
            <p className="text-base leading-8 text-foreground/75">{profile.headline}</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {strengths.map((strength) => (
                <article
                  key={strength.title}
                  className="rounded-lg border border-border/60 bg-background/55 p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{strength.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/64">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
}
