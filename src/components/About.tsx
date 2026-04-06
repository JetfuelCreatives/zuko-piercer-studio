import { Shield, Award, Sparkles } from "lucide-react";
import studioPhoto from "@/assets/studio.jpg";

const features = [
  { icon: Shield, title: "Sterile & Safe", desc: "Hospital-grade sterilization for every procedure" },
  { icon: Award, title: "Expert Team", desc: "Highly trained professionals with years of experience" },
  { icon: Sparkles, title: "Premium Quality", desc: "Only the finest inks, needles, and jewellery" },
];

const About = () => (
  <section id="about" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={studioPhoto}
            alt="Zuko Piercer studio"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
            width={800}
            height={800}
          />
          <div className="absolute inset-0 border border-primary/20" />
        </div>

        <div>
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Crafting Art on Skin Since Day One
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zuko Piercer is situated in the heart of Hatfield, Pretoria. We provide premium tattoos, piercings, and jewellery with a highly trained professional team.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Every piece we create is a collaboration between artist and client. We prioritize hygiene, professionalism, and quality in everything we do — because your body deserves the best.
          </p>

          <div className="grid gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <f.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
