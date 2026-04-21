import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task, TaskFormValues, TaskStatusFilter, TaskView, ThemeMode, Priority } from "../types/task";
import { createId } from "../utils/helpers";
import { STORAGE_KEY } from "../utils/constants";

interface TaskState {
  tasks: Task[];
  searchTerm: string;
  statusFilter: TaskStatusFilter;
  priorityFilter: Priority | "All";
  view: TaskView;
  theme: ThemeMode;
  addTask: (payload: TaskFormValues) => void;
  updateTask: (id: string, payload: TaskFormValues) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  reorderTasks: (fromIndex: number, toIndex: number) => void;
  setSearchTerm: (value: string) => void;
  setStatusFilter: (value: TaskStatusFilter) => void;
  setPriorityFilter: (value: Priority | "All") => void;
  setView: (value: TaskView) => void;
  toggleTheme: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      searchTerm: "",
      statusFilter: "All",
      priorityFilter: "All",
      view: "list",
      theme: "light",
      addTask: (payload) =>
        set((state) => ({
          tasks: [
            {
              id: createId(),
              ...payload,
              completed: false,
              createdAt: new Date().toISOString(),
            },
            ...state.tasks,
          ],
        })),
      updateTask: (id, payload) =>
        set((state) => ({
          tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...payload } : task)),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
        })),
      reorderTasks: (fromIndex, toIndex) =>
        set((state) => {
          const reordered = [...state.tasks];
          const [moved] = reordered.splice(fromIndex, 1);
          reordered.splice(toIndex, 0, moved);
          return { tasks: reordered };
        }),
      setSearchTerm: (searchTerm) => set({ searchTerm }),
      setStatusFilter: (statusFilter) => set({ statusFilter }),
      setPriorityFilter: (priorityFilter) => set({ priorityFilter }),
      setView: (view) => set({ view }),
      toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        tasks: state.tasks,
        theme: state.theme,
        view: state.view,
      }),
    },
  ),
);
