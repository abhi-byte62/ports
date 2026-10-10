import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight, HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const links = [
  {
    name: "EMAIL",
    value: "mrabhisheak@gmail.com",
    href: "mailto:mrabhisheak@gmail.com",
    icon: <FaEnvelope size={14} />,
    color: "#55E6C1",
  },
  {
    name: "LINKEDIN",
    value: "in/abhishekmr029",
    href: "https://www.linkedin.com/in/abhishekmr029/",
    icon: <FaLinkedin size={14} />,
    color: "#8AA4FF",
  },
  {
    name: "GITHUB",
    value: "github.com/abhi-byte62",
    href: "https://github.com/abhi-byte62",
    icon: <FaGithub size={14} />,
    color: "#E6EAF2",
  },
  {
    name: "LEETCODE",
    value: "u/playboldAbhi",
    href: "https://leetcode.com/u/playboldAbhi/",
    icon: <SiLeetcode size={14} />,
    color: "#FFD166",
  },
  {
    name: "CODEFORCES",
    value: "profile/playboldAbhi",
    href: "https://codeforces.com/profile/playboldAbhi",
    icon: <SiCodeforces size={14} />,
    color: "#8AA4FF",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mrabhisheak@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="py-20 bg-[#080D1A] text-[#E6EAF2] border-t-2 border-[#334366]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] text-[#55E6C1]">
              <span className="h-2 w-2 bg-[#55E6C1] animate-pixel-blink" />
              <span>FINAL CHECKPOINT // 05</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-pixel-heading">
              Let's build something difficult.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-mono">
              I am interested in systems engineering, low-latency infrastructure, distributed backends, and quantitative engineering roles. If you are solving performance-critical or technically demanding challenges, reach out directly.
            </p>
          </div>

          {/* Action Console Box */}
          <div className="pixel-frame p-6 sm:p-8 mb-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#334366] text-[9px] font-pixel text-[#94A3B8]">
              <span>COMMUNICATION_CONSOLES</span>
              <span className="text-[#55E6C1]">[READY_TO_TRANSMIT]</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:mrabhisheak@gmail.com"
                className="pixel-btn pixel-btn-primary"
              >
                <FaEnvelope size={12} />
                <span>mrabhisheak@gmail.com</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="pixel-btn pixel-btn-secondary"
              >
                {copied ? <HiCheck size={14} className="text-[#55E6C1]" /> : <HiOutlineClipboardCopy size={14} />}
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
              </button>

              <Link
                to="/resume"
                className="pixel-btn pixel-btn-warm"
              >
                <span>VIEW RESUME.EXE</span>
                <HiArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Clean Contact Directory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "EMAIL" ? "_self" : "_blank"}
                rel="noreferrer"
                className="pixel-frame-interactive p-3.5 group block"
              >
                <div className="flex items-center gap-2 text-[#94A3B8] group-hover:text-white transition-colors">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span className="text-[10px] font-pixel text-white">{item.name}</span>
                </div>
                <div className="text-xs font-mono text-[#64748B] group-hover:text-[#94A3B8] mt-2 truncate transition-colors">
                  {item.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;