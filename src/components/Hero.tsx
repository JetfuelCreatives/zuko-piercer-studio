import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Zuko Piercer Studio" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className={`${i < 5 ? "fill-primary text-primary" : "text-muted-foreground"}`} />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">4.8 from 280+ reviews</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Premium Tattoos &<br />
          <span className="text-gold-gradient">Piercings in Pretoria</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          Hatfield's premier destination for custom tattoos, professional piercings, and premium jewellery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a
            href="#booking"
            className="bg-gold-gradient text-primary-foreground px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-gold"
          >
            Book Appointment
          </a>
          <a
            href="#gallery"
            className="border border-primary/40 text-foreground px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
