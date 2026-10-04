import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import OpenSource from "../sections/OpenSource";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import SEO from "../components/SEO/SEO";

import Reveal from "../components/Reveal/Reveal";

const Home = () => {
  return (
    <>
      <SEO
        title="Abhishek M R | Software Engineer"
        description="Software Engineer specializing in low-latency systems, developer infrastructure, and distributed software with a focus on performance and correctness."
        keywords="Software Engineer, C++, Java, Spring Boot, Distributed Systems, Low-Latency, PostgreSQL, Redis, RabbitMQ"
      />
      <Hero />

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <OpenSource />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
};

export default Home;

