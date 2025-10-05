import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Hero />
      <Features />
      <DashboardPreview />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
