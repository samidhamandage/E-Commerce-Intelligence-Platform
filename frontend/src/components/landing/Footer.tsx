import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-[#263449] bg-white dark:bg-[#0B1120] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white">
                E-Commerce Intelligence
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Enterprise decision support and analytical intelligence platform built on verified
              e-commerce transaction data. Delivering real-time telemetry, RFM segmentation, and
              machine learning forecasting.
            </p>
            <div className="pt-1 text-[11px] font-mono text-slate-500">
              PostgreSQL 16 · FastAPI · React 18 · TypeScript
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleNavClick(e, '#features')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  onClick={(e) => handleNavClick(e, '#analytics')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Analytics & ML
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  About Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Analytics Modules */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform Modules
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Customer Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Sales Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  RFM Segmentation
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Sales Forecasting
                </Link>
              </li>
            </ul>
          </div>

          {/* Access & Docs */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform Console
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  to="/signup"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline block"
                >
                  Create Account →
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Sign In to Console
                </Link>
              </li>
              <li>
                <a
                  href="http://localhost:8000/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  FastAPI OpenAPI Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-slate-200 dark:border-[#263449] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} E-Commerce Intelligence & Decision Support Platform. All rights reserved.
          </div>
          <div>
            Built with PostgreSQL, FastAPI, React & TypeScript. Zero fabricated metrics.
          </div>
        </div>
      </div>
    </footer>
  );
};
