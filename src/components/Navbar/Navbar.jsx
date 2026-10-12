import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiCommand } from "react-icons/fi";
import useActiveSection from "../../hooks/useActiveSection";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#opensource" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenCommandPalette }) => {
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
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#080D1A]/90 backdrop-blur-md border-b border-white/[0.08] py-2.5 shadow-lg shadow-black/20"
          : "bg-[#080D1A]/75 backdrop-blur-sm border-b border-white/[0.04] py-3.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
          className="group flex items-center gap-2.5 text-[#F1F5F9] hover:text-white transition-colors"
          aria-label="Abhishek M R - Home"
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              Abhishek M R
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 border-l border-slate-700 pl-2">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.href.replace("#", "");
            if (isHome) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    isActive
                      ? "bg-white/[0.08] text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
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
                className="px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Cmd+K & Resume) */}
        <div className="hidden md:flex items-center gap-2.5">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.18] transition-all"
              title="Open Command Palette (Ctrl+K)"
            >
              <FiCommand size={12} />
              <span>Search</span>
              <kbd className="text-[10px] bg-white/[0.06] px-1 py-0.5 rounded text-slate-400 border border-white/[0.08]">
                Ctrl K
              </kbd>
            </button>
          )}

          <Link
            to="/resume"
            className="btn-primary !text-xs !py-1.5 !px-3"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="p-1.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white text-xs"
              aria-label="Search"
            >
              <FiCommand size={14} />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="text-slate-300 hover:text-white p-1.5 rounded-md bg-white/[0.04] border border-white/[0.08]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-[#0A0E1A]/95 border-b border-white/[0.08] px-4 py-4 space-y-2 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.href.replace("#", "");
              if (isHome) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-white/[0.08] text-white font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
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
                  className="px-3 py-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-white/[0.08]">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="btn-primary w-full text-center !py-2 !text-xs"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  onOpenCommandPalette: PropTypes.func,
};

export default Navbar;
