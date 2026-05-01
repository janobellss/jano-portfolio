"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <Section id="skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeInUp}>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and patterns for durable frontend systems."
            description="A focused technical profile across application architecture, state, forms, UI systems, integration work, and delivery workflow."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <Card className="h-full p-6">
                <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
