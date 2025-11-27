import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
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
      <div className="relative z-10 w-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-28 md:py-32 flex justify-center">
        <div className="w-full max-w-7xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight">
            <span className="flex flex-col items-center justify-center gap-2">
              <span className="block md:hidden leading-tight text-balance">
                <span className="block">GTRX — Where</span>
                <span className="block">
                  <span className="text-gradient">GT-R Culture</span> Lives
                </span>
              </span>
              <span className="hidden md:block text-balance">
                GTRX — Where <span className="text-gradient">GT-R Culture</span> Lives
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
