import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/FCP logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Support", path: "/support" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ FIXED: useEffect instead of useState
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive ? "text-green-400" : "text-slate-200 hover:text-green-400"
    }`;

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 md:top-10 ${
        scrolled
          ? "bg-slate-900/95 shadow-xl border-b border-white/10"
          : "bg-slate-900/70"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="FCP Logo"
              className="h-10 w-10 object-contain"
            />

            <div className="leading-tight">
              <span className="block text-sm font-bold text-white md:text-base">
                Friends Club Pakistan
              </span>
              <span className="block text-xs text-green-400 md:text-sm">
                Welfare Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden items-center gap-4 md:flex">
            <Link to="/support" className="premium-btn premium-btn-primary">
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-white/10 bg-slate-900/95 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/support"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block w-fit rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-400"
              >
                Support
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
