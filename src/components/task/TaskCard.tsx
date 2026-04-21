import { memo } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { Task } from "../../types/task";
import { formatDate, isOverdue } from "../../utils/helpers";
import { Button } from "../common/Button";

interface TaskCardProps {
  task: Task;
  view: "list" | "card";
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onToggle: (id: string) => void;
}

const priorityStyles = {
  Low: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  High: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

export const TaskCard = memo(({ task, view, onEdit, onDelete, onToggle }: TaskCardProps) => (
  <article
    className={`rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-900/95 ${
      view === "list" ? "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" : "space-y-3"
    } ${task.completed ? "border-emerald-300/90 bg-emerald-50/80 dark:border-emerald-700 dark:bg-emerald-900/25" : ""}`}
  >
    <div className="flex-1 space-y-2">
      <div className="flex items-start justify-between gap-2 sm:items-center">
        <h3 className={`text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-100 ${task.completed ? "line-through opacity-60" : ""}`}>
          {task.title}
        </h3>
        <span className={`shrink-0 rounded-full px-3 py-1 text-center text-xs font-semibold sm:min-w-20 ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <p className={`text-sm leading-relaxed text-slate-600 dark:text-slate-300 ${task.completed ? "line-through opacity-60" : ""}`}>
        {task.description}
      </p>
      <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800/80">
          <FiCalendar size={12} />
          {formatDate(task.dueDate)}
        </span>
        {isOverdue(task) ? <span className="font-semibold text-rose-500">Overdue</span> : null}
      </div>
    </div>
    <div className="flex items-center gap-2 sm:self-start">
      <Button variant={task.completed ? "secondary" : "primary"} className="min-w-28" onClick={() => onToggle(task.id)}>
        {task.completed ? "Completed" : "Pending"}
      </Button>
      <Button variant="ghost" className="!px-3" aria-label="Edit task" onClick={() => onEdit(task)}>
        <FaEdit />
      </Button>
      <Button variant="ghost" className="!px-3" aria-label="Delete task" onClick={() => onDelete(task)}>
        <FaTrash className="text-rose-500" />
      </Button>
    </div>
  </article>
));

TaskCard.displayName = "TaskCard";
