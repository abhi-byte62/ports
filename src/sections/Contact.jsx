import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const contacts = [
  {
    name: "Email",
    icon: <FaEnvelope size={20} />,
    link: "mailto:mrabhisheak@gmail.com",
    value: "mrabhisheak@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/in/abhishekmr029/",
    value: "linkedin.com/in/abhishekmr029",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    link: "https://github.com/abhi-byte62",
    value: "github.com/abhi-byte62",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={20} />,
    link: "https://leetcode.com/u/playboldAbhi/",
    value: "leetcode.com/u/playboldAbhi",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={20} />,
    link: "https://codeforces.com/profile/playboldAbhi",
    value: "codeforces.com/profile/playboldAbhi",
  },
];

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className="rounded-3xl border border-[#222A32] bg-[#101419] p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
          {/* Subtle faint mint radial highlight */}
          <div
            className="pointer-events-none absolute inset-0 -z-0 opacity-40"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(16, 38, 28, 0.5) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#5CE6A8]">
              GET IN TOUCH
            </span>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl md:text-5xl font-bold tracking-tight text-[#F2F5F7]">
              Let's connect.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base md:text-lg text-[#8B96A3] leading-relaxed">
              I'm open to software engineering opportunities, backend infrastructure roles, and collaborative projects. Feel free to reach out.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target={contact.name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center rounded-2xl border border-[#222A32] bg-[#080A0C] p-6 transition-all duration-200 hover:border-[#5CE6A8]/50 hover:bg-[#151B22]"
                >
                  <div className="mb-3 text-[#5CE6A8]">{contact.icon}</div>
                  <h3 className="text-sm font-semibold text-[#F2F5F7]">{contact.name}</h3>
                  <p className="mt-1 font-mono text-xs text-[#8B96A3]">{contact.value}</p>
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