import { Priority } from "../types/task";

export const DESIGN_COLORS = {
  primary: "indigo-600",
  secondary: "slate-600",
  accent: "violet-500",
  success: "emerald-500",
  danger: "rose-500",
  background: {
    light: "slate-50",
    dark: "slate-950",
  },
} as const;

export const PRIORITY_OPTIONS: Priority[] = ["Low", "Medium", "High"];
export const STORAGE_KEY = "task-dashboard-store-v1";
