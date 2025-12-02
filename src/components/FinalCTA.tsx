import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { EARLY_ACCESS_URL } from "@/lib/constants";
import EmailForm from "./EmailForm";

const FinalCTA = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleEarlyAccessClick = () => {
    if (EARLY_ACCESS_URL) {
      window.open(EARLY_ACCESS_URL, "_blank", "noopener,noreferrer");
      return;
    }
    setShowEmailForm(true);
  };

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(0_0%_98%_/_0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-6xl md:text-7xl font-display font-bold leading-tight">
              Join the GT-R's <span className="text-gradient">new home</span>.
            </h2>
            
            <p className="text-2xl text-muted-foreground">
              Global marketplace for GT-R enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-lg px-12"
                onClick={handleEarlyAccessClick}
              >
                Follow us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-3 pt-10">
              {[
                "Verified listings only",
                "Build for GT-R owners",
                "Global community access",
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
      </section>
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} source="final-cta" />
    </>
  );
};

export default FinalCTA;
