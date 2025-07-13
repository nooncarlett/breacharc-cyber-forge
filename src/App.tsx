import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import VAPT from "./pages/services/VAPT";
import RedTeaming from "./pages/services/RedTeaming";
import AIMLSecurity from "./pages/services/AIMLSecurity";
import CloudSecurity from "./pages/services/CloudSecurity";
import Compliance from "./pages/services/Compliance";
import DarkWebMonitoring from "./pages/services/DarkWebMonitoring";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Careers from "./pages/Careers";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/vapt" element={<VAPT />} />
            <Route path="/services/red-teaming" element={<RedTeaming />} />
            <Route path="/services/ai-ml-security" element={<AIMLSecurity />} />
            <Route path="/services/cloud-security" element={<CloudSecurity />} />
            <Route path="/services/compliance" element={<Compliance />} />
            <Route path="/services/dark-web-monitoring" element={<DarkWebMonitoring />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
