const logos = ["Linear", "Notion", "Stripe", "Vercel", "Framer", "Loom"];

const Logos = () => {
  return (
    <section className="py-16 border-y border-border/60">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <span
              key={name}
              className="font-display text-2xl text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
