import { Card } from "@/components/ui/card";
import { Search, Upload, Users, Bell, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "GT-R Marketplace",
    bullets: [
      "High-quality photos & specs",
      "Mileage, mod lists, service history",
      "Worldwide listings & filters",
      "Save favorites & set alerts",
    ],
  },
  {
    icon: Upload,
    title: "Post Your GT-R in Minutes",
    bullets: [
      "Upload photos",
      "Add specs, upgrades, maintenance",
      "Global buyer visibility",
      "Great for private sellers + dealerships",
    ],
  },
  // {
  //   icon: Users,
  //   title: "Global GT-R Community",
  //   bullets: [
  //     "Share build photos",
  //     "Follow other owners",
  //     "Discuss mods & track days",
  //     "Stay connected to the culture",
  //   ],
  // },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    bullets: [
      "New listings",
      "Price drops",
      "Saved searches",
      "Marketplace updates",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Verified & Safe",
    bullets: [
      "Verified accounts",
      "Authentic sellers",
      "Clear history & transparency",
    ],
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Everything You Need. <span className="text-gradient">One Platform.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="gradient-card border-glow p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-display font-bold">{feature.title}</h3>
                
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
