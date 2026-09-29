import { motion } from "framer-motion";

import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section id="projects" className="relative">
      <Container>
        <SectionTitle
          tag="ENGINEERING PROJECTS"
          title="Featured Software Engineering Case Studies"
          subtitle="Production systems demonstrating full-stack architecture, real-time collaboration, stream backpressure, and hardware-accelerated graphics."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;