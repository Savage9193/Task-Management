import { PRIORITY_OPTIONS } from "../../utils/constants";
import { useTasks } from "../../hooks/useTasks";
import { TaskStatusFilter } from "../../types/task";

export const TaskFilter = () => {
  const { searchTerm, statusFilter, priorityFilter, setSearchTerm, setStatusFilter, setPriorityFilter } = useTasks();

  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/95">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">Filters</h2>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Search and narrow tasks</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <input
          placeholder="Search title or description..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none ring-sky-500 transition focus:border-sky-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
        />
        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as TaskStatusFilter)}
          className="rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none ring-sky-500 transition focus:border-sky-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(event) => setPriorityFilter(event.target.value as "All" | "Low" | "Medium" | "High")}
          className="rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none ring-sky-500 transition focus:border-sky-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="All">All priorities</option>
          {PRIORITY_OPTIONS.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};
