import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const links = [
  {
    name: "Email",
    value: "mrabhisheak@gmail.com",
    href: "mailto:mrabhisheak@gmail.com",
    icon: <FaEnvelope size={14} />,
  },
  {
    name: "LinkedIn",
    value: "in/abhishekmr029",
    href: "https://www.linkedin.com/in/abhishekmr029/",
    icon: <FaLinkedin size={14} />,
  },
  {
    name: "GitHub",
    value: "github.com/abhi-byte62",
    href: "https://github.com/abhi-byte62",
    icon: <FaGithub size={14} />,
  },
  {
    name: "LeetCode",
    value: "u/playboldAbhi",
    href: "https://leetcode.com/u/playboldAbhi/",
    icon: <SiLeetcode size={14} />,
  },
  {
    name: "Codeforces",
    value: "profile/playboldAbhi",
    href: "https://codeforces.com/profile/playboldAbhi",
    icon: <SiCodeforces size={14} />,
  },
];

const Contact = () => {
  return (
    <Section id="contact" className="py-24 bg-[#08080C] text-white border-t border-white/[0.08]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Let's build something difficult.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              I am interested in software engineering, systems, and quantitative development. If you are working on something performance-critical or technically demanding, feel free to reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href="mailto:mrabhisheak@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <FaEnvelope size={13} />
              <span>mrabhisheak@gmail.com</span>
            </a>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white hover:border-white/[0.24] transition-colors"
            >
              <span>View Resume</span>
              <HiArrowRight size={13} />
            </Link>
          </div>

          {/* Clean Contact Directory */}
          <div className="pt-8 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
                    {item.icon}
                    <span className="font-medium text-white text-xs">{item.name}</span>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 mt-1 truncate transition-colors">
                    {item.value}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;