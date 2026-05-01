export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  socialLinks: {
    github: SocialLink;
    linkedin: SocialLink;
    email: SocialLink;
  };
};

export const profile: Profile = {
  name: "Boss",
  role: "Senior Frontend Engineer",
  headline:
    "Building scalable, high-performance web applications with React, TypeScript, and modern frontend architecture.",
  summary:
    "Senior frontend engineer focused on enterprise UI systems, maintainable architecture, and performance-minded delivery. I work closely with product, design, QA, and backend teams to turn complex workflows into reliable interfaces that are easier to build, test, and evolve.",
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },
  socialLinks: {
    github: {
      label: "GitHub",
      href: "https://github.com/your-github-username",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-linkedin-profile",
    },
    email: {
      label: "Email",
      href: "mailto:hello@example.com",
    },
  },
};
