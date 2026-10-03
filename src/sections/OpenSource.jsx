import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa";
import { HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FiGitCommit, FiLayers, FiCheckCircle, FiCpu, FiTerminal } from "react-icons/fi";

import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { openSourceContributions } from "../data/opensource";

const CATEGORIES = [
  "All",
  "Systems & Databases",
  "Fastify & Web Ecosystem",
  "Quantitative & Protocols",
  "Web Infrastructure & Tooling",
];

const OpenSource = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredContributions =
    selectedCategory === "All"
      ? openSourceContributions
      : openSourceContributions.filter((c) => c.category === selectedCategory);

  return (
    <Section id="opensource" className="relative">
      <Container>
        <SectionTitle
          tag="OPEN SOURCE"
          title="Upstream Open Source Contributions & Core Systems"
          subtitle="Direct contributions across production key-value datastores (Valkey), high-throughput web frameworks (Fastify), algorithmic trading engines (QuantConnect Lean, QuickFIX), and universal web infrastructure (UnJS)."
        />

        {/* Global Impact Metric Banner */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#4D7CFF] mb-1">
              <FiGitCommit size={14} />
              <span>COMMITS & PRs</span>
            </div>
            <p className="font-['Space_Grotesk'] text-2xl font-bold text-[#F5F7FF]">10+</p>
            <p className="text-[11px] text-[#8D99B5]">Upstream Contributions</p>
          </div>

          <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
              <FiLayers size={14} />
              <span>ECOSYSTEMS</span>
            </div>
            <p className="font-['Space_Grotesk'] text-2xl font-bold text-[#F5F7FF]">5</p>
            <p className="text-[11px] text-[#8D99B5]">Core Engine Stacks</p>
          </div>

          <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-amber-400 mb-1">
              <FaStar size={13} />
              <span>COMMUNITY REACH</span>
            </div>
            <p className="font-['Space_Grotesk'] text-2xl font-bold text-[#F5F7FF]">35k+</p>
            <p className="text-[11px] text-[#8D99B5]">Combined Upstream Stars</p>
          </div>

          <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#6D96FF] mb-1">
              <FiCpu size={14} />
              <span>LANGUAGES</span>
            </div>
            <p className="font-['Space_Grotesk'] text-2xl font-bold text-[#F5F7FF]">C, C++, TS, C#</p>
            <p className="text-[11px] text-[#8D99B5]">Systems & Web Polyglot</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#1C2942] pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#4D7CFF] text-[#050914] font-bold shadow-md shadow-[#4D7CFF]/20"
                  : "border border-[#1C2942] bg-[#0D1424] text-[#8D99B5] hover:text-[#F5F7FF] hover:border-[#4D7CFF]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Contributions Cards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredContributions.map((contrib, idx) => (
            <motion.div
              key={contrib.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between rounded-xl border border-[#1C2942] bg-[#0D1424] p-6 transition-all duration-200 hover:border-[#4D7CFF]/50 hover:bg-[#10182A] hover:shadow-lg hover:shadow-[#4D7CFF]/5"
            >
              <div>
                {/* Header: Organization, Repo, and Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-[#4D7CFF]/30 bg-[#4D7CFF]/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-[#6D96FF]">
                      {contrib.org}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#080E1B] px-2 py-0.5 text-[10px] font-mono text-[#8D99B5] border border-[#1C2942]">
                      <FaStar size={10} className="text-amber-400" />
                      {contrib.stars}
                    </span>
                  </div>

                  <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
                    {contrib.type}
                  </span>
                </div>

                {/* Repository Name & Date */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8D99B5] mb-2">
                  <span className="font-semibold text-[#D1D7E6]">{contrib.repo}</span>
                  <span>{contrib.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors leading-snug">
                  {contrib.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#BAC5D8] leading-relaxed">
                  {contrib.description}
                </p>

                {/* Architectural Impact */}
                <div className="mt-3.5 rounded-lg border border-[#1C2942]/70 bg-[#080E1B] p-3">
                  <div className="flex items-start gap-2">
                    <HiOutlineSparkles className="h-4 w-4 text-[#4D7CFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#4D7CFF] block">
                        System Impact
                      </span>
                      <p className="text-xs text-[#8D99B5] mt-0.5">
                        {contrib.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {contrib.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[#142036] bg-[#080E1B] px-2 py-0.5 text-[10px] font-mono text-[#8D99B5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-[#1C2942] pt-4">
                <a
                  href={contrib.commitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
                >
                  <FiGitCommit size={13} />
                  <span>Commit: {contrib.commit}</span>
                </a>

                <a
                  href={contrib.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
                >
                  <FaGithub size={13} />
                  <span>View Upstream Repo</span>
                  <HiArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OpenSource;
