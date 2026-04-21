import { useMemo } from "react";
import { useTaskStore } from "../store/taskStore";

export const useTasks = () => {
  const store = useTaskStore();

  const filteredTasks = useMemo(() => {
    return store.tasks.filter((task) => {
      const q = store.searchTerm.trim().toLowerCase();
      const searchMatch =
        q.length === 0 ||
        task.title.toLowerCase().includes(q) ||
        task.description.toLowerCase().includes(q);

      const statusMatch =
        store.statusFilter === "All" ||
        (store.statusFilter === "Completed" ? task.completed : !task.completed);

      const priorityMatch =
        store.priorityFilter === "All" || task.priority === store.priorityFilter;

      return searchMatch && statusMatch && priorityMatch;
    });
  }, [store.tasks, store.searchTerm, store.statusFilter, store.priorityFilter]);

  const stats = useMemo(() => {
    const total = store.tasks.length;
    const completed = store.tasks.filter((task) => task.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [store.tasks]);

  return { ...store, filteredTasks, stats };
};
