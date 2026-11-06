import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Service Error Encountered',
  message,
  onRetry,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-10 text-center rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/80 dark:bg-red-950/20 backdrop-blur-sm ${className}`}
    >
      <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-800/60 flex items-center justify-center text-red-600 dark:text-red-400 mb-4 shadow-sm">
        <AlertTriangle className="h-6 w-6" />
      </div>
      <h3 className="text-base font-semibold text-red-900 dark:text-red-200">{title}</h3>
      <p className="text-xs text-red-700 dark:text-red-300/80 mt-1 max-w-md break-words">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 dark:bg-red-900/60 text-white dark:text-red-100 border border-red-500 dark:border-red-700/50 hover:bg-red-700 dark:hover:bg-red-800/80 transition-colors shadow-sm"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Retry Request
        </button>
      )}
    </div>
  );
};
