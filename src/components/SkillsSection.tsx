import ScrollReveal from "./ScrollReveal";

const skills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Interaction Design",
  "User Testing",
  "Information Architecture",
];

const tools = [
  "Figma",
  "FigJam",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Principle",
  "Maze",
  "Hotjar",
  "Notion",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding section-spacing">
    <ScrollReveal>
      <p className="font-body text-accent font-semibold text-sm tracking-widest uppercase mb-3">
        Expertise
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
        Skills & Tools
      </h2>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
      <ScrollReveal delay={0.1}>
        <h3 className="font-display text-lg font-semibold text-foreground mb-6">
          Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-body text-sm font-medium bg-card text-card-foreground px-5 py-2.5 rounded-full shadow-card border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h3 className="font-display text-lg font-semibold text-foreground mb-6">
          Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="font-body text-sm font-medium bg-card text-card-foreground px-5 py-2.5 rounded-full shadow-card border border-border"
            >
              {tool}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SkillsSection;
