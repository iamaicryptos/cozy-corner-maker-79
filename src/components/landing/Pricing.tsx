import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    desc: "For individuals trying things out.",
    features: ["Up to 3 projects", "Personal workspace", "Community support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Team",
    price: "$12",
    suffix: "/ user / mo",
    desc: "Everything a small team needs to focus.",
    features: [
      "Unlimited projects",
      "Shared workspaces",
      "Quiet hours & rituals",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Studio",
    price: "Custom",
    desc: "For organizations with bespoke needs.",
    features: ["SSO & SCIM", "Advanced security", "Dedicated success manager"],
    cta: "Talk to us",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-20 mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Simple, honest pricing.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl p-8 border transition-smooth ${
                t.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-elevated md:-translate-y-4"
                  : "bg-card border-border hover:border-foreground/20"
              }`}
            >
              <div className="font-display text-xl mb-2">{t.name}</div>
              <p className={`text-sm mb-8 ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>
                {t.desc}
              </p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-display text-5xl">{t.price}</span>
                {t.suffix && (
                  <span className={`text-sm ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>
                    {t.suffix}
                  </span>
                )}
              </div>
              <Button
                variant={t.featured ? "accent" : "outline"}
                className="w-full rounded-full"
                size="lg"
              >
                {t.cta}
              </Button>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.featured ? "" : "text-accent"}`} />
                    <span className={t.featured ? "" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
