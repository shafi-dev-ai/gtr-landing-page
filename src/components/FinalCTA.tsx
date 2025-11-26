import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EmailForm from "./EmailForm";

const FinalCTA = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  
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
            Buy. Sell. Discover. Connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="group text-lg px-12"
              onClick={() => setShowEmailForm(true)}
            >
              Get Early Access
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-xl mx-auto opacity-70">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">No Setup Fees</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-sm text-muted-foreground">Cancel Anytime</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Secure Platform</div>
            </div>
          </div>
        </div>
      </div>
      
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} />
    </section>
    </>
  );
};

export default FinalCTA;
