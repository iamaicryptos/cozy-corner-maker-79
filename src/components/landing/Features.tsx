import { Compass, Layers, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Quiet by default",
    desc: "Notifications batch and deliver when you choose. Deep work, protected.",
  },
  {
    icon: Layers,
    title: "One canvas",
    desc: "Docs, tasks, and conversations live side by side — no tab juggling.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful AI",
    desc: "Suggestions that actually help. Summarize threads, draft updates, in one click.",
  },
  {
    icon: Zap,
    title: "Effortless speed",
    desc: "Built on a custom sync engine. Every keystroke is instant, online or off.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Features</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            The essentials,<br />
            <span className="italic text-muted-foreground">refined.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card p-10 md:p-12 group hover:bg-secondary/40 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
