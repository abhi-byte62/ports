import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import Container from "../Container/Container";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    link: "https://github.com/abhi-byte62",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    link: "https://www.linkedin.com/in/abhishekmr029/",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={18} />,
    link: "https://leetcode.com/u/playboldAbhi/",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={18} />,
    link: "https://codeforces.com/profile/playboldAbhi",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400">
      <Container>
        <div className="py-16">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            {/* Left */}
            <div className="max-w-md">
              <h2 className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-zinc-100">
                Abhishek M R
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Software Engineer focused on network protocols, high-concurrency stream architectures, and 3D telemetry visualizations.
              </p>
            </div>

            {/* Right: Social Links */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Connect
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-zinc-900" />

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Abhishek M R. Engineered for resilience and scale.</p>
            <p>Built with React, Vite, and Tailwind CSS.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;