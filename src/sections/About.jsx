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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Left */}

          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I'm a Software Engineering student who enjoys building backend
              systems, networking tools, and developer-focused applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Rather than building generic applications, I like solving
              engineering problems involving packet inspection, network
              visualization, HTTP proxies, and scalable software design.
            </p>
          </div>

          {/* Right */}

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="mb-2 text-xl font-semibold">Interests</h3>

              <p className="text-zinc-400">
                Frontend Engineering • Networking • Systems Programming •
                Developer Tools
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="mb-2 text-xl font-semibold">Currently Learning</h3>

              <p className="text-zinc-400">
                Spring Boot, Docker, System Design, Advanced DSA
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;
