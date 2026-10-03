import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
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
  return (
    <Section id="contact" className="py-24 bg-[#08080C] text-white border-t border-white/[0.08]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
              I am open to software engineering, backend systems, and quantitative developer opportunities. Feel free to reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="mailto:mrabhisheak@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <FaEnvelope size={14} />
              <span>mrabhisheak@gmail.com</span>
            </a>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <span>View Resume</span>
              <span className="text-sky-400">→</span>
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
                    <span className="font-semibold text-white text-xs">{item.name}</span>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 group-hover:text-sky-400 mt-1 truncate transition-colors">
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