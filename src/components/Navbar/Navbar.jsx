import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import useActiveSection from "../../hooks/useActiveSection";
import { navigation } from "../../data/navigation";

import Container from "../Container/Container";
import Button from "../Button/Button";

const Navbar = () => {
  const activeSection = useActiveSection();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-zinc-800"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}

          <a
            href="#hero"
            className="
              font-['Space_Grotesk']
              text-2xl
              font-bold
              tracking-tight
            "
          >
            &lt;AMR /&gt;
          </a>

          {/* Desktop Navigation */}

          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`
                    transition-all
                    duration-300
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "text-blue-400"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume */}

          <div className="hidden md:block">
            <Button href="/resume.pdf" target="_blank">
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white md:hidden"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </nav>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            className="
              md:hidden
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/95
              p-6
              backdrop-blur-xl
            "
          >
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      text-lg
                      transition-all
                      duration-300
                      ${
                        activeSection === item.href.replace("#", "")
                          ? "text-blue-400"
                          : "text-zinc-300 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/resume.pdf" target="_blank">
                Resume
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
