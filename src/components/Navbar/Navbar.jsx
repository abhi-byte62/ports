import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";

const navLinks = [
  { name: "PROJECTS", href: "#projects", num: "01" },
  { name: "OPEN_SOURCE", href: "#opensource", num: "02" },
  { name: "SKILLS", href: "#skills", num: "03" },
  { name: "ABOUT", href: "#about", num: "04" },
  { name: "CONTACT", href: "#contact", num: "05" },
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
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-150 ${
        scrolled
          ? "bg-[#080D1A]/95 backdrop-blur-md border-b-2 border-[#334366] py-2.5 shadow-[0_4px_0px_#04070D]"
          : "bg-[#080D1A]/85 backdrop-blur-sm border-b-2 border-[#334366]/70 py-3"
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
          className="group flex items-center gap-2.5 text-[#E6EAF2] hover:text-[#55E6C1] transition-colors"
          aria-label="PLAYBOLD OS - Home"
        >
          <span className="h-3 w-3 bg-[#55E6C1] border border-[#080D1A] shadow-[2px_2px_0px_#334366] animate-pixel-blink" />
          <div className="flex flex-col">
            <span className="font-pixel text-[11px] text-white tracking-wider group-hover:text-[#55E6C1]">
              PLAYBOLD<span className="text-[#55E6C1]">_OS</span>
            </span>
            <span className="text-[9px] font-mono text-[#64748B] -mt-0.5">
              ABHISHEK M R
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-pixel text-[9px]">
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.href.replace("#", "");
            if (isHome) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 transition-all duration-100 border ${
                    isActive
                      ? "bg-[#141E36] border-[#55E6C1] text-[#55E6C1] shadow-[2px_2px_0px_#04070D]"
                      : "border-transparent text-[#94A3B8] hover:text-white hover:bg-[#0F172A] hover:border-[#334366]"
                  }`}
                >
                  <span className="text-[#55E6C1] mr-1">{link.num}.</span>
                  <span>{link.name}</span>
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={`/${link.href}`}
                className="px-3 py-1.5 border border-transparent text-[#94A3B8] hover:text-white hover:bg-[#0F172A] hover:border-[#334366] transition-colors"
              >
                <span className="text-[#55E6C1] mr-1">{link.num}.</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions (Terminal & Resume) */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="pixel-btn !py-1.5 !px-2.5 !text-[8px] !bg-[#0F172A]"
              title="Open Command Terminal (Ctrl+K)"
            >
              <span>CMD</span>
              <span className="text-[#55E6C1]">[CTRL+K]</span>
            </button>
          )}

          <Link
            to="/resume"
            className="pixel-btn pixel-btn-primary !py-1.5 !px-3 !text-[8px]"
          >
            <span>RESUME.EXE</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="pixel-btn !p-1.5 !text-[8px] !bg-[#0F172A]"
            >
              CMD
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#94A3B8] hover:text-white p-2 border-2 border-[#334366] bg-[#0F172A] shadow-[2px_2px_0px_#04070D]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b-2 border-[#334366] px-4 py-4 space-y-3 shadow-2xl animate-in fade-in duration-100">
          <div className="font-pixel text-[9px] text-[#55E6C1] pb-2 border-b border-[#334366]">
            [ NAVIGATION MATRIX ]
          </div>
          <nav className="flex flex-col space-y-2 font-pixel text-[9px]">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.href.replace("#", "");
              if (isHome) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`px-3 py-2 border-2 transition-all ${
                      isActive
                        ? "bg-[#141E36] border-[#55E6C1] text-[#55E6C1] shadow-[2px_2px_0px_#04070D]"
                        : "bg-[#080D1A] border-[#334366] text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    &gt; {link.num}. {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  onClick={closeMenu}
                  className="px-3 py-2 bg-[#080D1A] border-2 border-[#334366] text-[#94A3B8] hover:text-white transition-colors"
                >
                  &gt; {link.num}. {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[#334366]">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="pixel-btn pixel-btn-primary w-full text-center"
            >
              ACCESS RESUME.EXE
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
