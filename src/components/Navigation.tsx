import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { EARLY_ACCESS_URL } from "@/lib/constants";
import EmailForm from "./EmailForm";

const Navigation = () => {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-6">
            <a href="#hero" className="flex items-center gap-2">
              <img
                src={logo}
                alt="GTRX logo"
                className="h-10 w-auto drop-shadow"
              />
            </a>
            
            <div className="ml-auto flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8">
                <a href="#our-mission" className="text-foreground/80 hover:text-primary transition-colors">
                  Our Mission
                </a>
                <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
                  Features
                </a>
              </div>

              <div className="flex items-center gap-4">
                {/* <Button variant="ghost" size="sm">
                  Sign In
                </Button> */}
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={handleEarlyAccessClick}
                >
                  Follow us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} source="nav" />
    </>
  );
};

export default Navigation;
