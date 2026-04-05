import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold">Visit Us</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">1122 Burnett St, Hatfield, Pretoria, 0083</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold mb-1">Phone</h3>
              <a href="tel:+27798185184" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                079 818 5184
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold mb-1">Hours</h3>
              <p className="text-sm text-muted-foreground">Mon–Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Sun: Closed</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Instagram size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold mb-1">Social</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/zukopiercer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://tiktok.com/@zukopiercer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="aspect-square bg-card border border-border overflow-hidden">
          <iframe
            title="Zuko Piercer Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.5!2d28.2366!3d-25.7478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzUyLjEiUyAyOMKwMTQnMTEuOCJF!5e0!3m2!1sen!2sza!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
