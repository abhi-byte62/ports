import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import Button from "../components/Button/Button";

import Grid from "../components/Background/Grid";
import Glow from "../components/Background/Glow";
import Network from "../components/Background/Network";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <Grid />
      <Glow />
      <Network />

      {/* Hero Content */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >
          {/* Subtitle */}
          <p className="mb-6 uppercase tracking-[0.3em] text-sm md:text-base text-zinc-400">
            Software Engineer
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-['Space_Grotesk']
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-none
            "
          >
            ABHISHEK
            <br />M R
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              md:text-xl
              leading-relaxed
              text-zinc-400
            "
          >
            Building scalable software, developer tools, and backend systems
            with a focus on performance.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/resume.pdf" download>
              Download Resume
            </Button>

            <Button
              href="https://github.com/abhi-byte62"
              target="_blank"
              className="bg-transparent border border-zinc-700 hover:border-blue-500 hover:bg-zinc-900"
            >
              <FaGithub className="text-lg" />
              GitHub
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <HiArrowDown size={28} className="text-zinc-500" />
      </motion.div>
    </Section>
  );
};

export default Hero;
