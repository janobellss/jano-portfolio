"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { fadeInUp } from "@/lib/motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full p-6" hover={false}>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
          <Badge>{project.status}</Badge>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-foreground/68">{project.summary}</p>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-foreground/45 uppercase">
              Problem
            </dt>
            <dd className="mt-2 text-sm leading-6 text-foreground/68">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-foreground/45 uppercase">
              Solution
            </dt>
            <dd className="mt-2 text-sm leading-6 text-foreground/68">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold tracking-[0.16em] text-foreground/45 uppercase">
              Impact
            </dt>
            <dd className="mt-2 text-sm leading-6 text-foreground/68">{project.impact}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Card>
    </motion.article>
  );
}
