import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gtr.jpg";
import EmailForm from "./EmailForm";

const Hero = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight">
            GTRX — Where <span className="text-gradient">GT-R Culture</span> Lives
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-gradient">500+</div>
              <div className="text-sm text-muted-foreground">GT-Rs Listed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-gradient">2K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
      
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} />
    </>
  );
};

export default Hero;
