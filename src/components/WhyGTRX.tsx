import whyGtr from "@/assets/why-gtr.jpg";

const WhyGTRX = () => {
  return (
    <section className="relative pt-12 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-border">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Why GTRX</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                A Unified Home for <span className="text-gradient">GT-R Enthusiasts</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The GT-R world is huge but scattered across forums, groups, dealerships, and social platforms.
                GTRX brings everything together into one premium digital hub for buying, selling, showcasing builds,
                and connecting with the community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Built for serious GT-R collectors and fans",
                "Curated listings with real specs and provenance",
                "Community-first features that keep enthusiasts connected",
                "Global reach with local credibility",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-premium">
              <img
                src={whyGtr}
                alt="GT-R line-up at an event"
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGTRX;
