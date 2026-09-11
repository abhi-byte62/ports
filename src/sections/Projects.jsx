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
          title="Featured Projects"
          subtitle="Software engineering projects focused on networking, backend systems, and developer tools."
        />

        {/* Terminal command line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 font-terminal text-xs text-center text-[#8f8f9a]"
        >
          <span className="text-[#00ff9d]">$</span> find . -type
          trauma — maxdepth=<span className="text-[#facc15]">2</span> | grep -i
          "<span className="text-[#00f0ff]">engineering</span>"
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-10 lg:grid-cols-2"
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
