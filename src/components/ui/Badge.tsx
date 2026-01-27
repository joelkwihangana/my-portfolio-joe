import { cn } from "../../utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium " +
          "border-slate-200 bg-white text-slate-700 " +
          "dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
