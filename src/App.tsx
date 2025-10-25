import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmartIoTDashboard from "./pages/projects/SmartIoTDashboard";
import BusinessAnalytics from "./pages/projects/BusinessAnalytics";
import SecureAuthentication from "./pages/projects/SecureAuthentication";
import NetworkMonitoring from "./pages/projects/NetworkMonitoring";
import ShopifyStore from "./pages/projects/ShopifyStore";
import MarketingLanding from "./pages/projects/MarketingLanding";
import PersonalBlog from "./pages/projects/PersonalBlog";
import UserDashboard from "./pages/projects/UserDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/smart-iot-dashboard" element={<SmartIoTDashboard />} />
          <Route path="/projects/business-analytics" element={<BusinessAnalytics />} />
          <Route path="/projects/secure-authentication" element={<SecureAuthentication />} />
          <Route path="/projects/network-monitoring" element={<NetworkMonitoring />} />
          <Route path="/projects/shopify-store" element={<ShopifyStore />} />
          <Route path="/projects/marketing-landing" element={<MarketingLanding />} />
          <Route path="/projects/personal-blog" element={<PersonalBlog />} />
          <Route path="/projects/user-dashboard" element={<UserDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
