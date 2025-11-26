import { useState } from "react";
import { Button } from "@/components/ui/button";
import EmailForm from "./EmailForm";

const Navigation = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-display font-bold text-gradient">
              GTRX
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#marketplace" className="text-foreground/80 hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#dealers" className="text-foreground/80 hover:text-primary transition-colors">
              For Dealers
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setShowEmailForm(true)}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
      
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} />
    </nav>
    </>
  );
};

export default Navigation;
