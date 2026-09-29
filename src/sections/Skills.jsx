import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skillsMatrix } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills" className="relative">
      <Container>
        <SectionTitle
          tag="TECHNICAL PROFICIENCIES"
          title="Core Technologies & Engineering Competencies"
          subtitle="A structured breakdown of core skills spanning distributed systems, client architectures, and development workflows."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillsMatrix.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-xl border border-[#1C2942] bg-[#0D1424] p-6 sm:p-7 transition-colors hover:border-[#4D7CFF]/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Space_Grotesk'] text-lg md:text-xl font-bold text-[#F5F7FF]">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#5F6B83] uppercase tracking-wider">
                    CATEGORY 0{index + 1}
                  </span>
                </div>

                <p className="mt-2 text-xs md:text-sm text-[#8D99B5] leading-relaxed">
                  {group.focus}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#050914] px-2.5 py-1.5 text-xs transition-colors hover:border-[#4D7CFF]/30 hover:bg-[#10182A]"
                    >
                      <span className="font-medium text-[#F5F7FF]">{skill.name}</span>
                      {skill.tag && (
                        <span className="rounded bg-[#080E1B] px-1.5 py-0.5 text-[10px] font-mono text-[#8D99B5]">
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