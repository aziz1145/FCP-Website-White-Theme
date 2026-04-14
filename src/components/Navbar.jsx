import { useState } from "react";
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

  const navLinkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive ? "text-green-500" : "text-white hover:text-green-400"
    }`;

  return (
    <header className="fixed top-9 md:top-10 left-0 right-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="FCP Logo"
              className="w-10 h-10 object-contain"
            />

            <div className="leading-tight">
              <span className="block text-white font-bold text-sm md:text-base">
                Friends Club Pakistan
              </span>
              <span className="block text-green-500 text-xs md:text-sm">
                Welfare Foundation
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/support" className="premium-btn premium-btn-primary">
              Support
            </Link>

          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
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
                className="mt-2 inline-block w-fit rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
              >
                Support
              </Link>

              <div className="mt-2"></div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
