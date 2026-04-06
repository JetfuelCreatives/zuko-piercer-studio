import { useState } from "react";
import { toast } from "sonner";

const Booking = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill in all required fields");
      return;
    }
    const msg = encodeURIComponent(
      `Hi Zuko Piercer! I'd like to book:\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date || "Flexible"}`
    );
    window.open(`https://wa.me/27798185184?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="booking" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Book Now</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Reserve Your Session</h2>
          <p className="text-muted-foreground text-sm">Fill in the form and we'll confirm via WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-muted-foreground block mb-1.5">Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors rounded-full"
              placeholder="Your full name"
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1.5">Phone *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="079 818 5184"
              maxLength={15}
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1.5">Service *</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select a service</option>
              <option value="Custom Tattoo">Custom Tattoo</option>
              <option value="Piercing">Piercing</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground block mb-1.5">Preferred Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gold-gradient text-primary-foreground py-3.5 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-gold"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
