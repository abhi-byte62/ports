import { motion } from "framer-motion";

import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { projects } from "../data/projects";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="relative">
      <Container>
        <SectionTitle
          tag="ENGINEERING CASE STUDIES"
          title="Featured Systems Architecture & Implementations"
          subtitle="Production-grade distributed backends, market microstructure matching engines, real-time collaboration platforms, and hardware-accelerated telemetry."
        />

        {/* Featured Projects - High Visual Prominence */}
        <div className="mt-14 space-y-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} isFeatured={true} />
            </motion.div>
          ))}
        </div>

        {/* Secondary Specialized Systems */}
        {secondaryProjects.length > 0 && (
          <div className="mt-14">
            <div className="mb-6 flex items-center justify-between border-b border-[#1C2942] pb-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8D99B5]">
                Specialized Systems & Protocol Tooling
              </span>
              <span className="text-xs font-mono text-[#5F6B83]">
                {secondaryProjects.length} Systems
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} isFeatured={false} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Projects;