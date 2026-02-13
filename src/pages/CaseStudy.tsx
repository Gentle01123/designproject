import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-body text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="section-padding py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-body text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-padding"
        >
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="section-padding max-w-3xl mx-auto py-16 md:py-24 space-y-16">
          {/* Overview */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Overview
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </ScrollReveal>

          {/* Problem */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              The Problem
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </ScrollReveal>

          {/* Goals */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Goals & Objectives
            </h2>
            <ul className="space-y-3">
              {project.goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="font-body text-muted-foreground">{goal}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Role */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              My Role
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {project.role}
            </p>
          </ScrollReveal>

          {/* Design Process */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Design Process
            </h2>
            <div className="space-y-8">
              {[
                { title: "Research & Discovery", content: project.process.research },
                { title: "Wireframing & Testing", content: project.process.wireframes },
                { title: "Visual Design", content: project.process.design },
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-display text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {i < 2 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              The Solution
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </ScrollReveal>

          {/* Outcomes */}
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Key Outcomes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-xl p-5 text-center"
                >
                  <p className="font-body text-sm font-medium text-secondary-foreground">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Next project */}
        <section className="section-padding py-16 border-t border-border">
          <Link
            to={`/project/${nextProject.id}`}
            className="group flex items-center justify-between"
          >
            <div>
              <p className="font-body text-sm text-muted-foreground mb-1">
                Next Project
              </p>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
