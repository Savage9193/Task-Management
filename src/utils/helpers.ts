import { Task } from "../types/task";

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const isOverdue = (task: Task): boolean => {
  if (task.completed) return false;
  return new Date(task.dueDate).getTime() < Date.now();
};

export const createId = (): string =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
