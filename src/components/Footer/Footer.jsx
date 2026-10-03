import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#08080C] text-neutral-500 py-12 text-xs font-sans">
      <Container>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-['Space_Grotesk'] font-bold text-sm text-neutral-300 hover:text-white transition-colors"
            >
              ABHISHEK M R
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="text-neutral-400">Software Engineer</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekmr029/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/playboldAbhi/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LeetCode
            </a>
            <Link to="/resume" className="text-sky-400 hover:text-sky-300 transition-colors">
              Resume →
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;