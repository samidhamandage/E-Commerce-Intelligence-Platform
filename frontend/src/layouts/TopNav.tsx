import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useHealth } from '../hooks/useHealth';
import { Database, LogOut, ExternalLink, Activity } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export const TopNav: React.FC = () => {
  const { user, logout } = useAuth();
  const { data: health, error: healthError } = useHealth(15000);

  const isDbConnected = health?.database?.connected ?? false;
  const dbLatency = health?.database?.latency_ms ?? 0;

  return (
    <header className="h-16 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#263449] px-6 flex items-center justify-between sticky top-0 z-30 transition-colors duration-200">
      {/* Subtitle / Breadcrumb Context */}
      <div className="flex flex-col">
        <h1 className="text-xs font-semibold text-slate-900 dark:text-slate-200 tracking-wide uppercase">
          E-Commerce Intelligence & Decision Support Platform
        </h1>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-xl hidden md:block">
          Customer Intelligence | Sales Analytics | Product Intelligence | Machine Learning | Forecasting
        </p>
      </div>

      {/* Right Controls: Database status, API health, Theme Toggle, User profile */}
      <div className="flex items-center gap-3">
        {/* PostgreSQL Database Heartbeat indicator */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] text-xs">
          <Database className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-600 dark:text-slate-300 font-mono text-[11px]">PostgreSQL:</span>
          <div className="flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${
                isDbConnected ? 'bg-emerald-500 shadow-sm shadow-emerald-500' : 'bg-red-500'
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                isDbConnected ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
              }`}
            >
              {isDbConnected ? `${dbLatency}ms` : healthError ? 'Offline' : 'Connecting'}
            </span>
          </div>
        </div>

        {/* Backend API status badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] text-xs">
          <Activity className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
          <span className="text-slate-600 dark:text-slate-300 text-[11px]">API:</span>
          <span className="text-slate-800 dark:text-slate-200 font-mono text-[11px]">
            {health?.api_version ? `v${health.api_version}` : 'Connecting'}
          </span>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Profile & Logout */}
        {user ? (
          <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-[#263449]">
            <div className="flex flex-col text-right">
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200">{user.full_name}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate max-w-[140px]">
                {user.email}
              </span>
            </div>
            <button
              onClick={logout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <a
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs text-slate-700 dark:text-slate-200 transition-colors"
          >
            <span>API Docs</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </header>
  );
};
