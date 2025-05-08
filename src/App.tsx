import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { AuthenticatedSidebar } from "./components/AuthenticatedSidebar";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Tournaments from "./pages/Tournaments";
import TournamentsInfo from "./pages/TournamentsInfo";
import SponsorshipInfo from "./pages/SponsorshipInfo";
import NotFound from "./pages/NotFound";
import OTPVerification from "./pages/OTPVerification";
import ResetPassword from "./pages/ResetPassword";
import TournamentPayment from "./pages/TournamentPayment";
import TournamentRules from "./pages/TournamentRules";
import MatchDetails from "./pages/MatchDetails";
import Statistics from "./pages/Statistics";
import Disputes from "./pages/Disputes";
import Rewards from "./pages/Rewards";
import ValidatorDashboard from "./pages/ValidatorDashboard";
import TwoFactorSetup from "./pages/TwoFactorSetup";
import Sponsorship from "./pages/Sponsorship";
import About from "./pages/About";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import CookiesPage from "./pages/Cookies";
import SupportPage from "./pages/Support";

const queryClient = new QueryClient();


const AuthenticatedLayout = () => {
  return (
    <div className="relative min-h-screen">
        <AuthenticatedSidebar />
        <div className="p-4 lg:ml-64">
          <Outlet />
        </div>
      </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />

        {/* Pages publiques sans sidebar */}
        <Route path="/tournaments-info" element={<TournamentsInfo />} />
        <Route path="/sponsorship-info" element={<SponsorshipInfo />} />
        <Route path="/about" element={<About />} />

        {/* Pages authentifiées avec sidebar */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournament-payment" element={<TournamentPayment />} />
          <Route path="/tournament-rules" element={<TournamentRules />} />
          <Route path="/match-details/:id" element={<MatchDetails />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/disputes" element={<Disputes />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/validator-dashboard" element={<ValidatorDashboard />} />
          <Route path="/two-factor-setup" element={<TwoFactorSetup />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/tournament/details/:id" element={<TournamentDetails />} />
          <Route path="/tournament/registration/:id" element={<TournamentRegistration />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const TournamentDetails = () => <div>Tournament Details Placeholder</div>;
const TournamentRegistration = () => <div>Tournament Registration Placeholder</div>;

export default App;