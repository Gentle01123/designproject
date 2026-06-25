import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

const WorkSection = () => (
  <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
    <ScrollReveal>
      <SectionLabel>Selected work</SectionLabel>
    </ScrollReveal>

    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
      <ScrollReveal delay={0.1}>
        <h2
          className="font-display font-extrabold text-text leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
        >
          Featured Projects
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <a
          href="#contact"
          className="font-mono-syne text-lime text-[12px] tracking-[0.18em] uppercase border-b border-lime/30 hover:border-lime pb-0.5 transition-colors"
        >
          View all projects →
        </a>
      </ScrollReveal>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border-c/40">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} featured={i === 0} />
      ))}
    </div>
  </section>
);

export default WorkSection;
