import whyGtr from "@/assets/why-gtr.jpg";

const WhyGTRX = () => {
  return (
    <section id="our-mission" className="relative pb-24 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-border">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Our Mission</span>
            </div> */}

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                <span className="text-gradient">Unified GT-R Culture</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The GT-R community is huge but scattered. Our mission is to unify it into one premium app where enthusiasts can buy, sell, showcase and connect like never before.
              </p>
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
