import { useState } from "react";
import { Info } from "lucide-react";

interface TooltipProps {
  text: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export function Tooltip({ text, children, showIcon = true }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline-flex items-center gap-1">
      {children}
      {showIcon && (
        <button
          type="button"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
          aria-label={`Info: ${text}`}
        >
          <Info className="w-3 h-3" />
        </button>
      )}
      {visible && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 shadow-lg z-50 pointer-events-none"
        >
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-200 dark:border-t-slate-700" />
        </span>
      )}
    </span>
  );
}
