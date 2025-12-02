import mockup1 from "@/assets/app-mockup-1.png";
import mockup2 from "@/assets/app-mockup-2.png";
import mockup3 from "@/assets/app-mockup-3.png";

const mockups = [
  { src: mockup1, alt: "GTRX Welcome screen" },
  { src: mockup2, alt: "GTRX home screen view" },
  { src: mockup3, alt: "GTRX Meetup event full screen" },
];

const AppPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gtrx-red/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            A Premium App for a <span className="text-gradient">Premium Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for speed, simplicity, and performance. Just like the GT-R itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockups.map((mockup, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <img
                src={mockup.src}
                alt={mockup.alt}
                className="relative rounded-2xl shadow-premium border border-border hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppPreview;

