const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-lg">
          <span className="w-2 h-2 rounded-full bg-gradient-accent" />
          Lumen
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Lumen Labs</p>
      </div>
    </footer>
  );
};

export default Footer;
