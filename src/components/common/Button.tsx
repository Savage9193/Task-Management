import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md hover:from-sky-500 hover:to-indigo-500 hover:shadow-lg",
  secondary:
    "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700/90 dark:text-slate-100 dark:hover:bg-slate-600",
  danger: "bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-500 hover:to-pink-500",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700",
};

export const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => (
  <button
    {...props}
    className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
  >
    {children}
  </button>
);
