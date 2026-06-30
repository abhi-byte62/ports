import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle subtitle="Skills" title="Technologies I Work With" />

        <div className="space-y-12">
          {skills.map((group, index) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-2xl font-semibold"
              >
                {group.category}
              </motion.h3>

              <div className="flex flex-wrap gap-4">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="
                      rounded-xl
                      border
                      border-zinc-800
                      bg-zinc-900/40
                      px-5
                      py-3
                      text-zinc-300
                      transition
                      hover:border-blue-500
                      hover:text-white
                    "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
