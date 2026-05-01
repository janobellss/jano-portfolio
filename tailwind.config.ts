import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
};

export default config;
