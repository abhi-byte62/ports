import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode, SiCodeforces } from "react-icons/si";

import Container from "../Container/Container";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/abhi-byte62",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/abhishekmr029/",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/playboldAbhi/",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces />,
    link: "https://codeforces.com/profile/playboldAbhi",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#2e2e3a] bg-[#0a0a0c]">
      <Container>
        <div className="py-16">
          {/* Top */}
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            {/* Left */}
            <div className="max-w-lg">
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#00f0ff] glow-border inline-block rounded px-2 py-1">
                &lt;AMR /&gt;
              </h2>

              <p className="mt-5 font-terminal text-sm leading-7 text-[#8f8f9a]">
                <span className="text-[#00ff9d]">$</span> whoami — software
                engineering student obsessed with packets, proxies, protocols &
                scalable systems.
              </p>
            </div>

            {/* Right */}
            <div>
              <h3 className="mb-4 font-terminal text-xs tracking-widest text-[#a855f7]">
                CONNECT // UPLINK
              </h3>

              <div className="flex gap-4 font-terminal text-sm">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className="flex items-center gap-1.5 rounded border border-[#2e2e3a] bg-[#121216] px-3 py-2 text-[#8f8f9a] transition-all hover:border-[#00f0ff]/60 hover:text-[#00f0ff] hover:glow-border"
                  >
                    {social.icon}
                    <span className="hidden lg:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-[#2e2e3a]" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-5 font-terminal text-xs text-[#8f8f9a] md:flex-row">
            <p>
              © {new Date().getFullYear()} Abhishek M R — all systems
              operational
            </p>

            <p className="text-[#a855f7]">
              &gt; built with React • Vite • Tailwind • Framer Motion
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;