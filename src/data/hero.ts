export type HeroContent = {
  name: string;
  role: string;
  tagline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export const heroContent: HeroContent = {
  name: "Boss",
  role: "Senior Frontend Engineer",
  tagline:
    "I build scalable, high-performance web systems that turn complex product requirements into elegant, resilient user experiences.",
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },
};
