export type Priority = "Low" | "Medium" | "High";
export type TaskStatusFilter = "All" | "Pending" | "Completed";
export type TaskView = "list" | "card";
export type ThemeMode = "light" | "dark";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

export interface TaskFormValues {
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
}
