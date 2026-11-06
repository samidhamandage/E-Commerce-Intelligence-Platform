import React from 'react';
import { Users, TrendingUp, Package, Brain, LineChart } from 'lucide-react';

const CAPABILITIES = [
  {
    title: 'Customer Intelligence',
    description: 'Track cohort retention, lifetime value, and behavioural patterns.',
    icon: Users,
    color: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/60',
  },
  {
    title: 'Sales Analytics',
    description: 'Monitor GMV, order volume, transaction values, and regional momentum.',
    icon: TrendingUp,
    color: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60',
  },
  {
    title: 'Product Intelligence',
    description: 'Identify high-margin categories, catalog velocity, and stock turnover.',
    icon: Package,
    color: 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/60',
  },
  {
    title: 'Machine Learning',
    description: 'Unsupervised K-Means clustering (k=4) and RFM quintile segmentation.',
    icon: Brain,
    color: 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/80 dark:border-purple-800/60',
  },
  {
    title: 'Revenue Forecasting',
    description: 'Simple Exponential Smoothing predicting multi-month revenue trajectory.',
    icon: LineChart,
    color: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-800/60',
  },
];

export const TrustHighlights: React.FC = () => {
  return (
    <section className="py-6 md:py-8 border-y border-slate-200/80 dark:border-[#263449]/80 bg-slate-50/60 dark:bg-[#111827]/40 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Enterprise Decision Architecture
          </span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Engineered For Modern High-Volume E-Commerce
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-4 rounded-xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all hover:shadow-md group h-full flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-9 w-9 rounded-lg ${cap.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
