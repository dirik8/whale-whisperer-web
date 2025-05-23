
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ApplicationPage from "./pages/ApplicationPage";
import NotFound from "./pages/NotFound";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import EducationHubPage from "./pages/EducationHubPage";
import CoachingPage from "./pages/CoachingPage";
import VIPUniversityPage from "./pages/VIPUniversityPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import RiskDisclaimerPage from "./pages/RiskDisclaimerPage";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/programs/vip-university" element={<VIPUniversityPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/apply" element={<ApplicationPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/education-hub" element={<EducationHubPage />} />
                <Route path="/coaching" element={<CoachingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/risk-disclaimer" element={<RiskDisclaimerPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
