import React from 'react';
import {
  Code2,
  Server,
  Database,
  Brain,
  Container,
  BarChart,
  CheckCircle,
} from 'lucide-react';

const TECH_CATEGORIES = [
  {
    layer: 'Frontend',
    icon: Code2,
    badgeColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20',
    technologies: [
      { name: 'React 18', role: 'Component Architecture' },
      { name: 'TypeScript', role: 'Strict Type Safety' },
      { name: 'Tailwind CSS', role: 'Responsive Styling & Themes' },
      { name: 'Recharts', role: 'Data Visualization' },
    ],
  },
  {
    layer: 'Backend',
    icon: Server,
    badgeColor: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/20',
    technologies: [
      { name: 'Python 3.11+', role: 'Computational Runtime' },
      { name: 'FastAPI', role: 'High-Performance Async API' },
    ],
  },
  {
    layer: 'Database & ORM',
    icon: Database,
    badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
    technologies: [
      { name: 'PostgreSQL 16', role: 'Relational ACID Storage' },
      { name: 'SQLAlchemy 2.0', role: 'Typed ORM & Connection Pooling' },
    ],
  },
  {
    layer: 'Data Science & ML',
    icon: Brain,
    badgeColor: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
    technologies: [
      { name: 'Pandas', role: 'Data Manipulation & ETL' },
      { name: 'NumPy', role: 'Vectorized Mathematics' },
      { name: 'Scikit-learn', role: 'K-Means Clustering' },
      { name: 'Statsmodels', role: 'Exponential Smoothing' },
    ],
  },
  {
    layer: 'Infrastructure',
    icon: Container,
    badgeColor: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20',
    technologies: [
      { name: 'Docker', role: 'Multi-Container Isolation' },
      { name: 'Docker Compose', role: 'Orchestration & Networking' },
    ],
  },
  {
    layer: 'Analytics & BI',
    icon: BarChart,
    badgeColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
    technologies: [
      { name: 'Power BI', role: 'Direct Semantic Views' },
      { name: 'Alembic', role: 'Schema Versioning' },
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section id="technology" className="py-10 md:py-14 scroll-mt-24 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Enterprise Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-0.5">
            Built With Modern Technologies.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Engineered with industry-standard frameworks and statistical tools for peak reliability,
            fast query execution, and high analytical throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.layer}
                className="p-5 rounded-2xl bg-white dark:bg-[#172033] border border-slate-200 dark:border-[#263449] shadow-sm hover:border-indigo-500/40 transition-colors h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center border ${cat.badgeColor}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {cat.layer}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {cat.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-2 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200/80 dark:border-[#263449]/80 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-900 dark:text-white">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {tech.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
