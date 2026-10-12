import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070B14] text-slate-400 py-10 text-xs font-mono select-none">
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Abhishek M R</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-xs">Bengaluru, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a
              href="https://wa.me/917259371549"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <FaWhatsapp size={13} />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <FaGithub size={13} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekmr029/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/playboldAbhi/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <SiLeetcode size={13} />
              <span>LeetCode</span>
            </a>
            <a
              href="https://codeforces.com/profile/playboldAbhi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <SiCodeforces size={13} />
              <span>Codeforces</span>
            </a>
            <Link to="/resume" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
              Resume &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;