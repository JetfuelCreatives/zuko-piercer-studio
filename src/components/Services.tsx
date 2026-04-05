import tattooImg from "@/assets/tattoo-work.jpg";
import piercingImg from "@/assets/piercing-work.jpg";
import jewelleryImg from "@/assets/jewellery.jpg";

const services = [
  {
    title: "Custom Tattoos",
    desc: "From fine-line minimalism to bold traditional pieces, our artists bring your vision to life with precision and passion. Every tattoo starts with a personal consultation.",
    img: tattooImg,
    details: ["Custom designs", "Cover-ups", "Fine line & geometric", "Free consultations"],
    price: "Contact for quote",
  },
  {
    title: "Professional Piercings",
    desc: "Safe, sterile, and stylish. We offer a full range of piercings performed by certified professionals using medical-grade equipment.",
    img: piercingImg,
    details: ["Ear piercings", "Nose piercings", "Body piercings", "Aftercare included"],
    price: "From R150",
  },
  {
    title: "Premium Jewellery",
    desc: "Elevate your look with our curated collection of high-quality piercing jewellery. Gold, titanium, and surgical steel options available.",
    img: jewelleryImg,
    details: ["Gold pieces", "Titanium options", "Surgical steel", "Custom orders"],
    price: "From R100",
  },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">What We Offer</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold">Our Services</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-semibold text-sm">{s.price}</span>
                <a href="#booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
