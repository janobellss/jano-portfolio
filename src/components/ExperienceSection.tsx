"use client";

import { motion } from "framer-motion";
import { experienceItems } from "@/data/experience";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]"
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="Experience"
            title="A practical path through production frontend work."
            description="Safe, editable timeline content that communicates senior-level responsibilities without exposing confidential client details."
          />
        </motion.div>

        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border/80 sm:before:left-5">
          {experienceItems.map((item) => (
            <motion.article key={item.id} variants={fadeInUp} className="relative pl-11 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute left-[0.72rem] top-6 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_var(--surface)] sm:left-[0.95rem]"
              />
              <Card className="p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                    <p className="mt-1 text-sm text-foreground/62">{item.organization}</p>
                  </div>
                  <p className="text-sm font-medium text-primary">{item.period}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.description.map((description) => (
                    <li key={description} className="flex gap-3 text-sm leading-6 text-foreground/68">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/75" />
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
