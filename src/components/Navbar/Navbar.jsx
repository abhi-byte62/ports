import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import useActiveSection from "../../hooks/useActiveSection";
import { navigation } from "../../data/navigation";

import Container from "../Container/Container";

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

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            ? "bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-[#2e2e3a]"
            : "bg-transparent"
        }
      `}
      role="banner"
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
          {/* Logo - Terminal Style */}
          <a
            href="#hero"
            className="
              font-['Space_Grotesk']
              text-xl font-bold tracking-tight
              family-terminal
              text-[#00f0ff]
              glow-border rounded px-2 py-1
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]
            "
            aria-label="Abhishek M R — Home"
          >
            {"<AMR />"}
          </a>

          {/* Desktop Navigation - Terminal Style */}
          <ul className="hidden items-center gap-8 md:flex font-terminal text-sm" role="menubar">
            {navigation.map((item) => (
              <li key={item.name} role="none">
                <a
                  href={item.href}
                  className={`
                    transition-all duration-300
                    font-terminal
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "text-[#00f0ff] glow-border px-2 py-1"
                        : "text-[#8f8f9a] hover:text-[#ffffff] hover:glow-border px-2 py-1"
                    }
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]
                  `}
                  role="menuitem"
                  aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
                >
                  [{item.name}[OPTIONAL]]
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume - Terminal Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                font-terminal
                text-sm
                tracking-wide
                border border-[#00f0ff]
                text-[#00f0ff]
                px-4 py-2
                rounded
                glow-border
                transition-all
                duration-300
                hover:bg-[#00f0ff10]
                hover:text-[#ffffff]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]
              "
              aria-label="Download Resume (opens in new tab)"
            >
              <span className="glow-border" aria-hidden="true">{">"}</span>
              DOWNLOAD RESUME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-3xl text-white md:hidden flex items-center justify-center w-12 h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </nav>

        {/* Mobile Menu - Terminal Style */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="
              md:hidden
              rounded-2xl
              border border-[#2e2e3a]
              bg-[#121216]/95
              p-6
              backdrop-blur-xl
              font-terminal text-sm
            "
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <ul className="space-y-4" role="menubar">
              {navigation.map((item) => (
                <li key={item.name} role="none">
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      block
                      text-[#a855f7] hover:text-[#00f0ff]
                      transition-all duration-300
                      ${activeSection === item.href.replace("#", "")
                        ? "glow-border px-2 py-1"
                        : "px-2 py-1"}
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]
                    `}
                    role="menuitem"
                    aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
                  >
                    [{item.name}[OPTIONAL]]
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  block
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  font-terminal
                  text-sm
                  tracking-wide
                  border border-[#00f0ff]
                  text-[#00f0ff]
                  px-4 py-3
                  rounded
                  glow-border
                  transition-all
                  duration-300
                  hover:bg-[#00f0ff10]
                  hover:text-[#ffffff]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]
                "
                aria-label="Download Resume (opens in new tab)"
              >
                <span className="cursor-blink" aria-hidden="true">{">"}</span>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
