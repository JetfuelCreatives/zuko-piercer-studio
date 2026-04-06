import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import tattooWork from "@/assets/tattoo-work.jpg";
import jewellery from "@/assets/jewellery.jpg";

const allImages = [
  { src: gallery1, cat: "tattoos", alt: "Geometric tattoo" },
  { src: gallery2, cat: "piercings", alt: "Nose piercing" },
  { src: gallery3, cat: "tattoos", alt: "Mandala tattoo" },
  { src: gallery4, cat: "tattoos", alt: "Rose tattoo" },
  { src: tattooWork, cat: "tattoos", alt: "Tattoo artist at work" },
  { src: jewellery, cat: "piercings", alt: "Premium jewellery" },
];

const filters = ["all", "tattoos", "piercings"] as const;

const Gallery = () => {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? allImages : allImages.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">Gallery</h2>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-sm font-semibold tracking-wider uppercase px-5 py-2 transition-all duration-200 rounded-full ${
                active === f
                  ? "bg-gold-gradient text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((img, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square cursor-pointer rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-sm font-semibold tracking-wider uppercase text-primary">{img.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
