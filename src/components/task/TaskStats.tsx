import { useTasks } from "../../hooks/useTasks";

export const TaskStats = () => {
  const { stats } = useTasks();

  const items = [
    { label: "Total", value: stats.total, color: "text-sky-700 dark:text-sky-300" },
    { label: "Completed", value: stats.completed, color: "text-emerald-700 dark:text-emerald-300" },
    { label: "Pending", value: stats.pending, color: "text-orange-700 dark:text-orange-300" },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-900/95"
        >
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
          <p className={`mt-2 text-4xl font-semibold tracking-tight ${item.color}`}>{item.value}</p>
        </article>
      ))}
    </section>
  );
};
