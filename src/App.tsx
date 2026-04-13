import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { EmergencySection } from "./components/EmergencySection";
import { ServicesGrid } from "./components/ServicesGrid";
import { Gallery } from "./components/Gallery";
import { CostEstimator } from "./components/CostEstimator";
import { BookingSystem } from "./components/BookingSystem";
import { MaintenanceTips } from "./components/MaintenanceTips";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-amber-500/30 selection:text-amber-900 font-sans">
      <Header />
      <main>
        <Hero />
        <EmergencySection />
        <ServicesGrid />
        <Gallery />
        <CostEstimator />
        <MaintenanceTips />
        <BookingSystem />
        <Reviews />
      </main>
      <Footer />
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;