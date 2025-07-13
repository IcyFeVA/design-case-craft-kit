
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import UIGallery from "./pages/UIGallery";
import MindSpaceCaseStudy from "./pages/MindSpaceCaseStudy";
import EcommerceCaseStudy from "./pages/EcommerceCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<Index />} />
          <Route path="/mindspace-case-study" element={<MindSpaceCaseStudy />} />
          <Route path="/ecommerce-case-study" element={<EcommerceCaseStudy />} />
          <Route path="/ui-gallery" element={<UIGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
