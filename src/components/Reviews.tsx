import { Star } from "lucide-react";

const reviews = [
  { name: "Thabo M.", text: "Absolutely amazing work! The attention to detail on my sleeve was incredible. Clean studio, professional team.", stars: 5 },
  { name: "Lisa K.", text: "Got my nose and ears pierced here. Painless process, beautiful jewellery selection. Highly recommend Zuko!", stars: 5 },
  { name: "James R.", text: "Best tattoo shop in Pretoria hands down. The consultation process made me feel confident about my design.", stars: 5 },
  { name: "Naledi S.", text: "The hygiene standards are top-notch. Got a custom tattoo that exceeded my expectations. Will be back!", stars: 5 },
];

const Reviews = () => (
  <section id="reviews" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>
          <span className="text-foreground font-bold">4.8</span>
          <span className="text-muted-foreground text-sm">from 280+ happy clients</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-border p-6 rounded-xl hover:border-primary/20 transition-colors">
            <div className="flex gap-0.5 mb-4">
              {[...Array(r.stars)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{r.text}"</p>
            <p className="text-sm font-semibold text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
