import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skills, tools } from "@/data/skills";

const Pill = ({ children }: { children: string }) => (
  <span className="inline-flex items-center border border-border-c text-muted-c text-[13px] px-4 py-2 hover:border-lime hover:text-lime hover:bg-lime/[0.04] transition-colors cursor-default">
    {children}
  </span>
);

const SkillsSection = () => (
  <section id="skills" className="bg-bg py-24 md:py-32 px-6 md:px-12 lg:px-16">
    <ScrollReveal>
      <SectionLabel>Expertise</SectionLabel>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <h2
        className="font-display font-extrabold text-text leading-[1.05] tracking-[-0.02em] mb-16"
        style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
      >
        Skills & Tools
      </h2>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      <ScrollReveal delay={0.15}>
        <div className="font-mono-syne text-muted-c text-[11px] tracking-[0.22em] uppercase mb-6">
          What I do
        </div>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div className="font-mono-syne text-muted-c text-[11px] tracking-[0.22em] uppercase mb-6">
          How I work
        </div>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SkillsSection;
