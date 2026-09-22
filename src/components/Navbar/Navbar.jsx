import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import useActiveSection from "../../hooks/useActiveSection";
import { navigation } from "../../data/navigation";

import Container from "../Container/Container";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 shadow-sm"
            : "bg-transparent"
        }
      `}
      role="banner"
    >
      <Container>
        <nav className="flex h-16 md:h-20 items-center justify-between" aria-label="Main navigation">
          {/* Brand Logo */}
          <Link
            to="/"
            className="
              font-['Space_Grotesk']
              text-lg
              md:text-xl
              font-bold
              tracking-tight
              text-zinc-100
              hover:text-blue-400
              transition-colors
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
              rounded-md
              px-1
            "
            aria-label="Abhishek M R - Home"
          >
            Abhishek M R
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex text-sm font-medium" role="menubar">
            {navigation.map((item) => {
              const targetHref = isHome ? item.href : `/${item.href}`;
              const isActive = isHome && activeSection === item.href.replace("#", "");
              return (
                <li key={item.name} role="none">
                  <a
                    href={targetHref}
                    className={`
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "text-blue-400 font-semibold"
                          : "text-zinc-400 hover:text-zinc-100"
                      }
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      rounded
                      px-2
                      py-1
                    `}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-zinc-700/80
                bg-zinc-900/60
                px-4
                py-2
                text-sm
                font-medium
                text-zinc-200
                transition-all
                duration-200
                hover:border-zinc-500
                hover:bg-zinc-800/80
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
              aria-label="Download Resume (opens in new tab)"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-2xl text-zinc-300 md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </nav>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="
              md:hidden
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950/95
              p-6
              mt-2
              mb-4
              backdrop-blur-xl
              shadow-xl
            "
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <ul className="space-y-4" role="menubar">
              {navigation.map((item) => {
                const targetHref = isHome ? item.href : `/${item.href}`;
                const isActive = isHome && activeSection === item.href.replace("#", "");
                return (
                  <li key={item.name} role="none">
                    <a
                      href={targetHref}
                      onClick={closeMenu}
                      className={`
                        block
                        py-2
                        text-base
                        font-medium
                        transition-colors
                        ${
                          isActive
                            ? "text-blue-400 font-semibold"
                            : "text-zinc-300 hover:text-white"
                        }
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                        rounded
                      `}
                      role="menuitem"
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  block
                  w-full
                  text-center
                  rounded-lg
                  border
                  border-zinc-700
                  bg-zinc-900
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-zinc-800
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                "
                aria-label="Download Resume (opens in new tab)"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
