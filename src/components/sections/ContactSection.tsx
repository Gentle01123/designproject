import { useState } from "react";
import { toast } from "sonner";
import { Linkedin, Twitter, Dribbble } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("✓ Message sent! I'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls =
    "w-full bg-bg border border-border-c text-text font-body text-[14px] px-4 py-3.5 focus:outline-none focus:border-lime transition-colors placeholder:text-muted-c";

  return (
    <section id="contact" className="bg-surface py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
        {/* Left */}
        <div>
          <ScrollReveal>
            <SectionLabel>Get in touch</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-display font-extrabold text-text leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Let's build something real.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body font-light text-muted-c text-[17px] leading-[1.7] max-w-md mb-10">
              Have a project in mind? I'd love to hear about it. Whether it's a quick
              question or a full engagement — my inbox is always open.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="mailto:gentlejoshua12@gmail.com"
              className="font-mono-syne text-lime text-[15px] hover:underline underline-offset-4 inline-block mb-10"
            >
              gentlejoshua12@gmail.com →
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Dribbble, label: "Dribbble", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center border border-border-c text-muted-c hover:border-lime hover:text-lime transition-colors"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right — form */}
        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className={inputCls}
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className={inputCls}
              />
            </div>
            <textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className={`${inputCls} resize-none min-h-[120px]`}
            />
            <button
              type="submit"
              className="bg-lime text-bg font-display font-bold text-[13px] uppercase tracking-[0.2em] px-8 py-4 hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Send message →
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
