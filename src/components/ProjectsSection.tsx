import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => (
  <section id="projects" className="section-padding section-spacing">
    <ScrollReveal>
      <p className="font-body text-accent font-semibold text-sm tracking-widest uppercase mb-3">
        Selected Work
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16">
        Featured Projects
      </h2>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
