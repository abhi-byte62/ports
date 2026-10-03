import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080C]/80 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
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
          className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors"
          aria-label="Abhishek M R - Home"
        >
          AMR
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
          {navLinks.map((link) => {
            const targetHref = isHome ? link.href : `/${link.href}`;
            const isActive = isHome && activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={targetHref}
                className={`transition-colors duration-200 ${
                  isActive ? "text-white font-medium" : "hover:text-white"
                }`}
              >
                {link.name}
              </a>
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
            <span className="text-sky-400">→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-400 hover:text-white p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0C12] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const targetHref = isHome ? link.href : `/${link.href}`;
              const isActive = isHome && activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={targetHref}
                  onClick={closeMenu}
                  className={`text-base transition-colors ${
                    isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="text-sm font-medium text-sky-400 hover:text-sky-300 flex items-center gap-2"
            >
              <span>View Resume</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
