import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="section-padding section-spacing bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="font-body text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          About Me
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          Designing with purpose.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
          I'm a UI/UX designer with over 6 years of experience crafting digital products
          for startups and enterprise teams. I believe that great design sits at the
          intersection of empathy, clarity, and craft — solving real problems while
          creating moments of delight.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
          My approach is research-driven and user-centered. I start by deeply understanding
          the people I'm designing for, then translate those insights into elegant,
          scalable solutions. Every pixel, every interaction, every micro-animation
          serves a purpose.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.35}>
        <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border">
          {[
            { number: "6+", label: "Years Experience" },
            { number: "40+", label: "Projects Delivered" },
            { number: "15+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {stat.number}
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
