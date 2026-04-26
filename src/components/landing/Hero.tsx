import heroVisual from "@/assets/hero-visual.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-subtle">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            New — Lumen 2.0 is here
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance mb-8">
            Calm focus for<br />
            <span className="italic text-muted-foreground">modern teams.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance mb-10 leading-relaxed">
            Lumen is a refined workspace that helps your team focus on the work
            that matters. Less noise, more clarity.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#cta">
                Start free trial <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#how">See how it works</a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            14-day free trial · No credit card required
          </p>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={heroVisual}
              alt="Lumen workspace visualization"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-soft animate-subtle-float">
            <div className="text-xs text-muted-foreground mb-1">Today's focus</div>
            <div className="font-display text-2xl">3h 24m</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
