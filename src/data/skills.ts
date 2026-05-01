export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "State & Data",
    skills: ["TanStack Query", "Redux Toolkit"],
  },
  {
    title: "Forms & Validation",
    skills: ["Formik", "Yup", "Zod"],
  },
  {
    title: "UI & Design Systems",
    skills: ["Material UI", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Integration",
    skills: ["REST APIs", "GraphQL"],
  },
  {
    title: "Tooling & Workflow",
    skills: ["Git", "VSCode", "OpenAI Codex"],
  },
];
