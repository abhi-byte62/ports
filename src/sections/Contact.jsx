import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { SiLeetcode, SiCodeforces } from "react-icons/si";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const contacts = [
  {
    name: "Email",
    icon: <FaEnvelope size={18} />,
    link: "mailto:mrabhisheak@gmail.com",
    value: "mrabhisheak@gmail.com",
    priority: "+80",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    link: "https://www.linkedin.com/in/abhishekmr029/",
    value: "linkedin.com/in/abhishekmr029",
    priority: "+50",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    link: "https://github.com/abhi-byte62",
    value: "github.com/abhi-byte62",
    priority: "+30",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={18} />,
    link: "https://leetcode.com/u/playboldAbhi/",
    value: "leetcode.com/u/playboldAbhi",
    priority: "+20",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={18} />,
    link: "https://codeforces.com/profile/playboldAbhi",
    value: "codeforces.com/profile/playboldAbhi",
    priority: "+10",
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
          className="rounded-xl border border-[#2e2e3a] bg-[#121216]/80 overflow-hidden glow-border"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-[#2e2e3a] bg-[#0a0a0c] px-6 py-3 font-terminal text-xs">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff2a2a]/70" />
                <span className="h-3 w-3 rounded-full bg-[#facc15]/70" />
                <span className="h-3 w-3 rounded-full bg-[#00ff9d]/70" />
              </span>
              <span className="text-[#8f8f9a]">
                /opt/send-message/send_message.sh
              </span>
            </div>
            <span className="text-[#a855f7]">[UPLINK]</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white">
                Let's Build Something Great Together.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#8f8f9a]">
                Currently seeking Software Engineering internships and full-time
                roles. If you care about backend systems, networking, developer
                tools, or scalable software —{" "}
                <span className="text-[#00f0ff]">let's talk.</span>
              </p>

              <div className="mt-6 font-terminal text-xs text-[#8f8f9a]">
                <span className="text-[#00ff9d]">target</span>{" "}
                <span className="text-[#facc15]">:</span> human@planet-earth
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.link}
                  target={contact.name === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="
                    rounded-lg
                    border border-[#2e2e3a]
                    bg-[#0a0a0c]/60
                    p-5
                    font-terminal text-sm
                    transition-all duration-300
                    hover:border-[#00f0ff]/60
                    hover:bg-[#00f0ff]/5
                    group
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#00f0ff]">{contact.icon}</span>
                    <span className="text-[10px] tracking-wide text-[#00ff9d] border border-[#00ff9d]/40 rounded px-1.5 py-0.5">
                      {contact.priority}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-2">
                    <h3 className="text-[#e5e5e5] group-hover:text-[#00f0ff]">
                      {contact.name}
                    </h3>
                    <span className="text-[10px] text-[#8f8f9a]">
                      [rw-r--r--]
                    </span>
                  </div>

                  <p className="mt-1.5 break-all text-xs text-[#8f8f9a]">
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="mt-10 border-t border-[#2e2e3a] pt-6 font-terminal text-xs text-center text-[#8f8f9a]">
              <span className="text-[#00ff9d]">✓</span> message queued — expect
              a <span className="text-[#ff2a2a]">200 OK</span> within 24h
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;