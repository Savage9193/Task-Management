import { useTasks } from "../../hooks/useTasks";
import { FiCheckCircle, FiClock, FiLayers } from "react-icons/fi";

export const TaskStats = () => {
  const { stats } = useTasks();

  const items = [
    { label: "Total", value: stats.total, color: "text-sky-700 dark:text-sky-300", icon: FiLayers, iconBg: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300" },
    { label: "Completed", value: stats.completed, color: "text-emerald-700 dark:text-emerald-300", icon: FiCheckCircle, iconBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
    { label: "Pending", value: stats.pending, color: "text-orange-700 dark:text-orange-300", icon: FiClock, iconBg: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-900/95 dark:hover:border-sky-800"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
            <span className={`rounded-xl p-2 ${item.iconBg}`}>
              <item.icon size={16} />
            </span>
          </div>
          <p className={`mt-2 text-4xl font-semibold tracking-tight ${item.color}`}>{item.value}</p>
        </article>
      ))}
    </section>
  );
};
