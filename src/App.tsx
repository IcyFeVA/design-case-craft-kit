
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Index from "./pages/DefaultCaseStudy";
import UIGallery from "./pages/UIGallery";
import MindSpaceCaseStudy from "./pages/MindSpaceCaseStudy";
import EcommerceCaseStudy from "./pages/EcommerceCaseStudy";
import TxcmsCaseStudy from "./pages/TxcmsCaseStudy";
import TeslaWatchApp from "./pages/TeslaWatchApp";
import NotFound from "./pages/NotFound";
import VStage from "./pages/VStage";
import Motion from "./pages/3DMotion";
import CrushyCaseStudy from "./pages/CrushyCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Dev Route Widget - only visible in development */}
        {import.meta.env.MODE === "development" && (
          <div
            style={{
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 9999,
              background: "rgba(255,255,255,0.95)",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              padding: "8px 12px",
              fontSize: 12,
              minWidth: 120,
              maxWidth: 180,
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4, fontSize: 13 }}>Routes</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li><a href="/case-study" style={{ color: "#2563eb", textDecoration: "none" }}>Default Case Study</a></li>
              <li><a href="/mindspace-case-study" style={{ color: "#2563eb", textDecoration: "none" }}>MindSpace Case Study</a></li>
              <li><a href="/ecommerce-case-study" style={{ color: "#2563eb", textDecoration: "none" }}>Ecommerce Case Study</a></li>
              <li><a href="/txcms-case-study" style={{ color: "#2563eb", textDecoration: "none" }}>Txcms Case Study</a></li>
            </ul>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<Index />} />
          <Route path="/mindspace-case-study" element={<MindSpaceCaseStudy />} />
          <Route path="/ecommerce-case-study" element={<EcommerceCaseStudy />} />
          <Route path="/txcms-case-study" element={<TxcmsCaseStudy />} />
          <Route path="/tesla-watch-app" element={<TeslaWatchApp />} />
          <Route path="/vstage" element={<VStage />} />
          <Route path="/crushy-case-study" element={<CrushyCaseStudy />} />
          <Route path="/ui-gallery" element={<UIGallery />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
