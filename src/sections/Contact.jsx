import { motion } from "framer-motion";
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
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let's connect.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            I'm currently looking for engineering opportunities.
            If you'd like to work together or just say hi, feel free to reach out.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.link}
                target={contact.name === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
                className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
              >
                <div className="mb-4 text-zinc-400">{contact.icon}</div>
                <h3 className="text-base font-semibold text-zinc-100">{contact.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;