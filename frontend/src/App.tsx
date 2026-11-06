import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { ThemeProvider } from './hooks/useTheme';
import { MainLayout } from './layouts/MainLayout';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { LandingPage } from './pages/LandingPage';
import { ExecutiveOverview } from './pages/ExecutiveOverview';
import { DataQuality } from './pages/DataQuality';
import { Settings } from './pages/Settings';
import { SalesIntelligence } from './pages/SalesIntelligence';
import { CustomerIntelligence } from './pages/CustomerIntelligence';
import { RFMSegmentation } from './pages/RFMSegmentation';
import { CustomerEngagementRisk } from './pages/CustomerEngagementRisk';
import { ProductIntelligence } from './pages/ProductIntelligence';
import { SellerAnalytics } from './pages/SellerAnalytics';
import { DeliveryAndSatisfaction } from './pages/DeliveryAndSatisfaction';
import { PaymentIntelligence } from './pages/PaymentIntelligence';
import { SalesForecast } from './pages/SalesForecast';
import { ModelPerformance } from './pages/ModelPerformance';
import { DataExplorer } from './pages/DataExplorer';
import { BusinessInsights } from './pages/BusinessInsights';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] flex items-center justify-center text-slate-500 dark:text-slate-400 text-xs font-mono">
        Authenticating session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const RootRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] flex items-center justify-center text-slate-500 dark:text-slate-400 text-xs font-mono">
        Loading platform...
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <MainLayout>
        <ExecutiveOverview />
      </MainLayout>
    );
  }

  return <LandingPage />;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Landing Page */}
            <Route path="/landing" element={<LandingPage />} />

            {/* Authentication Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/register" element={<Navigate to="/signup" replace />} />

            {/* Root index route: shows Landing Page when logged out, Executive Overview when logged in */}
            <Route path="/" element={<RootRoute />} />

            {/* Protected Platform Shell */}
            <Route
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/overview" element={<ExecutiveOverview />} />
              <Route path="/sales" element={<SalesIntelligence />} />
              <Route path="/customers" element={<CustomerIntelligence />} />
              <Route path="/rfm" element={<RFMSegmentation />} />
              <Route path="/customer-risk" element={<CustomerEngagementRisk />} />
              <Route path="/products" element={<ProductIntelligence />} />
              <Route path="/sellers" element={<SellerAnalytics />} />
              <Route path="/delivery" element={<DeliveryAndSatisfaction />} />
              <Route path="/payments" element={<PaymentIntelligence />} />
              <Route path="/forecasting" element={<SalesForecast />} />
              <Route path="/model-performance" element={<ModelPerformance />} />
              <Route path="/data-quality" element={<DataQuality />} />
              <Route path="/data-explorer" element={<DataExplorer />} />
              <Route path="/insights" element={<BusinessInsights />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};
