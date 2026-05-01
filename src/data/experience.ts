export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "senior-frontend-engineer",
    role: "Senior Frontend Engineer",
    organization: "Current Client / Contract Role",
    period: "Current",
    description: [
      "Building and maintaining scalable frontend systems for production web applications.",
      "Collaborating with product, QA, backend, and design teams across complex feature work.",
      "Working on performance, architecture, and high-context UI workflows.",
    ],
  },
  {
    id: "senior-software-engineer",
    role: "Senior Software Engineer",
    organization: "Previous Engineering Role",
    period: "Previous",
    description: [
      "Delivered frontend features for production web applications.",
      "Worked across UI components, API integration, and frontend state management.",
      "Improved implementation patterns to keep shared UI behavior easier to maintain.",
    ],
  },
  {
    id: "frontend-web-developer",
    role: "Frontend / Web Developer",
    organization: "Early Web Development Experience",
    period: "Earlier",
    description: [
      "Built responsive user interfaces across web application surfaces.",
      "Strengthened fundamentals in component structure, styling, and browser behavior.",
      "Developed a practical foundation for production frontend engineering.",
    ],
  },
];
