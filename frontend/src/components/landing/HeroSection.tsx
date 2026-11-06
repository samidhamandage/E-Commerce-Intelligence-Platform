import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Brain,
  LineChart,
  ShoppingBag,
  Users,
  Package,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { useTheme } from '../../hooks/useTheme';

const PREVIEW_REVENUE_SERIES = [
  { month: 'Jan', revenue: 42000, orders: 480 },
  { month: 'Feb', revenue: 58000, orders: 620 },
  { month: 'Mar', revenue: 51000, orders: 590 },
  { month: 'Apr', revenue: 79000, orders: 840 },
  { month: 'May', revenue: 86000, orders: 930 },
  { month: 'Jun', revenue: 114000, orders: 1210 },
  { month: 'Jul', revenue: 138000, orders: 1450 },
];

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-10 md:pt-10 md:pb-12 overflow-hidden scroll-mt-24 reveal-on-scroll">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              Turn E-Commerce Data Into{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Smarter Business Decisions.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transform complex e-commerce data into actionable business intelligence.
              Analyse sales performance, understand customer behaviour, discover product
              opportunities and forecast future business trends through one intelligent analytics
              platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#features"
                onClick={handleExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all hover:scale-[1.02]"
              >
                Explore Platform
                <ChevronRight className="h-4 w-4" />
              </a>
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Three Short Highlights */}
            <div className="pt-5 border-t border-slate-200 dark:border-[#263449] grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                <div className="h-7 w-7 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Advanced Data Analytics
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                <div className="h-7 w-7 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Machine Learning Insights
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                <div className="h-7 w-7 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <LineChart className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Intelligent Forecasting
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/20 via-slate-200/50 to-slate-200/10 dark:from-indigo-500/30 dark:via-[#263449] dark:to-transparent shadow-xl">
              <div className="rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#263449] overflow-hidden">
                {/* Console Window Header */}
                <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#172033] border-b border-slate-200 dark:border-[#263449] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 ml-1.5 hidden sm:inline">
                      console.ecommerce-intel.io/overview
                    </span>
                  </div>

                  {/* Illustrative Data Notice Badge */}
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
                    Preview Data
                  </span>
                </div>

                {/* Dashboard Inner Workspace */}
                <div className="p-4 space-y-3.5">
                  {/* Top KPI Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                      <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                        Monthly GMV
                      </div>
                      <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        $138.4K
                      </div>
                      <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5">
                        <TrendingUp className="h-3 w-3" /> +21.4%
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                      <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                        Completed Orders
                      </div>
                      <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        1,450
                      </div>
                      <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5">
                        <ShoppingBag className="h-3 w-3" /> 98.2% deliv.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                      <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                        Avg Order Value
                      </div>
                      <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        $95.45
                      </div>
                      <div className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                        4.2 items/cart
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                      <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                        Satisfaction
                      </div>
                      <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        4.6 / 5.0
                      </div>
                      <div className="text-[10px] font-medium text-amber-500 mt-0.5">
                        ★ 99.4k reviews
                      </div>
                    </div>
                  </div>

                  {/* Revenue Curve Preview */}
                  <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-[#172033]/60 border border-slate-200/80 dark:border-[#263449]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">
                          Revenue & Volume Trajectory
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          (7 Months History)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400">
                        SES Alpha = 0.28
                      </span>
                    </div>

                    <div className="h-32 sm:h-40 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={PREVIEW_REVENUE_SERIES}
                          margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="heroRevGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.35} />
                              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="month"
                            tick={{ fill: isDark ? '#94A3B8' : '#64748B', fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis
                            tick={{ fill: isDark ? '#94A3B8' : '#64748B', fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(v) => `$${v / 1000}k`}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: isDark ? '#172033' : '#FFFFFF',
                              borderColor: isDark ? '#263449' : '#E2E8F0',
                              borderRadius: '0.5rem',
                              fontSize: '11px',
                              color: isDark ? '#F8FAFC' : '#0F172A',
                            }}
                            formatter={(value: any) => [`$${value.toLocaleString()}`, 'Revenue']}
                          />
                          <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#6366F1"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#heroRevGrad)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Customer Clusters & Top Categories Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* RFM Segmentation Mini */}
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-indigo-500" />
                          RFM Clusters (K=4)
                        </span>
                        <span className="text-[10px] text-slate-500">K-Means</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Champions</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            28.4%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full w-[28.4%]" />
                        </div>
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-slate-600 dark:text-slate-300">At-Risk Accounts</span>
                          <span className="font-semibold text-amber-500">18.2%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full w-[18.2%]" />
                        </div>
                      </div>
                    </div>

                    {/* Product Performance Mini */}
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#172033] border border-slate-200/80 dark:border-[#263449]">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Package className="h-3.5 w-3.5 text-cyan-500" />
                          Category Velocity
                        </span>
                        <span className="text-[10px] text-slate-500">Top GMV</span>
                      </div>
                      <div className="space-y-1 text-[11px]">
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="truncate">Health & Beauty</span>
                          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                            $1.25M
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="truncate">Computers & Acc.</span>
                          <span className="font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                            $1.08M
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="truncate">Bed, Bath & Table</span>
                          <span className="font-mono text-slate-600 dark:text-slate-400 font-medium">
                            $980K
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
