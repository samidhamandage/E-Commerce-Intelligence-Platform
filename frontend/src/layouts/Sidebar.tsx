import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Grid3X3,
  AlertOctagon,
  Package,
  Store,
  Truck,
  CreditCard,
  LineChart,
  Cpu,
  CheckCircle2,
  Table,
  Lightbulb,
  Settings as SettingsIcon,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Executive Overview', path: '/', icon: LayoutDashboard },
  { name: 'Sales Intelligence', path: '/sales', icon: TrendingUp },
  { name: 'Customer Intelligence', path: '/customers', icon: Users },
  { name: 'RFM Segmentation', path: '/rfm', icon: Grid3X3 },
  { name: 'Customer Risk', path: '/customer-risk', icon: AlertOctagon },
  { name: 'Product Intelligence', path: '/products', icon: Package },
  { name: 'Seller Intelligence', path: '/sellers', icon: Store },
  { name: 'Delivery & Satisfaction', path: '/delivery', icon: Truck },
  { name: 'Payment Intelligence', path: '/payments', icon: CreditCard },
  { name: 'Forecasting', path: '/forecasting', icon: LineChart },
  { name: 'Model Performance', path: '/model-performance', icon: Cpu },
  { name: 'Data Quality', path: '/data-quality', icon: CheckCircle2, badge: 'Live' },
  { name: 'Data Explorer', path: '/data-explorer', icon: Table },
  { name: 'Business Insights', path: '/insights', icon: Lightbulb },
  { name: 'Settings', path: '/settings', icon: SettingsIcon },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white dark:bg-[#111827] border-r border-slate-200 dark:border-[#263449] flex flex-col flex-shrink-0 h-screen sticky top-0 select-none transition-colors duration-200">
      {/* Brand Header */}
      <div className="h-16 flex items-center gap-3 px-5 border-b border-slate-200 dark:border-[#263449]">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white truncate">
            E-Commerce Intel
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider truncate">
            DECISION SUPPORT
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-3 px-3 space-y-0.5">
        <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Platform Navigation
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-600/30 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`
              }
            >
              <div className="flex items-center gap-2.5 truncate">
                <Icon className="h-4 w-4 flex-shrink-0 opacity-80" />
                <span className="truncate">{item.name}</span>
              </div>
              {item.badge && (
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

        {/* View Public Landing Page */}
        <div className="pt-2">
          <Link
            to="/landing"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="h-3.5 w-3.5" />
              Landing Page
            </span>
            <span className="text-[10px] font-mono uppercase text-indigo-500">Public</span>
          </Link>
        </div>
      </div>

      {/* Dataset & Phase Footer */}
      <div className="p-3.5 border-t border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#0B1120]/40">
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span>Olist Dataset</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Stage 1 Active</span>
        </div>
        <div className="mt-1 text-[10px] text-slate-400 dark:text-slate-500 truncate">
          PostgreSQL 16 • FastAPI • React TS
        </div>
      </div>
    </aside>
  );
};
