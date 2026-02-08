"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-muted/70 text-foreground backdrop-blur-sm transition-theme hover:border-primary/40 hover:text-primary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && isDark ? (
        <span className="text-sm" aria-hidden="true">
          Sun
        </span>
      ) : (
        <span className="text-sm" aria-hidden="true">
          Moon
        </span>
      )}
    </motion.button>
  );
}
