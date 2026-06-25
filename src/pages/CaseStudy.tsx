import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <p className="font-mono-syne text-muted-c text-sm uppercase tracking-widest mb-3">
              404
            </p>
            <h1 className="font-display font-extrabold text-text text-4xl mb-6">
              Project not found
            </h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-lime text-bg font-display font-bold px-6 py-3 rounded-full"
            >
              <ArrowLeft size={16} /> Back home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono-syne text-muted-c text-[12px] tracking-[0.18em] uppercase hover:text-lime transition-colors mb-10"
            >
              <ArrowLeft size={14} /> Back to projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-syne text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 bg-lime/10 border border-lime/20 text-lime"
                >
                  {tag}
                </span>
              ))}
              <span className="font-mono-syne text-muted-c text-[12px] ml-2">
                {project.year}
              </span>
            </div>
            <h1
              className="font-display font-extrabold text-text leading-[0.95] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              {project.title}
            </h1>
            <p className="font-body font-light text-muted-c text-[17px] md:text-[19px] max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="px-6 md:px-12 lg:px-16 pb-16"
        >
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="block overflow-hidden bg-surface hover:scale-[1.02] transition-transform duration-300 group"
                >
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </motion.section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && project.gallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                aria-label="Close"
                className="absolute top-5 right-5 text-text/70 hover:text-lime"
                onClick={() => setLightbox(null)}
              >
                <X size={28} />
              </button>
              <button
                aria-label="Previous"
                className="absolute left-4 text-text/70 hover:text-lime"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((lightbox - 1 + project.gallery!.length) % project.gallery!.length);
                }}
              >
                <ChevronLeft size={36} />
              </button>
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={project.gallery[lightbox]}
                alt={`${project.title} ${lightbox + 1}`}
                className="max-h-[88vh] max-w-[92vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                aria-label="Next"
                className="absolute right-4 text-text/70 hover:text-lime"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((lightbox + 1) % project.gallery!.length);
                }}
              >
                <ChevronRight size={36} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-16 pb-20">
          <div className="max-w-3xl mx-auto space-y-16">
            <Block label="01 — Overview" title="Project overview">
              <p>{project.overview}</p>
            </Block>

            <Block label="02 — Problem" title="The problem">
              <p>{project.problem}</p>
            </Block>

            <Block label="03 — Goals" title="Goals & objectives">
              <ul className="space-y-3">
                {project.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="04 — Role" title="My role">
              <p>{project.role}</p>
            </Block>

            <Block label="05 — Process" title="Design process">
              <div className="space-y-8">
                {[
                  { title: "Research & discovery", content: project.process.research },
                  { title: "Wireframing & testing", content: project.process.wireframes },
                  { title: "Visual design", content: project.process.design },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-lime text-bg font-display font-extrabold text-[13px] shrink-0">
                        {i + 1}
                      </span>
                      {i < 2 && <span className="w-px flex-1 bg-border-c mt-2" />}
                    </div>
                    <div className="pb-2">
                      <h4 className="font-display font-bold text-text text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-c text-[16px] leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block label="06 — Solution" title="The solution">
              <p>{project.solution}</p>
            </Block>

            <Block label="07 — Outcomes" title="Key outcomes">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose">
                {project.outcomes.map((o, i) => (
                  <div key={i} className="bg-surface2 p-5 border-l-2 border-lime">
                    <p className="text-text text-[14px] leading-snug font-medium">{o}</p>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </div>

        {/* Next project */}
        <section className="border-t border-border-c px-6 md:px-12 lg:px-16 py-16">
          <Link
            to={`/project/${nextProject.id}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <p className="font-mono-syne text-muted-c text-[11px] tracking-[0.2em] uppercase mb-2">
                Next project
              </p>
              <p className="font-display font-extrabold text-text text-[28px] md:text-[40px] group-hover:text-lime transition-colors">
                {nextProject.title}
              </p>
            </div>
            <span className="w-14 h-14 flex items-center justify-center border border-border-c group-hover:bg-lime group-hover:text-bg group-hover:border-lime group-hover:-rotate-45 transition-all duration-300 text-muted-c shrink-0">
              <ArrowRight size={20} />
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

interface BlockProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

const Block = ({ label, title, children }: BlockProps) => (
  <ScrollReveal>
    <div className="font-mono-syne text-lime text-[11px] tracking-[0.22em] uppercase mb-3">
      {label}
    </div>
    <h3 className="font-display font-extrabold text-text text-[28px] md:text-[36px] mb-5 leading-tight">
      {title}
    </h3>
    <div className="font-body text-muted-c text-[17px] leading-[1.75]">{children}</div>
  </ScrollReveal>
);

export default CaseStudy;
