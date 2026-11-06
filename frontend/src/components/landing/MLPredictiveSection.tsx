import React from 'react';
import {
  Brain,
  Grid3X3,
  LineChart as LineChartIcon,
  Sparkles,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { useTheme } from '../../hooks/useTheme';

const FORECAST_ILLUSTRATION = [
  { month: 'M1', actual: 62000, forecast: null },
  { month: 'M2', actual: 68000, forecast: null },
  { month: 'M3', actual: 74000, forecast: null },
  { month: 'M4', actual: 79000, forecast: null },
  { month: 'M5', actual: 86000, forecast: null },
  { month: 'M6', actual: 95000, forecast: 95000 },
  { month: 'M7', actual: null, forecast: 104000 },
  { month: 'M8', actual: null, forecast: 111000 },
  { month: 'M9', actual: null, forecast: 118000 },
];

export const MLPredictiveSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="analytics" className="py-10 md:py-14 scroll-mt-24 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200/80 dark:border-cyan-800/60 mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>STATISTICAL & MACHINE LEARNING MODELS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Go Beyond Traditional Analytics.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Understand customer behaviour and discover future business opportunities through
            data-driven modelling.
          </p>
        </div>

        {/* 3 Model Feature Cards (Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* A. K-Means Clustering */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="h-9 w-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 flex items-center justify-center mb-3.5">
                <Brain className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold">
                Unsupervised Learning
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                K-Means Clustering
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Groups customers based on multidimensional purchasing behaviour. Features are
                normalized with Scikit-learn StandardScaler into 4 natural clusters (k=4) revealing
                distinct buyer personas.
              </p>

              {/* Cluster Preview Cards */}
              <div className="mt-4 space-y-2">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Cluster 0: High-Value VIPs
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">Low R · High F · High M</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Cluster 1: Recent Single Buyers
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">Low R · F=1 · Mid M</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Cluster 2: Slipping Mid-Tier
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">Mid R · F=2+ · Mid M</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Cluster 3: Dormant Accounts
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">High R · F=1 · Low M</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#263449] text-[11px] text-slate-500 flex items-center justify-between">
              <span>StandardScaler Normalized</span>
              <span className="font-mono text-purple-600 dark:text-purple-400">k=4 Clusters</span>
            </div>
          </div>

          {/* B. RFM Analysis */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="h-9 w-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center mb-3.5">
                <Grid3X3 className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                Behavioral Scoring
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                RFM Segmentation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Measures customer value through Recency (days since last order), Frequency (distinct
                order count), and Monetary (total spend). Scored on 1-5 quintiles using Pandas qcut
                and mapped into actionable cohorts.
              </p>

              {/* RFM Score Quintile Matrix */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Champions (R: 4-5, F: 4-5, M: 4-5)
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                    Cohort VIP
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-4/5" />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Potential Loyalists (R: 3-5, F: 1-3)
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[10px]">
                    Nurture
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full w-3/5" />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    At-Risk Customers (R: 1-2, F: 2-5)
                  </span>
                  <span className="text-amber-500 font-bold text-[10px]">Re-engage</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-2/5" />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#263449] text-[11px] text-slate-500 flex items-center justify-between">
              <span>Pandas Quintile Scoring</span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400">1 to 5 Scale</span>
            </div>
          </div>

          {/* C. Sales Forecasting */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="h-9 w-9 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50 flex items-center justify-center mb-3.5">
                <LineChartIcon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold">
                Time-Series Forecasting
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Sales Forecasting
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Applies Simple Exponential Smoothing (SES) from Statsmodels across monthly revenue
                aggregates. Validated with Mean Absolute Error (MAE), RMSE, and MAPE to reliably
                estimate future turnover.
              </p>

              {/* Forecast Mini Chart */}
              <div className="mt-4 p-2.5 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#263449]">
                <div className="flex items-center justify-between text-[10px] mb-1.5">
                  <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Historical
                  </span>
                  <span className="flex items-center gap-1 font-medium text-cyan-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Projected Horizon
                  </span>
                </div>

                <div className="h-28 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={FORECAST_ILLUSTRATION} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#263449' : '#E2E8F0'} />
                      <XAxis dataKey="month" tick={{ fill: isDark ? '#94A3B8' : '#64748B', fontSize: 10 }} />
                      <YAxis tick={{ fill: isDark ? '#94A3B8' : '#64748B', fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isDark ? '#172033' : '#FFFFFF',
                          borderColor: isDark ? '#263449' : '#E2E8F0',
                          fontSize: '11px',
                          borderRadius: '0.5rem',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="actual"
                        stroke="#6366F1"
                        strokeWidth={2}
                        dot={{ r: 2 }}
                        isAnimationActive={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="forecast"
                        stroke="#06B6D4"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        dot={{ r: 3 }}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#263449] text-[11px] text-slate-500 flex items-center justify-between">
              <span>Statsmodels SES</span>
              <span className="font-mono text-cyan-600 dark:text-cyan-400">MAE / RMSE Eval</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
