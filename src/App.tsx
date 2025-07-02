import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompanyProfile from "@/components/company-profile";
import ProductsSection from "@/components/products-section";
import GuaranteesAdvantagesSection from "@/components/guarantees-advantages-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect, useRef } from "react";

function MainPage() {
  const adsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window && (window as any).adsbygoogle && adsRef.current) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (e) {
        // ignore
      }
    }
  }, []);
  return (
    <>
      <Navigation />
      <HeroSection />
      <CompanyProfile />
      <ProductsSection />
      <div ref={adsRef} className="flex justify-center my-8">
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2547821477385099"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <GuaranteesAdvantagesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
