import React from 'react';
import { Database, Binary, BrainCircuit, LayoutDashboard, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    stepNumber: '01',
    title: 'Data Collection',
    description:
      'Collect customer, order, product, seller, payment and review information across 9 relational tables.',
    icon: Database,
    accent: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30',
  },
  {
    stepNumber: '02',
    title: 'Data Processing',
    description:
      'Process and prepare the information using Python and Pandas with schema validation and type normalization.',
    icon: Binary,
    accent: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
  },
  {
    stepNumber: '03',
    title: 'Intelligent Analysis',
    description:
      'Apply analytics methods and Machine Learning techniques including K-Means clustering and exponential smoothing.',
    icon: BrainCircuit,
    accent: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30',
  },
  {
    stepNumber: '04',
    title: 'Business Insights',
    description:
      'Present results through interactive dashboards, Power BI semantic models, and real-time decision consoles.',
    icon: LayoutDashboard,
    accent: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="solutions" className="py-10 md:py-14 bg-slate-50/60 dark:bg-[#0B1120] border-t border-slate-200/80 dark:border-[#263449]/80 scroll-mt-24 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            System Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
            From Raw Data to Business Intelligence.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            A deterministic, auditable four-stage data pipeline transforming raw immutable
            records into executive decision assets.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-emerald-500/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`h-11 w-11 rounded-xl flex items-center justify-center border ${step.accent} group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-black font-mono text-slate-300 dark:text-slate-700 group-hover:text-indigo-500/50 transition-colors">
                        {step.stepNumber}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-0.5">
                      Step {idx + 1}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#263449]/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>Phase Complete</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
