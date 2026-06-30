import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import SEO from "../components/SEO/SEO";

import Reveal from "../components/Reveal/Reveal";

const Home = () => {
  return (
    <>
      <SEO
        title="Abhishek M R | Software Engineer"
        description="Portfolio of Abhishek M R showcasing networking, backend, developer tools and software engineering projects."
        keywords="Software Engineer, Java, React, Node.js, Three.js, Networking, Portfolio"
      />
      <Hero />

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
};

export default Home;
