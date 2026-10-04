import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX, HiArrowRight } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#opensource" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#08080C]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
          className="text-sm font-semibold tracking-tight text-white hover:text-neutral-300 transition-colors"
          aria-label="Abhishek M R - Home"
        >
          Abhishek M R
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.href.replace("#", "");
            if (isHome) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-150 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={`/${link.href}`}
                className="transition-colors duration-150 hover:text-white"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Resume Action Link */}
        <div className="hidden md:flex items-center">
          <Link
            to="/resume"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Resume</span>
            <HiArrowRight size={13} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-400 hover:text-white p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0C12] border-b border-white/10 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.href.replace("#", "");
              if (isHome) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`transition-colors ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  onClick={closeMenu}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="text-sm font-medium text-white flex items-center gap-1.5"
            >
              <span>View Resume</span>
              <HiArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
