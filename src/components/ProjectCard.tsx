import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link to={`/project/${project.id}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group-hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="font-body text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;
