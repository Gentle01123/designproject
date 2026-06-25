import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block relative overflow-hidden bg-surface hover:bg-surface2 transition-colors duration-500"
      >
        {/* Image */}
        <div className={`overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            width={featured ? 1600 : 800}
            height={featured ? 686 : 500}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />
        </div>

        {/* Body */}
        <div className="px-7 md:px-8 pt-7 pb-8 relative">
          {/* Meta row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-syne text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 bg-lime/10 border border-lime/20 text-lime"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono-syne text-muted-c text-[12px]">{project.year}</span>
          </div>

          {/* Title */}
          <h3
            className={`font-display font-bold text-text mb-3 leading-tight ${
              featured ? "text-[28px] md:text-[32px]" : "text-[22px] md:text-[24px]"
            }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-body font-light text-muted-c text-[14px] leading-[1.6] pr-12 max-w-2xl">
            {project.description}
          </p>

          {/* Arrow */}
          <div className="absolute right-7 md:right-8 bottom-8 w-10 h-10 flex items-center justify-center border border-border-c text-muted-c group-hover:bg-lime group-hover:text-bg group-hover:border-lime group-hover:-rotate-45 transition-all duration-300">
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom accent line */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime group-hover:w-full transition-all duration-700 ease-out" />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
