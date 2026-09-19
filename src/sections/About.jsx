import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          subtitle="About Me"
          title="Building Software Beyond CRUD Applications"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 mt-16"
        >
          {/* Left - Text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-zinc-400">
              I'm a Software Engineering student passionate about building
              high-performance systems and developer-centric tools.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Rather than building generic applications, I focus on solving
              engineering challenges involving packet inspection, network
              visualization, HTTP proxies, and scalable software design.
            </p>
          </div>

          {/* Right - Professional Highlights */}
          <div className="grid gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                Core Interests
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                {["Frontend Engineering", "Networking", "Systems Programming", "Developer Tools"].map((interest) => (
                  <span key={interest} className="rounded-full bg-zinc-800/50 px-3 py-1">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                {["Spring Boot", "Docker", "System Design", "Advanced DSA"].map((item) => (
                  <span key={item} className="rounded-full bg-zinc-800/50 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;