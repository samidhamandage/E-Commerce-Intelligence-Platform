import React from 'react';
import { useHealth } from '../hooks/useHealth';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { Server, Shield, Database, RefreshCw, Moon, Sun, Palette } from 'lucide-react';

export const Settings: React.FC = () => {
  const { data: health, isLoading, refetch } = useHealth();
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="pb-2 border-b border-slate-200 dark:border-[#263449] flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Platform Settings & Diagnostics
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            System configuration, active environment variables, and authentication parameters.
          </p>
        </div>
        <button
          onClick={() => refetch()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="space-y-4 text-xs">
        {/* Appearance & Theme Setting */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <Palette className="h-4 w-4 text-indigo-500" />
            Appearance & Theme Preference
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Select your preferred display theme. Preferences are persisted across sessions and pages.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                theme === 'dark'
                  ? 'bg-indigo-50/50 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
                  : 'bg-slate-50 dark:bg-[#0B1120] border-slate-200 dark:border-[#263449] hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="p-2 rounded-lg bg-[#111827] text-amber-400 border border-[#263449]">
                <Moon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Dark Mode
                  {theme === 'dark' && (
                    <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase">
                      (Active)
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Deep slate & navy enterprise aesthetic (#0B1120) with high contrast.
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                theme === 'light'
                  ? 'bg-indigo-50/50 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
                  : 'bg-slate-50 dark:bg-[#0B1120] border-slate-200 dark:border-[#263449] hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="p-2 rounded-lg bg-white text-indigo-600 border border-slate-200 shadow-sm">
                <Sun className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Light Mode
                  {theme === 'light' && (
                    <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase">
                      (Active)
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Clean crisp paper aesthetic (#F8FAFC) with balanced contrast.
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Backend Connectivity */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Server className="h-4 w-4 text-indigo-500" />
            Backend API Configuration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449]">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">API Base URL</span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400 mt-1 block">
                {import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449]">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Environment</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 mt-1 block">
                {health?.system.environment || 'development'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449]">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Python Runtime</span>
              <span className="font-mono text-slate-800 dark:text-slate-200 mt-1 block">
                {health?.system.python_version || 'Detecting...'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449]">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Debug Mode</span>
              <span className="font-mono text-amber-600 dark:text-amber-400 mt-1 block">
                {health?.system.debug ? 'True (Development)' : 'False (Production)'}
              </span>
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Database className="h-4 w-4 text-indigo-500" />
            PostgreSQL Connection Telemetry
          </h3>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Heartbeat Status:</span>
              <span className="font-medium text-emerald-600 dark:text-emerald-400">
                {health?.database.connected ? 'Operational' : 'Disconnected'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Measured Query Latency:</span>
              <span className="font-mono text-slate-800 dark:text-slate-200">{health?.database.latency_ms ?? 0} ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Database Engine:</span>
              <span className="font-mono text-slate-700 dark:text-slate-300">PostgreSQL 16 (SQLAlchemy 2.0 ORM)</span>
            </div>
          </div>
        </div>

        {/* Current Auth Profile */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Shield className="h-4 w-4 text-indigo-500" />
            Active Session & Security
          </h3>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-[#263449] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Active User:</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">{user?.full_name || 'Anonymous User'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Email:</span>
              <span className="font-mono text-slate-700 dark:text-slate-300">{user?.email || 'N/A'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">Security Standard:</span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400">JWT (HS256) + Bcrypt Salted Hashes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
