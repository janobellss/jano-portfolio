import { AboutSection } from "@/components/AboutSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/Container";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactCTA />
    </Container>
  );
}
