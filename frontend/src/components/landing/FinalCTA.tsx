import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 md:py-14 relative overflow-hidden reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white border border-indigo-700/40 shadow-2xl">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200 border border-white/20 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              <span>START INTELLIGENT DECISION MAKING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Make Smarter Business Decisions?
            </h2>

            <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Explore your business data, discover valuable insights and unlock the power of
              intelligent analytics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-white text-indigo-950 hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                onClick={handleExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-indigo-800/60 hover:bg-indigo-800 text-white border border-indigo-600/50 backdrop-blur-sm transition-all"
              >
                Explore Platform
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-indigo-200/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                PostgreSQL & Alembic Migrations
              </span>
              <span>•</span>
              <span>Zero Fabricated Metrics</span>
              <span>•</span>
              <span>Docker & Local Setup Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
