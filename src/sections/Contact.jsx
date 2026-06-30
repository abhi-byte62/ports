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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Something Great Together.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              I'm currently looking for Software Engineering internships and
              full-time opportunities. If you're interested in backend systems,
              networking, developer tools, or scalable software, I'd love to
              connect.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <motion.a
                key={contact.name}
                href={contact.link}
                target={contact.name === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black/30
                  p-6
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-zinc-900
                "
              >
                <div className="mb-4 text-blue-400">{contact.icon}</div>

                <h3 className="text-lg font-semibold">{contact.name}</h3>

                <p className="mt-2 text-sm break-all text-zinc-400">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
