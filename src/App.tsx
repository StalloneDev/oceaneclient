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

function MainPage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <CompanyProfile />
      <ProductsSection />
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
