const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zuko Piercer. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://instagram.com/zukopiercer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="https://tiktok.com/@zukopiercer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            TikTok
          </a>
        </div>
      </div>
      <p className="text-xs text-muted-foreground/60">
        Designed by JETFUEL SYSTEMS
      </p>
    </div>
  </footer>
);

export default Footer;
