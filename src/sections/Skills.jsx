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
          subtitle="A structured breakdown of core engineering capabilities spanning backend systems, distributed architectures, full-stack frameworks, and developer tooling."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {skillsMatrix.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-2xl border border-[#222A32] bg-[#101419] p-6 md:p-8 transition-colors hover:border-[#5CE6A8]/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Space_Grotesk'] text-lg md:text-xl font-bold text-[#F2F5F7]">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#8B96A3]/70 uppercase tracking-wider">
                    PILLAR 0{index + 1}
                  </span>
                </div>

                <p className="mt-2 text-xs md:text-sm text-[#8B96A3] leading-relaxed">
                  {group.focus}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-lg border border-[#222A32] bg-[#080A0C] px-3 py-2 text-xs transition-colors hover:border-[#5CE6A8]/40 hover:bg-[#151B22]"
                    >
                      <span className="font-medium text-[#F2F5F7]">{skill.name}</span>
                      {skill.tag && (
                        <span className="rounded bg-[#10261C] px-1.5 py-0.5 text-[10px] font-mono font-medium text-[#5CE6A8] border border-[#5CE6A8]/20">
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