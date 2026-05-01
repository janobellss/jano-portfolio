"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featuredProjects = [...projects].sort((projectA, projectB) => {
  if (projectA.featured === projectB.featured) {
    return 0;
  }

  return projectA.featured ? -1 : 1;
});

export function ProjectsSection() {
  return (
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
            eyebrow="Featured projects"
            title="Case-study foundations for senior frontend work."
            description="Portfolio-safe project summaries focused on architecture, maintainability, workflow design, and complex production UI behavior."
          />
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
          <Badge className="px-4 py-2">More case studies coming soon</Badge>
        </motion.div>
      </motion.div>
    </Section>
  );
}
