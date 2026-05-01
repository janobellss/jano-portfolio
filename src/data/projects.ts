export type ProjectStatus = "Case study draft" | "In progress" | "Shipped";

export type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  category: string;
  status: ProjectStatus;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "enterprise-data-grid-optimization",
    title: "Enterprise Data Grid Optimization",
    summary:
      "A scalable grid experience for dense, nested enterprise data with clearer expansion behavior and reusable rendering patterns.",
    problem:
      "Complex nested rows, expansion state, and repeated table logic made the interface harder to maintain and reason about under real production usage.",
    solution:
      "Refined the grid architecture around reusable row patterns, explicit expansion behavior, and data-fetching boundaries that kept UI state predictable.",
    impact:
      "Improved maintainability and made future grid-heavy workflows easier to extend without duplicating table logic.",
    techStack: ["React", "TypeScript", "Material UI", "React Query"],
    category: "Performance",
    status: "Case study draft",
    featured: true,
  },
  {
    id: "advanced-search-filtering-system",
    title: "Advanced Search & Filtering System",
    summary:
      "A reusable filtering workflow for complex search screens with modal-based controls and clear payload transformation.",
    problem:
      "Search screens needed multiple coordinated filters while keeping form state, validation, and API payloads understandable.",
    solution:
      "Built a Formik-managed filter flow with reusable controls, Yup validation, and a transformation layer between UI state and request payloads.",
    impact:
      "Reduced fragile one-off filter handling and created a clearer path for adding new filters safely.",
    techStack: ["React", "TypeScript", "Formik", "Yup", "Material UI"],
    category: "Complex Forms",
    status: "Case study draft",
    featured: true,
  },
  {
    id: "studio-scheduling-talent-workflows",
    title: "Studio Scheduling & Talent Workflow Enhancements",
    summary:
      "Modal-driven scheduling and talent workflow improvements for session-based production screens.",
    problem:
      "Session flows involved validation, API updates, and cache refresh behavior across related UI surfaces.",
    solution:
      "Strengthened modal interactions, validation paths, and API integration while keeping React Query cache updates aligned with the affected views.",
    impact:
      "Made complex scheduling interactions more predictable for users and safer for future frontend changes.",
    techStack: ["React", "TypeScript", "React Query", "REST APIs", "GraphQL"],
    category: "Workflow UX",
    status: "Case study draft",
    featured: true,
  },
  {
    id: "frontend-architecture-developer-workflow",
    title: "Frontend Architecture & Developer Workflow Improvements",
    summary:
      "Focused refactoring and workflow improvements that make frontend delivery clearer, easier to review, and easier to maintain.",
    problem:
      "Growing frontend systems need consistent patterns, reusable hooks, and stronger documentation habits to avoid slow, risky changes.",
    solution:
      "Introduced practical refactors, reusable frontend utilities, devlog habits, and AI-assisted review workflows that support cleaner PRs.",
    impact:
      "Improved implementation clarity and helped make technical decisions easier to audit during review.",
    techStack: ["React", "TypeScript", "Next.js", "Git", "OpenAI Codex"],
    category: "Architecture",
    status: "Case study draft",
    featured: true,
  },
];
