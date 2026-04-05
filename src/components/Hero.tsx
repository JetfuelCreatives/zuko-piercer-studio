import { Star, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Zuko Piercer Studio"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content — bottom-aligned, left-heavy layout */}
      <div className="relative z-10 container mx-auto px-6 pb-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left column */}
          <div>
            {/* Rating badge */}
            <div
              className="inline-flex items-center gap-1.5 border border-border bg-background/80 backdrop-blur-sm px-4 py-2 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-foreground text-foreground" />
              ))}
              <span className="ml-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                4.8 · 280+ Reviews
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.9] mb-6 animate-fade-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Premium
              <br />
              Tattoos &
              <br />
              <span className="text-muted-foreground">Piercings</span>
            </h1>

            {/* Location tag */}
            <p
              className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-10 animate-fade-in"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              Hatfield · Pretoria · South Africa
            </p>
          </div>

          {/* Right column */}
          <div
            className="flex flex-col gap-6 lg:pb-4 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <p className="text-muted-foreground text-base max-w-md leading-relaxed">
              Hatfield's premier destination for custom tattoos, professional
              piercings, and premium jewellery. Bold work, clean lines,
              unforgettable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Book Now
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical scroll line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-[1px] h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
