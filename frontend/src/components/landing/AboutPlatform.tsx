import React from 'react';
import {
  Database,
  Cpu,
  Layers,
  ArrowDown,
  CheckCircle,
  FileSpreadsheet,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    title: 'Data Collection',
    detail: 'Customers, orders, items, payments, reviews & geolocations',
    icon: FileSpreadsheet,
    badge: 'Raw Ingestion',
  },
  {
    title: 'Data Processing',
    detail: 'Pandas ETL, strict type casting, schema validation & null cleansing',
    icon: Cpu,
    badge: 'Python Pipeline',
  },
  {
    title: 'PostgreSQL Database',
    detail: '10 relational tables, indexed foreign keys & Alembic migrations',
    icon: Database,
    badge: 'Normalized Store',
  },
  {
    title: 'Analytics & Machine Learning',
    detail: 'K-Means clustering, RFM scoring & Simple Exponential Smoothing',
    icon: Layers,
    badge: 'Compute Engine',
  },
  {
    title: 'Interactive Dashboard',
    detail: 'FastAPI REST endpoints powering React 18, Vite & Recharts UI',
    icon: BarChart3,
    badge: 'Real-Time Console',
  },
  {
    title: 'Business Decisions',
    detail: 'Actionable customer retention, pricing & inventory decisions',
    icon: Lightbulb,
    badge: 'Growth Strategy',
  },
];

export const AboutPlatform: React.FC = () => {
  return (
    <section id="about" className="py-10 md:py-14 scroll-mt-24 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Platform Description & Business Objectives */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/60">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>ENTERPRISE ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              One Platform. Complete Business Intelligence.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              E-Commerce Intelligence & Decision Support Platform helps businesses understand
              their e-commerce operations through integrated analytics, customer intelligence and
              predictive modelling.
            </p>

            {/* Main Objectives List */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    True Relational Integrity
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Modeled across 9 complete Olist domain tables with indexed relationships and zero
                    synthetic placeholders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Zero Fabricated Metrics
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    No simulated charts or fabricated conversion numbers. Every computation reflects
                    actual transactional telemetry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Enterprise Decision Support
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Equip business leaders and analysts with RFM customer segmentation, delivery SLA
                    auditing, and SES sales forecasting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Connected Workflow Diagram */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-[#263449]">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                    Analytics Pipeline
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    End-to-End Decision Workflow
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-[#172033] text-slate-700 dark:text-slate-300">
                  ETL → ML → UI
                </span>
              </div>

              {/* Connected Steps */}
              <div className="space-y-2">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === WORKFLOW_STEPS.length - 1;
                  return (
                    <div key={step.title} className="relative">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] flex items-center justify-between gap-3 hover:border-indigo-500/50 transition-colors shadow-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="h-7 w-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                              {step.title}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                              {step.detail}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0B1120] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-[#263449] flex-shrink-0 hidden sm:inline">
                          {step.badge}
                        </span>
                      </div>

                      {!isLast && (
                        <div className="flex justify-center py-0.5 text-slate-400 dark:text-slate-600">
                          <ArrowDown className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
