import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import logo from "@/assets/logo.svg";
import EmailForm from "./EmailForm";

const Hero = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  
  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium GT-R showcase" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight">
            <span className="inline-flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-4 text-center">
              <img
                src={logo}
                alt="GTRX"
                className="h-12 sm:h-14 w-auto drop-shadow"
              />
              <span className="sr-only">GTRX</span>
              <span className="text-balance lg:whitespace-nowrap">
                Where <span className="text-gradient">GT-R Culture</span> Lives
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The global marketplace and community built for GT-R enthusiasts, collectors, and sellers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => setShowEmailForm(true)}
            >
              Get Early Access
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-secondary" 
              size="lg"
              onClick={() => setShowEmailForm(true)}
            >
              Join the Waitlist
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-10">
            {[
              "Verified listings only",
              "Built by GT-R owners",
              "Global community access",
              "Zero hidden fees",
            ].map((pill) => (
              <div
                key={pill}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-border/60 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
      
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} source="hero" />
    </>
  );
};

export default Hero;
