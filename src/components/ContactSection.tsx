import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding section-spacing bg-card">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="font-body text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's work together.
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-12">
            Have a project in mind? I'd love to hear about it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
              />
            </div>
            <textarea
              placeholder="Tell me about your project..."
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="bg-foreground text-background font-display font-semibold text-sm px-10 py-4 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border">
            <a
              href="mailto:hello@portfolio.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
            >
              <Mail size={16} /> hello@portfolio.com
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
