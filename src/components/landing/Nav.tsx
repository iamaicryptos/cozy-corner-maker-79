const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <span className="w-2 h-2 rounded-full bg-gradient-accent" />
          Lumen
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <a
          href="#cta"
          className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
        >
          Get started
        </a>
      </nav>
    </header>
  );
};

export default Nav;
