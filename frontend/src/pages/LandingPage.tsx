import React, { useEffect } from 'react';
import { Navbar } from '../components/landing/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { TrustHighlights } from '../components/landing/TrustHighlights';
import { AboutPlatform } from '../components/landing/AboutPlatform';
import { CoreFeatures } from '../components/landing/CoreFeatures';
import { MLPredictiveSection } from '../components/landing/MLPredictiveSection';
import { HowItWorks } from '../components/landing/HowItWorks';
import { TechStack } from '../components/landing/TechStack';
import { BusinessBenefits } from '../components/landing/BusinessBenefits';
import { FinalCTA } from '../components/landing/FinalCTA';
import { Footer } from '../components/landing/Footer';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      el.classList.add('transition-all', 'duration-500', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1120] dark:text-[#F8FAFC] transition-colors duration-200 selection:bg-indigo-600 selection:text-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust / Platform Highlights */}
        <TrustHighlights />

        {/* 4. About the Platform */}
        <AboutPlatform />

        {/* 5. Core Features (10 modules) */}
        <CoreFeatures />

        {/* 6. Machine Learning & Predictive Analytics */}
        <MLPredictiveSection />

        {/* 7. How It Works (4 steps) */}
        <HowItWorks />

        {/* 8. Technology Stack */}
        <TechStack />

        {/* 9. Business Benefits (4 cards) */}
        <BusinessBenefits />

        {/* 10. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};
