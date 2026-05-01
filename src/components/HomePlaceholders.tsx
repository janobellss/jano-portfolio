"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillGroups = ["React architecture", "TypeScript", "Design systems", "Performance"];

export function HomePlaceholders() {
  return (
    <>
      <Section id="about">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="About preview"
              title="Frontend leadership with product sense."
              description="A compact preview for the deeper Day 3 profile, focused on scalable interfaces, reusable systems, and calm execution across complex product surfaces."
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card glow className="p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {["Architecture", "Delivery", "Quality"].map((item) => (
                  <div key={item}>
                    <p className="text-sm font-semibold text-foreground">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/65">
                      Placeholder signal for Day 3 content.
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="projects">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              centered
              eyebrow="Featured work preview"
              title="A structure ready for case studies."
              description="These cards are temporary surfaces to validate spacing, hierarchy, and reusable components before real project data lands."
            />
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Product platform", "Design system", "Performance work"].map((item) => (
              <motion.div key={item} variants={fadeInUp}>
                <Card className="h-full">
                  <Badge>Coming Day 3</Badge>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">
                    Placeholder for a focused case study with outcomes and technical decisions.
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="skills">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 lg:grid-cols-[1fr_0.9fr]"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Skills preview"
              title="Modern frontend depth without the noise."
              description="A concise placeholder for technical strengths, intentionally scoped until real Day 3 content is added."
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="p-6">
              <div className="flex flex-wrap gap-2">
                {skillGroups.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="contact" className="pb-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Card glow className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <SectionHeading
                eyebrow="Contact preview"
                title="Ready for a focused conversation."
                description="Temporary CTA surface for Day 2 visual validation."
                className="max-w-xl"
              />
              <Button href="mailto:hello@example.com" variant="primary" className="sm:self-end">
                Start a conversation
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>
    </>
  );
}
