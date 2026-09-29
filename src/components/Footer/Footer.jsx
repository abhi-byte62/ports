import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import Container from "../Container/Container";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={16} />,
    link: "https://github.com/abhi-byte62",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={16} />,
    link: "https://www.linkedin.com/in/abhishekmr029/",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={16} />,
    link: "https://leetcode.com/u/playboldAbhi/",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={16} />,
    link: "https://codeforces.com/profile/playboldAbhi",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#222A32] bg-[#080A0C] text-[#8B96A3]">
      <Container>
        <div className="py-16">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* Left */}
            <div className="max-w-md">
              <h2 className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#F2F5F7]">
                Abhishek M R
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#8B96A3]">
                Software Engineer focused on backend architecture, distributed systems, real-time collaboration engines, and low-level performance.
              </p>
            </div>

            {/* Right: Social Links */}
            <div>
              <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#8B96A3]/70">
                Connect
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#222A32] bg-[#101419] px-3.5 py-2 text-xs font-medium text-[#8B96A3] transition-colors hover:border-[#5CE6A8] hover:text-[#5CE6A8]"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-[#222A32]" />

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#8B96A3]/70 sm:flex-row">
            <p>© {new Date().getFullYear()} Abhishek M R. Engineered for resilience and scale.</p>
            <p className="font-mono">Midnight Black // Electric Mint Design System</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;