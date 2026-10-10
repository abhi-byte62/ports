import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { skillsMatrix } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills" className="py-20 bg-[#080D1A] text-[#E6EAF2] border-t-2 border-[#334366]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] text-[#55E6C1]">
            <span className="h-2 w-2 bg-[#55E6C1]" />
            <span>CAPABILITY MATRIX // 03</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-pixel-heading">
            Technical Competencies & Systems Tree
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-mono">
            Core competencies across low-latency systems programming, concurrent backend frameworks, distributed state machines, and algorithmic foundations.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsMatrix.map((group, gIdx) => (
            <div
              key={group.category}
              className="pixel-frame p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#334366]">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-pixel text-[#55E6C1]">
                      [0{gIdx + 1}]
                    </span>
                    <h3 className="text-sm font-bold text-white font-pixel">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 font-mono">
                  {group.focus}
                </p>

                {/* Nodes List */}
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-[#0F172A] border-2 border-[#334366] p-2 flex items-center justify-between text-xs font-mono shadow-[2px_2px_0px_#04070D]"
                    >
                      <span className="font-semibold text-white">{item.name}</span>
                      <span className="text-[9px] font-pixel text-[#8AA4FF] bg-[#141E36] px-1.5 py-0.5 border border-[#334366]">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-[#334366] text-[8px] font-pixel text-[#64748B] flex items-center justify-between">
                <span>CONNECTIVITY: 100%</span>
                <span className="text-[#55E6C1]">VERIFIED</span>
              </div>
            </div>
          ))}

          {/* Problem Solving & Algorithmic Profiles Card */}
          <div className="pixel-frame-teal p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#55E6C1]/40">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-pixel text-[#FFD166]">
                    [VERIFICATION]
                  </span>
                  <h3 className="text-sm font-bold text-white font-pixel">
                    Algorithms & CP
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 font-mono">
                Active algorithmic verification across dynamic programming, graph theory, and asymptotic complexity bounds.
              </p>

              <div className="space-y-3 pt-1">
                <a
                  href="https://leetcode.com/u/playboldAbhi/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0F172A] border-2 border-[#334366] hover:border-[#FFA116] p-3 flex items-center justify-between transition-colors shadow-[2px_2px_0px_#04070D] group"
                >
                  <div className="flex items-center gap-2.5">
                    <SiLeetcode className="text-[#FFA116]" size={18} />
                    <div>
                      <div className="text-xs font-pixel text-white group-hover:text-[#FFA116]">
                        LeetCode Profile
                      </div>
                      <div className="text-[10px] font-mono text-[#64748B]">
                        @playboldAbhi
                      </div>
                    </div>
                  </div>
                  <HiArrowRight size={14} className="text-[#64748B] group-hover:text-white" />
                </a>

                <a
                  href="https://codeforces.com/profile/playboldAbhi"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0F172A] border-2 border-[#334366] hover:border-[#8AA4FF] p-3 flex items-center justify-between transition-colors shadow-[2px_2px_0px_#04070D] group"
                >
                  <div className="flex items-center gap-2.5">
                    <SiCodeforces className="text-[#1F8ACB]" size={18} />
                    <div>
                      <div className="text-xs font-pixel text-white group-hover:text-[#8AA4FF]">
                        Codeforces Profile
                      </div>
                      <div className="text-[10px] font-mono text-[#64748B]">
                        @playboldAbhi
                      </div>
                    </div>
                  </div>
                  <HiArrowRight size={14} className="text-[#64748B] group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-[#55E6C1]/40 text-[8px] font-pixel text-[#FFD166]">
              STATUS: CONTINUOUS_EVALUATION
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;