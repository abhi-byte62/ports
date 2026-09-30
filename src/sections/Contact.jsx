import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { Link } from "react-router-dom";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";


const contacts = [
  {
    name: "Email",
    icon: <FaEnvelope size={16} />,
    link: "mailto:mrabhisheak@gmail.com",
    value: "mrabhisheak@gmail.com",
    label: "Direct Inquiries",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={16} />,
    link: "https://www.linkedin.com/in/abhishekmr029/",
    value: "in/abhishekmr029",
    label: "Professional Profile",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={16} />,
    link: "https://github.com/abhi-byte62",
    value: "github.com/abhi-byte62",
    label: "Source Code & Repos",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={16} />,
    link: "https://leetcode.com/u/playboldAbhi/",
    value: "u/playboldAbhi",
    label: "Problem Solving",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={16} />,
    link: "https://codeforces.com/profile/playboldAbhi",
    value: "profile/playboldAbhi",
    label: "Competitive Programming",
  },
];

const Contact = () => {
  return (
    <Section id="contact" className="relative pb-24">
      <Container>
        <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
              CONTACT & CHANNELS
            </span>
            <h2 className="mt-2 font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FF]">
              Get in Touch
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#8D99B5] leading-relaxed">
              I am open to software engineering, backend systems, and quant developer roles. Whether you have an engineering problem to discuss or an opportunity, feel free to reach out directly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:mrabhisheak@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-[#4D7CFF] px-4 py-2.5 text-sm font-semibold text-[#050914] transition-all hover:bg-[#6D96FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D7CFF]"
              >
                <FaEnvelope size={14} />
                Send Email
              </a>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#050914] px-4 py-2.5 text-sm font-medium text-[#F5F7FF] transition-colors hover:border-[#4D7CFF] hover:text-[#6D96FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D7CFF]"
              >
                View Full Resume
              </Link>
            </div>

          </div>

          <div className="relative z-10 mt-10 pt-8 border-t border-[#1C2942]">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target={contact.name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="group flex flex-col rounded-xl border border-[#1C2942] bg-[#050914] p-4 transition-all duration-200 hover:border-[#4D7CFF]/50 hover:bg-[#10182A]"
                >
                  <div className="flex items-center justify-between text-[#8D99B5] group-hover:text-[#4D7CFF] transition-colors mb-2">
                    {contact.icon}
                    <span className="text-[10px] font-mono text-[#5F6B83]">{contact.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#F5F7FF] truncate">{contact.label}</span>
                  <span className="mt-0.5 font-mono text-[11px] text-[#8D99B5] truncate">{contact.value}</span>
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