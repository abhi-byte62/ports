import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import TerminalButton from "../components/Button/TerminalButton";

import HexGrid from "../components/Background/HexGrid";
import BinaryStream from "../components/Background/BinaryStream";

const bootLines = [
  { text: "[+] booting system ...", color: "text-[#8f8f9a]" },
  { text: "[+] loading kernel modules ...", color: "text-[#8f8f9a]" },
  { text: "[+] initializing packet interface", color: "text-[#00f0ff]" },
  { text: "[+] intercepting network traffic", color: "text-[#a855f7]" },
  { text: "[+] signals: STRONG (5 bars)", color: "text-[#00ff9d]" },
  { text: "[+] role: NETWORK ANALYST & DEVELOPER", color: "text-[#00ff9d]" },
];

const Hero = () => {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background - Terminal Aesthetic */}
      <HexGrid />
      <BinaryStream />

      {/* Hero Content */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl relative z-10"
        >
          {/* Terminal Prefix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 font-terminal text-sm md:text-base"
          >
            <div className="flex flex-wrap items-center gap-x-2 text-[#00f0ff]">
              <span className="text-[#00ff9d]">✓</span>
              <span>SYSTEM ONLINE</span>
              <span className="text-[#8f8f9a]">|</span>
              <span>PACKET MONITOR ACTIVE</span>
              <span className="text-[#8f8f9a] hidden sm:inline">|</span>
              <span className="hidden sm:inline text-[#a855f7]">SNIFFING _</span>
              <motion.span
                className="text-[#00ff9d]"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ▮
              </motion.span>
            </div>
          </motion.div>

          {/* Boot Sequence */}
          <div className="hidden md:block mb-10 font-terminal text-xs space-y-1 opacity-70">
            {bootLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={line.color}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-['Space_Grotesk']
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-bold leading-none
            "
          >
            <span className="text-[#00f0ff] text-terminal">ABHI_SHEK</span>
            <br />
            <span className="text-white">M R</span>
          </h1>

          {/* Role Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 font-terminal text-sm md:text-base text-[#8f8f9a]"
          >
            <span className="text-[#00f0ff]">const</span>{" "}
            <span className="text-[#facc15]">role</span>{" "}
            <span className="text-[#8f8f9a]">=</span>{" "}
            <span className="text-[#00ff9d]">'NETWORK ANALYST &amp; DEVELOPER'</span>
            <span className="text-[#8f8f9a]">;</span>
          </motion.p>

          {/* Description */}
          <p
            className="
              mt-8 max-w-2xl
              text-lg md:text-xl leading-relaxed
              text-[#8f8f9a]
            "
          >
            Building <span className="text-[#00f0ff]">networking tools</span>,
            <span className="text-[#a855f7]"> developer systems</span>, and
            backend infrastructure that{" "}
            <span className="text-[#00ff9d]">turns packet chaos into fast, observant software</span>.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <TerminalButton href="/resume.pdf" download>
              DOWNLOAD_RESUME.exe
            </TerminalButton>

            <TerminalButton
              href="https://github.com/abhi-byte62"
              target="_blank"
              className="border-[#a855f7] text-[#a855f7] hover:bg-[#a855f710] glow-border"
            >
              <FaGithub className="text-lg" />
              git clone portfolio
            </TerminalButton>
          </div>
        </motion.div>
      </Container>

      {/* Terminal Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-terminal text-xs text-[#8f8f9a] group"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-[#00f0ff]">[SCAN DOWN]</span>
            <span className="mt-1 text-[#00ff9d]">↓</span>
          </motion.div>
          <span className="text-[10px] tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
            v1.0.4-beta
          </span>
        </div>
      </motion.a>
    </Section>
  );
};

export default Hero;