import React from 'react';
import {
  TrendingUp,
  Users,
  Grid3X3,
  AlertOctagon,
  Package,
  Store,
  Truck,
  CreditCard,
  LineChart,
  Lightbulb,
  ArrowUpRight,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Sales Intelligence',
    description: 'Monitor revenue, sales trends, order performance and business growth.',
    icon: TrendingUp,
    endpoint: '/api/v1/sales',
    accent: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
  },
  {
    title: 'Customer Intelligence',
    description: 'Understand purchasing patterns, customer behaviour and customer value.',
    icon: Users,
    endpoint: '/api/v1/customers',
    accent: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20',
  },
  {
    title: 'RFM Segmentation',
    description: 'Group customers based on Recency, Frequency and Monetary value.',
    icon: Grid3X3,
    endpoint: '/api/v1/rfm',
    accent: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
  },
  {
    title: 'Customer Engagement Risk',
    description: 'Identify customers who may be becoming inactive using engagement-risk analysis.',
    icon: AlertOctagon,
    endpoint: '/api/v1/engagement',
    accent: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
  },
  {
    title: 'Product Intelligence',
    description: 'Analyse product performance, category trends and customer demand.',
    icon: Package,
    endpoint: '/api/v1/products',
    accent: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
  },
  {
    title: 'Seller Intelligence',
    description: 'Evaluate seller performance and sales contribution.',
    icon: Store,
    endpoint: '/api/v1/sellers',
    accent: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
  },
  {
    title: 'Delivery & Satisfaction',
    description: 'Analyse delivery performance, shipping patterns and customer reviews.',
    icon: Truck,
    endpoint: '/api/v1/delivery',
    accent: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/20',
  },
  {
    title: 'Payment Intelligence',
    description: 'Understand payment preferences and transaction patterns.',
    icon: CreditCard,
    endpoint: '/api/v1/payments',
    accent: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20',
  },
  {
    title: 'Sales Forecasting',
    description: 'Estimate future sales using historical revenue trends.',
    icon: LineChart,
    endpoint: '/api/v1/forecasting',
    accent: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20',
  },
  {
    title: 'Business Insights',
    description: 'Generate meaningful business insights from analytical results.',
    icon: Lightbulb,
    endpoint: '/api/v1/insights',
    accent: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20',
  },
];

export const CoreFeatures: React.FC = () => {
  return (
    <section id="features" className="py-10 md:py-14 bg-slate-50/60 dark:bg-[#0B1120] border-t border-slate-200/80 dark:border-[#263449]/80 scroll-mt-24 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Platform Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
            Everything You Need to Understand Your Business.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Ten specialized analytical intelligence modules, engineered specifically for multi-category
            e-commerce platforms and decision makers.
          </p>
        </div>

        {/* 10-Feature Responsive Uniform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center border ${feat.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-0.5">
                      {feat.endpoint}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#263449]/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>FastAPI + SQLAlchemy</span>
                  <span className="font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
                    Live Telemetry
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
