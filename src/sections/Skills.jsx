import { motion } from "framer-motion";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { skillsMatrix, engineeringInterests } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills" className="relative">
      <Container>
        <SectionTitle
          tag="SKILLS"
          title="Technical Skills & Focus Areas"
          subtitle="Languages, systems engineering tools, and data stores used across my implementations."
        />

        {/* Skills Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsMatrix.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-xl border border-[#1C2942] bg-[#0D1424] p-6 transition-colors hover:border-[#4D7CFF]/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Space_Grotesk'] text-base md:text-lg font-bold text-[#F5F7FF]">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#5F6B83] uppercase tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-1.5 text-xs text-[#8D99B5] leading-relaxed">
                  {group.focus}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 rounded-md border border-[#1C2942] bg-[#050914] px-2.5 py-1 text-xs"
                    >
                      <span className="font-medium text-[#F5F7FF] text-[11px]">{skill.name}</span>
                      {skill.tag && (
                        <span className="rounded bg-[#080E1B] px-1 py-0.5 text-[9px] font-mono text-[#8D99B5]">
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

        {/* Engineering Interests & Problem Solving Evidence */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Engineering Interests Bar */}
          <div className="rounded-xl border border-[#1C2942] bg-[#080E1B] p-6 lg:col-span-7">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
                Engineering Interests & Focus Areas
              </span>
              <span className="text-[10px] font-mono text-[#5F6B83]">
                ACTIVE PURSUITS
              </span>
            </div>
            <p className="text-xs text-[#8D99B5] leading-relaxed mb-4">
              Areas where I concentrate system design research, performance benchmarks, and architecture prototyping:
            </p>
            <div className="flex flex-wrap gap-2">
              {engineeringInterests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#1C2942] bg-[#0D1424] px-3 py-1.5 text-xs font-mono text-[#D1D7E6]"
                >
                  <span className="text-[#4D7CFF]">▹</span>
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Solving & Competitive Programming Evidence */}
          <div className="rounded-xl border border-[#1C2942] bg-[#080E1B] p-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
                  Algorithmic Problem Solving
                </span>
                <span className="text-[10px] font-mono text-[#5F6B83]">
                  DSA / CP
                </span>
              </div>
              <p className="text-xs text-[#8D99B5] leading-relaxed">
                Active practice on algorithmic challenges focusing on graphs, dynamic programming, trees, amortized complexity, and rigorous edge case verification.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 pt-4 border-t border-[#1C2942]">
              <a
                href="https://leetcode.com/u/playboldAbhi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-2 text-xs font-medium text-[#F5F7FF] hover:border-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
              >
                <SiLeetcode className="text-[#FFA116]" size={14} />
                <span>LeetCode Profile</span>
                <HiArrowRight size={12} className="text-[#5F6B83]" />
              </a>

              <a
                href="https://codeforces.com/profile/playboldAbhi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-2 text-xs font-medium text-[#F5F7FF] hover:border-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
              >
                <SiCodeforces className="text-[#1F8ACB]" size={14} />
                <span>Codeforces Profile</span>
                <HiArrowRight size={12} className="text-[#5F6B83]" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;