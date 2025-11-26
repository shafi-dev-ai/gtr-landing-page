const Credibility = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Built by <span className="text-gradient">GT-R Owners</span>, For GT-R Owners
          </h2>
          
          <p className="text-xl text-muted-foreground">
            This is the future home of GT-R culture.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
