import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#334366] bg-[#050811] text-[#94A3B8] py-8 text-xs font-mono select-none">
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-pixel text-[10px] text-[#E6EAF2] hover:text-[#55E6C1] transition-colors flex items-center gap-1.5"
            >
              <span className="h-2 w-2 bg-[#55E6C1] animate-pixel-blink" />
              <span>PLAYBOLD_OS</span>
            </Link>
            <span className="text-[#334366]">/</span>
            <span className="text-[#94A3B8] text-xs">Abhishek M R</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#55E6C1] transition-colors"
            >
              <FaGithub size={12} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekmr029/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#8AA4FF] transition-colors"
            >
              <FaLinkedin size={12} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/playboldAbhi/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#FFD166] transition-colors"
            >
              <SiLeetcode size={12} />
              <span>LeetCode</span>
            </a>
            <a
              href="https://codeforces.com/profile/playboldAbhi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-[#8AA4FF] transition-colors"
            >
              <SiCodeforces size={12} />
              <span>Codeforces</span>
            </a>
            <Link to="/resume" className="text-[#55E6C1] hover:underline font-pixel text-[9px]">
              RESUME.EXE &gt;&gt;
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;