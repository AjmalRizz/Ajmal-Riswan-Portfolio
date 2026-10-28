"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className="w-16 h-8 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-secondary)] opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors duration-200 text-xs font-mono tracking-wider cursor-pointer select-none"
      aria-label={`Switch to ${isDark ? "light (warm paper)" : "dark"} theme`}
      title={`Current: ${isDark ? "Dark" : "Light"} mode. Click to toggle.`}
    >
      <span
        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
          isDark ? "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" : "bg-[var(--sage)]"
        }`}
      />
      <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200 uppercase font-medium">
        {isDark ? "Dark" : "Paper"}
      </span>
    </button>
  );
}
