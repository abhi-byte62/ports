import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode, SiCodeforces } from "react-icons/si";

import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#09090B]">
      <Container>
        <div className="py-20">
          {/* Top */}

          <div className="flex flex-col justify-between gap-12 md:flex-row">
            {/* Left */}

            <div className="max-w-lg">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold">
                &lt;AMR /&gt;
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Software Engineer passionate about backend systems, networking,
                developer tools, and building scalable software that solves
                real-world problems.
              </p>
            </div>

            {/* Right */}

            <div>
              <h3 className="mb-5 text-lg font-semibold">Connect</h3>

              <div className="flex gap-5 text-2xl">
                <a
                  href="https://github.com/abhi-byte62"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-blue-400"
                >
                  <FaGithub />
                </a>

                <a
                  href="YOUR_LINKEDIN"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="YOUR_LEETCODE"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-blue-400"
                >
                  <SiLeetcode />
                </a>

                <a
                  href="YOUR_CODEFORCES"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-blue-400"
                >
                  <SiCodeforces />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="my-12 h-px bg-zinc-800" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-6 text-sm text-zinc-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Abhishek M R. All rights reserved.
            </p>

            <p>Built with React • Vite • Tailwind CSS • Framer Motion</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
