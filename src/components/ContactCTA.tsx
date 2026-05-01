"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactCTA() {
  return (
    <Section id="contact" className="pb-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <Card glow className="p-6 sm:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about the next frontend system."
              description="Day 4 will add a full contact form. For now, the CTA is wired to simple placeholder contact and social links that are easy to replace."
              className="max-w-2xl"
            />

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <Button href={profile.socialLinks.email.href} size="lg">
                Contact Me
              </Button>
              <Button
                href={profile.socialLinks.github.href}
                size="lg"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
