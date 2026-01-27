import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 " +
    "dark:focus:ring-slate-500 dark:focus:ring-offset-slate-950 " +
    "disabled:pointer-events-none disabled:opacity-60";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 " +
      "dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 " +
      "dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-slate-800",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100 " +
      "dark:text-slate-100 dark:hover:bg-slate-900/50",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
