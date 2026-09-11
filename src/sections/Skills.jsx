import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skills } from "../data/skills";

const barColor = (level) => {
  if (level >= 85) return "bg-[#00ff9d]";
  if (level >= 75) return "bg-[#00f0ff]";
  return "bg-[#a855f7]";
};

const SkillBar = ({ name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="font-terminal"
  >
    <div className="flex items-center justify-between text-sm mb-1.5">
      <span className="text-[#e5e5e5]">{name}</span>
      <span className="text-[#8f8f9a] text-xs">{level}%</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-sm border border-[#2e2e3a] bg-[#121216]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          className={`h-full ${barColor(level)}`}
        />
      </div>
      <span className="text-xs text-[#8f8f9a]">
        {level >= 85 ? "MASTER" : level >= 75 ? "PRO" : "LEARN"}
      </span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          subtitle="Skills"
          title="Technologies I Work With"
        />

        <div className="mt-14 space-y-12">
          {skills.map((group, groupIndex) => (
            <div key={group.category}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 font-terminal text-sm"
              >
                <span className="text-[#00ff9d]">┌───</span>
                <span className="text-[#a855f7] mx-1">
                  [{group.category.toLowerCase()}]
                </span>
                <span className="text-[#00ff9d]">───┐</span>
              </motion.div>

              <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
                {group.items.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={groupIndex + index}
                  />
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