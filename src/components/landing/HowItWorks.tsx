const steps = [
  {
    n: "01",
    title: "Bring your work in",
    desc: "Import from Notion, Linear, or Google Drive in a single click.",
  },
  {
    n: "02",
    title: "Shape your space",
    desc: "Create rooms for projects, teams, or rituals. No rigid hierarchy.",
  },
  {
    n: "03",
    title: "Find your rhythm",
    desc: "Lumen learns when you focus and protects that time, automatically.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Three steps to<br />
            <span className="italic text-muted-foreground">a quieter day.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-border pt-8">
              <div className="font-display text-sm text-accent mb-8">{s.n}</div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
