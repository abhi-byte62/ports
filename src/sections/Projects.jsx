import { motion } from "framer-motion";

import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          tag="ENGINEERING PORTFOLIO"
          title="Featured Software Engineering Case Studies"
          subtitle="Production-grade systems demonstrating full-stack architecture, high-concurrency stream processing, real-time data pipelines, and hardware-accelerated graphics."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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