import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "2+", label: "Years designing products" },
  { value: "20+", label: "Projects shipped" },
  { value: "5", label: "Industries explored" },
  { value: "92%", label: "Avg. task completion" },
];

const AboutSection = () => (
  <section id="about" className="bg-surface py-24 md:py-32 px-6 md:px-12 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
      {/* Left */}
      <div>
        <ScrollReveal>
          <SectionLabel>About me</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-display font-extrabold text-text leading-[1.05] tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Design with purpose,
            <br /> not decoration.
          </h2>
        </ScrollReveal>
        <div className="space-y-6 max-w-xl">
          <ScrollReveal delay={0.15}>
            <p className="font-body font-light text-muted-c text-[17px] leading-[1.8]">
              I'm a UI/UX designer based in Lagos with over 2 years of experience shipping
              digital products for startups and enterprise teams. I believe great design
              lives at the intersection of empathy, clarity, and craft.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-body font-light text-muted-c text-[17px] leading-[1.8]">
              My approach is research-first and user-centered. I deeply understand the people
              I'm designing for, then translate those insights into elegant, scalable
              solutions. Every pixel serves a purpose.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="font-body font-light text-muted-c text-[17px] leading-[1.8]">
              Currently open to new freelance projects and full-time opportunities.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Right */}
      <div>
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-[2px] bg-border-c/50">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-7 md:p-9">
                <div className="font-display font-extrabold text-lime text-[40px] md:text-[48px] leading-none">
                  {s.value}
                </div>
                <div className="font-body text-muted-c text-[13px] mt-4 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 border border-border-c text-text font-display font-bold text-[14px] px-7 py-3.5 hover:bg-lime hover:text-bg hover:border-lime transition-colors"
          >
            Start a project together →
          </a>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
