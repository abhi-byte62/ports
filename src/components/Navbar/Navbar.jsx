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
            ? "bg-[#050914]/90 backdrop-blur-md border-b border-[#1C2942] shadow-sm"
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
              text-[#F5F7FF]
              hover:text-[#4D7CFF]
              transition-colors
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#4D7CFF]
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
                          ? "text-[#4D7CFF] font-semibold"
                          : "text-[#8D99B5] hover:text-[#6D96FF]"
                      }
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#4D7CFF]
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
                border-[#1C2942]
                bg-[#0D1424]
                px-4
                py-2
                text-sm
                font-medium
                text-[#F5F7FF]
                transition-all
                duration-200
                hover:border-[#4D7CFF]
                hover:text-[#6D96FF]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#4D7CFF]
              "
              aria-label="Download Resume (opens in new tab)"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-xl text-[#8D99B5] hover:text-[#F5F7FF] md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[#1C2942] bg-[#0D1424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D7CFF]"
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
              border-[#1C2942]
              bg-[#0D1424]/95
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
                            ? "text-[#4D7CFF] font-semibold"
                            : "text-[#8D99B5] hover:text-[#6D96FF]"
                        }
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#4D7CFF]
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

            <div className="mt-6 pt-4 border-t border-[#1C2942]">
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
                  border-[#1C2942]
                  bg-[#050914]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-[#F5F7FF]
                  transition-colors
                  hover:border-[#4D7CFF]
                  hover:text-[#6D96FF]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#4D7CFF]
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
