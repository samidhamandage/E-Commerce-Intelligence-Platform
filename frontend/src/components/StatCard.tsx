import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  icon,
  variant = 'default',
}) => {
  const borderStyles = {
    default: 'border-slate-200 dark:border-[#263449] hover:border-slate-300 dark:hover:border-slate-700',
    success: 'border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-800/60',
    warning: 'border-amber-200 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-800/60',
    info: 'border-indigo-200 dark:border-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-800/60',
  }[variant];

  return (
    <div
      className={`p-5 rounded-xl bg-white dark:bg-[#172033] border ${borderStyles} shadow-sm transition-all duration-200 flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {label}
        </span>
        {icon && <div className="text-slate-400 dark:text-slate-500">{icon}</div>}
      </div>
      <div className="mt-3">
        <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</div>
        {subtext && <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{subtext}</div>}
      </div>
    </div>
  );
};
