import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { EARLY_ACCESS_URL } from "@/lib/constants";
import EmailForm from "./EmailForm";

const Pricing = () => {
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
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              Early Access <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Lock in exclusive founding member rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <Card className="gradient-card border-border p-8 hover:shadow-card transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">GTRX Free</h3>
                  <div className="text-4xl font-display font-bold">
                    $0<span className="text-xl text-muted-foreground">/month</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Browse all listings",
                    "Basic search filters",
                    "Community feed access",
                    "Save up to 5 favorites",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Start Free
                </Button>
              </div>
            </Card>

            {/* Premium Tier */}
            <Card className="gradient-card border-glow p-8 shadow-premium hover:shadow-premium transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-display font-bold">
                POPULAR
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">GTRX Premium</h3>
                  <div className="text-4xl font-display font-bold">
                    $2.99<span className="text-xl text-muted-foreground">/month</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Everything in Free",
                    "Unlimited saved listings",
                    "Advanced search filters",
                    "Real-time price alerts",
                    "Post your GT-R",
                    "Featured in community",
                    "Priority support",
                    "Early feature access",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" className="w-full" onClick={handleEarlyAccessClick}>
                  Get Early Access
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <EmailForm open={showEmailForm} onOpenChange={setShowEmailForm} source="pricing" />
    </>
  );
};

export default Pricing;
