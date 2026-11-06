import React from 'react';
import {
  LineChart,
  UserCheck,
  Compass,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

const BENEFITS = [
  {
    title: 'Understand Business Performance',
    description:
      'Gain holistic visibility across multi-category sales volume, revenue velocity, regional distribution, and delivery turnaround metrics.',
    icon: LineChart,
    stat: '360° Visibility',
  },
  {
    title: 'Improve Customer Retention',
    description:
      'Detect slipping cohorts and at-risk accounts early. Mobilize tailored reactivation campaigns using empirical RFM quintile insights.',
    icon: UserCheck,
    stat: 'RFM Precision',
  },
  {
    title: 'Identify Growth Opportunities',
    description:
      'Pinpoint top-performing product categories, high-velocity merchants, and peak purchasing timeframes to scale catalog operations.',
    icon: Compass,
    stat: 'High-Margin Focus',
  },
  {
    title: 'Make Data-Driven Decisions',
    description:
      'Replace guesswork with verified statistical modeling, time-series exponential smoothing, and database-level telemetry.',
    icon: TrendingUp,
    stat: 'Zero Guesswork',
  },
];

export const BusinessBenefits: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-slate-50/60 dark:bg-[#0B1120] border-t border-slate-200/80 dark:border-[#263449]/80 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Strategic Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
            Make Better Decisions With Better Data.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Engineered to empower e-commerce founders, operators, and data analysts with
            uncompromising commercial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm hover:border-indigo-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-[#263449]">
                      {b.stat}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#263449] flex items-center gap-1.5 text-[11px] font-medium text-indigo-600 dark:text-indigo-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
