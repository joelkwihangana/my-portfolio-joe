export function StatusBadge({ status }: { status: 'Production' | 'Live' | 'Internal Lab' }) {
    let colorClasses = "";
    
    switch (status) {
      case 'Production':
        colorClasses = "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
        break;
      case 'Live':
        colorClasses = "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20";
        break;
      case 'Internal Lab':
        colorClasses = "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
        break;
    }
  
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${colorClasses}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${status === 'Production' ? 'bg-emerald-500' : status === 'Live' ? 'bg-blue-500' : 'bg-amber-500'}`} />
        {status}
      </span>
    );
  }
