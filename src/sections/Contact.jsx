import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight, HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const links = [
  {
    name: "Email",
    value: "mrabhisheak@gmail.com",
    href: "mailto:mrabhisheak@gmail.com",
    icon: <FaEnvelope size={15} />,
  },
  {
    name: "WhatsApp",
    value: "Direct Chat",
    href: "https://wa.me/917259371549?text=Hi%20Abhishek,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    icon: <FaWhatsapp size={15} />,
  },
  {
    name: "LinkedIn",
    value: "in/abhishekmr029",
    href: "https://www.linkedin.com/in/abhishekmr029/",
    icon: <FaLinkedin size={15} />,
  },
  {
    name: "GitHub",
    value: "github.com/abhi-byte62",
    href: "https://github.com/abhi-byte62",
    icon: <FaGithub size={15} />,
  },
  {
    name: "LeetCode",
    value: "u/playboldAbhi",
    href: "https://leetcode.com/u/playboldAbhi/",
    icon: <SiLeetcode size={15} />,
  },
  {
    name: "Codeforces",
    value: "profile/playboldAbhi",
    href: "https://codeforces.com/profile/playboldAbhi",
    icon: <SiCodeforces size={15} />,
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
    <Section id="contact" className="!py-16 sm:!py-20 !pb-12 bg-[#090A0F] text-[#EDEDED] border-t border-white/[0.06]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s build something exceptional.
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed font-normal">
              I am open to systems engineering, low-latency infrastructure, distributed backends, and quantitative engineering roles. Feel free to reach out directly.
            </p>
          </div>

          {/* Action Box */}
          <div className="rounded-2xl border border-neutral-800/80 bg-[#0C0D13] p-6 sm:p-7 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:mrabhisheak@gmail.com"
                className="btn-primary"
              >
                <FaEnvelope size={13} />
                <span>mrabhisheak@gmail.com</span>
              </a>

              <a
                href="https://wa.me/917259371549?text=Hi%20Abhishek,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-emerald-400 border-emerald-900/60 hover:border-emerald-800 bg-emerald-950/20 hover:bg-emerald-950/40"
              >
                <FaWhatsapp size={14} />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
              >
                {copied ? <HiCheck size={14} className="text-emerald-400" /> : <HiOutlineClipboardCopy size={14} />}
                <span>{copied ? "Copied" : "Copy email"}</span>
              </button>

              <Link
                to="/resume"
                className="btn-secondary"
              >
                <span>Resume</span>
                <HiArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Clean Contact Directory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
                className="rounded-xl border border-neutral-800/80 bg-[#0C0D13] p-4 group block hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
                  <span>{item.icon}</span>
                  <span className="text-xs font-semibold text-white">{item.name}</span>
                </div>
                <div className="text-[11.5px] font-mono text-neutral-400 group-hover:text-neutral-200 mt-2 truncate transition-colors" title={item.value}>
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