
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
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
import AIDrivenDesign from "./pages/AIDrivenDesign";
import Timeline from "./pages/Timeline";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          {/* Dev Route Widget - only visible in development */}
          {/* {import.meta.env.MODE === "development" && (
            <div className="fixed bottom-4 right-4 z-[9999] bg-background/95 border border-border rounded-lg shadow-lg p-3 text-xs min-w-[120px] max-w-[180px] backdrop-blur-sm">
              <div className="font-semibold mb-2 text-sm text-foreground">Routes</div>
              <ul className="list-none m-0 p-0 space-y-1">
                <li><a href="/case-study" className="text-primary hover:text-primary/80 no-underline">Default Case Study</a></li>
                <li><a href="/mindspace-case-study" className="text-primary hover:text-primary/80 no-underline">MindSpace Case Study</a></li>
                <li><a href="/ecommerce-case-study" className="text-primary hover:text-primary/80 no-underline">Ecommerce Case Study</a></li>
                <li><a href="/txcms-case-study" className="text-primary hover:text-primary/80 no-underline">Txcms Case Study</a></li>
              </ul>
            </div>
          )} */}
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/case-study" element={<Index />} />
           <Route path="/mindspace-case-study" element={<MindSpaceCaseStudy />} />
           <Route path="/ecommerce-case-study" element={<EcommerceCaseStudy />} />
           <Route path="/txcms-case-study" element={<TxcmsCaseStudy />} />
           <Route path="/tesla-watch-app" element={<TeslaWatchApp />} />
           <Route path="/vstage" element={<VStage />} />
           <Route path="/crushy-case-study" element={<CrushyCaseStudy />} />
           <Route path="/ai-driven-design" element={<AIDrivenDesign />} />
           <Route path="/ui-gallery" element={<UIGallery />} />
           <Route path="/motion" element={<Motion />} />
           <Route path="/timeline" element={<Timeline />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
