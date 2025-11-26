import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, DollarSign } from "lucide-react";

const Dealership = () => {
  return (
    <section id="dealers" className="py-24 relative">
      <div className="container mx-auto px-6">
        <Card className="gradient-card border-glow p-12 md:p-16 shadow-premium">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-display font-bold">
              More Visibility. More Buyers. <span className="text-gradient">More Sales.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Join the premier GT-R marketplace and connect with serious buyers worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-display font-bold">10x</div>
                <div className="text-sm text-muted-foreground">More Exposure</div>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-display font-bold">3x</div>
                <div className="text-sm text-muted-foreground">Faster Sales</div>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-display font-bold">$0</div>
                <div className="text-sm text-muted-foreground">Setup Fees</div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Join as a Dealer
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dealership;
