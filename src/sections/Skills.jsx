import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skillsMatrix } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          tag="COMPETENCY MATRIX"
          title="Technical Competencies & Systems Knowledge"
          subtitle="A structured breakdown of core engineering capabilities spanning systems programming, stream architectures, 3D graphics, and distributed backends."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {skillsMatrix.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 transition-colors hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Space_Grotesk'] text-lg md:text-xl font-bold text-zinc-100">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    PILLAR 0{index + 1}
                  </span>
                </div>

                <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {group.focus}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                    >
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      {skill.tag && (
                        <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 text-[10px] font-mono text-blue-400">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;