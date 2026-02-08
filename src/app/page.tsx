import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <Container className="space-y-24 pb-20">
      <Hero />

      <section id="about" className="h-20" aria-hidden="true" />
      <section id="projects" className="h-20" aria-hidden="true" />
      <section id="experience" className="h-20" aria-hidden="true" />
      <section id="contact" className="h-20" aria-hidden="true" />
    </Container>
  );
}
