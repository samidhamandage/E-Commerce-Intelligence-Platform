import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Active: Dark Mode (Click to switch to Light Mode)' : 'Active: Light Mode (Click to switch to Dark Mode)'}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-all duration-200 border cursor-pointer select-none ${
        isDark
          ? 'bg-[#172033] border-[#263449] text-indigo-300 hover:text-white hover:bg-[#1E293B] shadow-sm'
          : 'bg-white border-slate-200 text-amber-500 hover:text-amber-600 hover:bg-slate-50 shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Moon className="h-4 w-4 transition-transform duration-300 hover:rotate-12 text-indigo-400" />
      ) : (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45 text-amber-500" />
      )}
      {showLabel && (
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
