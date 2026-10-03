import { Link } from "react-router-dom";
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
    <footer className="border-t border-[#1C2942] bg-[#050914] text-[#8D99B5]">
      <Container>
        <div className="py-16">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* Left */}
            <div className="max-w-md">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#F5F7FF] hover:text-[#4D7CFF] transition-colors inline-block"
                aria-label="Back to top / Home"
              >
                Abhishek M R
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-[#8D99B5]">
                Software Engineer focused on backend architecture, distributed systems, real-time collaboration engines, and low-level performance.
              </p>
            </div>

            {/* Right: Social Links */}
            <div>
              <p className="mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#5F6B83]">
                Connect
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-2 text-xs font-medium text-[#8D99B5] transition-colors hover:border-[#4D7CFF] hover:text-[#6D96FF]"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-[#1C2942]" />

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#5F6B83] sm:flex-row">
            <p>© {new Date().getFullYear()} Abhishek M R. Engineered for resilience and scale.</p>
            <p className="font-mono">Deep Navy // Brand Blue Architecture</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;