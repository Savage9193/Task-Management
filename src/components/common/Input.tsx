import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, className = "", ...props }: InputProps) => (
  <label className="flex w-full flex-col gap-1.5">
    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
    <input
      {...props}
      className={`rounded-xl border border-slate-300/90 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm outline-none ring-indigo-500 transition focus:border-indigo-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${className}`}
    />
    {error ? <span className="text-xs text-rose-500">{error}</span> : null}
  </label>
);
