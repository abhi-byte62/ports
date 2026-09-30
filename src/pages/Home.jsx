import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
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
        description="Portfolio of Abhishek M R showcasing distributed systems, backend engineering, low-latency market simulation, and software architecture."
        keywords="Software Engineer, Java, Spring Boot, C++, Distributed Systems, PostgreSQL, Redis, RabbitMQ, Portfolio"
      />
      <Hero />

      <Reveal>
        <Projects />
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

