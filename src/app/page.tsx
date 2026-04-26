import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HomePlaceholders } from "@/components/HomePlaceholders";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <HomePlaceholders />
    </Container>
  );
}
