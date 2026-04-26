import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="container">
        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-primary text-primary-foreground p-12 md:p-20 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance mb-6">
              Find your focus.<br />
              <span className="italic opacity-70">Today.</span>
            </h2>
            <p className="text-lg opacity-80 mb-10 max-w-lg">
              Join thousands of teams shipping calmer, better work with Lumen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="xl">
                Start free trial <ArrowRight />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
