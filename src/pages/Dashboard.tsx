import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Modal } from "../components/common/Modal";
import { Toggle } from "../components/common/Toggle";
import { Button } from "../components/common/Button";
import { TaskFilter } from "../components/task/TaskFilter";
import { TaskForm } from "../components/task/TaskForm";
import { TaskList } from "../components/task/TaskList";
import { TaskStats } from "../components/task/TaskStats";
import { useTasks } from "../hooks/useTasks";
import { Task } from "../types/task";

export const Dashboard = () => {
  const {
    filteredTasks,
    view,
    theme,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    reorderTasks,
    setView,
    toggleTheme,
  } = useTasks();

  const [editTarget, setEditTarget] = useState<Task | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Task | null>(null);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900 transition-colors dark:text-slate-100">
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-32 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="relative flex w-full flex-col gap-6 px-4 py-4 sm:px-6 lg:px-10 2xl:px-16">
        <header className="rounded-3xl border border-white/20 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 p-6 text-white shadow-2xl shadow-indigo-950/25">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="TaskFlow logo" className="h-11 w-11 rounded-xl border border-white/25 bg-white/10 p-1.5 shadow-lg shadow-black/20" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100/90">TaskFlow Workspace</p>
                <h1 className="text-3xl font-semibold tracking-tight">Task Management Dashboard</h1>
                <p className="mt-1 text-sm text-indigo-100/95">Track priorities, deadlines, and progress in one place.</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
              <Toggle
                enabled={view === "card"}
                onToggle={() => setView(view === "list" ? "card" : "list")}
                leftLabel="List"
                rightLabel="Card"
              />
              <Button variant="secondary" onClick={toggleTheme} className="!rounded-xl !bg-white/20 !text-white hover:!bg-white/30">
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </Button>
            </div>
          </div>
        </header>

        <TaskStats />
        <TaskFilter />

        <TaskList
          tasks={filteredTasks}
          view={view}
          onEdit={setEditTarget}
          onDelete={setDeleteTarget}
          onToggle={toggleTask}
          onReorder={reorderTasks}
        />

        <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-xl backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/95">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Add Task</h2>
            <Button variant={showAddTask ? "secondary" : "primary"} onClick={() => setShowAddTask((prev) => !prev)}>
              {showAddTask ? "Close" : "Add Task"}
            </Button>
          </div>
          {showAddTask ? (
            <div className="mt-3">
              <TaskForm
                onSubmit={(values) => {
                  addTask(values);
                  setShowAddTask(false);
                }}
                submitLabel="Create Task"
              />
            </div>
          ) : null}
        </section>
      </div>

      <Modal open={Boolean(editTarget)} title="Edit Task" onClose={() => setEditTarget(null)}>
        {editTarget ? (
          <TaskForm
            initialValues={{
              title: editTarget.title,
              description: editTarget.description,
              priority: editTarget.priority,
              dueDate: editTarget.dueDate,
            }}
            submitLabel="Update Task"
            onSubmit={(values) => {
              updateTask(editTarget.id, values);
              setEditTarget(null);
            }}
          />
        ) : null}
      </Modal>

      <Modal open={Boolean(deleteTarget)} title="Delete Task" onClose={() => setDeleteTarget(null)}>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Are you sure you want to delete <strong>{deleteTarget?.title}</strong>?
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setDeleteTarget(null)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              if (deleteTarget) deleteTask(deleteTarget.id);
              setDeleteTarget(null);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </main>
  );
};
