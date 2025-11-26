import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyGTRX from "@/components/WhyGTRX";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Dealership from "@/components/Dealership";
import Pricing from "@/components/Pricing";
import Credibility from "@/components/Credibility";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhyGTRX />
      <Features />
      <AppPreview />
      <Dealership />
      <Pricing />
      <Credibility />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
