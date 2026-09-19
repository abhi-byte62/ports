import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          subtitle="Technical Expertise"
          title="Technologies I Work With"
        />

        <div className="mt-16 space-y-12">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-lg font-semibold text-zinc-100 uppercase tracking-wider">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const skillName = typeof skill === "string" ? skill : skill.name;
                  return (
                    <span
                      key={skillName}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
                    >
                      {skillName}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;