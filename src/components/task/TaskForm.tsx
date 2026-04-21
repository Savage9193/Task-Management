import { FormEvent, useState } from "react";
import { Priority, TaskFormValues } from "../../types/task";
import { PRIORITY_OPTIONS } from "../../utils/constants";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

interface TaskFormProps {
  initialValues?: TaskFormValues;
  onSubmit: (values: TaskFormValues) => void;
  submitLabel?: string;
}

const defaultValues: TaskFormValues = {
  title: "",
  description: "",
  priority: "Medium",
  dueDate: "",
};

export const TaskForm = ({ initialValues, onSubmit, submitLabel = "Save Task" }: TaskFormProps) => {
  const [values, setValues] = useState<TaskFormValues>(initialValues ?? defaultValues);
  const [errors, setErrors] = useState<Partial<Record<keyof TaskFormValues, string>>>({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof TaskFormValues, string>> = {};
    if (!values.title.trim()) nextErrors.title = "Title is required";
    if (!values.description.trim()) nextErrors.description = "Description is required";
    if (!values.dueDate) nextErrors.dueDate = "Due date is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    onSubmit(values);
    if (!initialValues) setValues(defaultValues);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        label="Title"
        value={values.title}
        error={errors.title}
        onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
      />
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Description</span>
        <textarea
          value={values.description}
          onChange={(event) => setValues((prev) => ({ ...prev, description: event.target.value }))}
          className="min-h-24 rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-indigo-500 transition focus:border-indigo-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        {errors.description ? <span className="text-xs text-rose-500">{errors.description}</span> : null}
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Priority</span>
          <select
            value={values.priority}
            onChange={(event) => setValues((prev) => ({ ...prev, priority: event.target.value as Priority }))}
            className="rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-indigo-500 transition focus:border-indigo-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            {PRIORITY_OPTIONS.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
        <Input
          label="Due date"
          type="date"
          value={values.dueDate}
          error={errors.dueDate}
          onChange={(event) => setValues((prev) => ({ ...prev, dueDate: event.target.value }))}
        />
      </div>
      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
};
