import { BRAND, GENERIC } from "./skillIcons";

// Icons for the highlight cards (graduation cap and robot paths: Material Icons, Apache 2.0)
export const HI: Record<string, { path: string; color: string }> = {
  shield: { path: GENERIC.shield, color: "#2f6df6" },
  target: { path: GENERIC.target, color: "#e5484d" },
  android: { path: BRAND["ADB"].path, color: "#3DDC84" },
  ai: { path: "M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z", color: "#8b5cf6" },
  cap: { path: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z", color: "#f59e0b" },
};
