import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {/* NGO Info */}
          <div>
            <h2 className="mb-3 text-lg font-bold text-white">
              Friends Club Pakistan
            </h2>
            <p className="mb-3 text-sm text-green-400">Welfare Foundation</p>
            <p className="mx-auto max-w-xs text-sm leading-6 text-slate-300">
              Serving humanity through welfare initiatives, community support,
              and relief efforts across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-green-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-300 hover:text-green-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white font-semibold mb-2">Connect With Us</h3>

            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fcp_welfare_foundation/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-green-400 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm8.5 1.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5h8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5zm5.25-.88a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/fcp-welfare-foundation/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-green-400 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 6 3.33 6 7.66V24h-5v-6.94c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24h-5V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@FCPWelfareFoundation"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-green-400 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.95-1.9-.95-2.36-1C16.84 2.5 12 2.5 12 2.5h0s-4.84 0-8.2.34c-.46.05-1.46.05-2.36 1C.73 4.56.5 6.2.5 6.2S.25 8.1.25 10v1.99c0 1.9.25 3.8.25 3.8s.23 1.64.94 2.36c.9.95 2.08.92 2.61 1.02 1.9.18 8 .34 8 .34s4.84 0 8.2-.34c.46-.05 1.46-.05 2.36-1 .71-.72.94-2.36.94-2.36s.25-1.9.25-3.8V10c0-1.9-.25-3.8-.25-3.8zM9.75 14.57V7.43L15.5 11l-5.75 3.57z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:Info@friendsclub.org.pk"
                className="text-slate-300 hover:text-green-400 transition transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.5L2 6.75V18h20V6.75L12 13.5zm10-9H2l10 6.75L22 4.5z" />
                </svg>
              </a>
            </div>

            <span className="text-slate-500 text-sm">
              Facebook — Coming Soon
            </span>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © Friends Club Pakistan Welfare Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
