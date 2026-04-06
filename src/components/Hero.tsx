import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Hatfield · Pretoria · South Africa
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-heading font-black tracking-tighter leading-[0.9] mb-8 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          ZUKO<br />PIERCER
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          Custom tattoos, professional piercings &amp; premium jewellery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a
            href="#booking"
            className="bg-foreground text-background px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase hover:opacity-80 transition-opacity rounded-full"
          >
            Book Now
          </a>
          <a
            href="#gallery"
            className="border border-border text-foreground px-10 py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-muted transition-colors rounded-full"
          >
            Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown size={18} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;
