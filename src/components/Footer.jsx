import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* NGO Info */}
          <div>
            <h2 className="text-lg font-bold text-white mb-3">
              Friends Club Pakistan
            </h2>

            <p className="text-green-400 text-sm mb-3">
              Welfare Foundation
            </p>

            <p className="text-white/70 text-sm leading-6 max-w-xs mx-auto">
              Serving humanity through welfare initiatives, community support,
              and relief efforts across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-2 text-sm items-center">
              <li>
                <Link to="/" className="text-white/70 hover:text-green-400 transition">
                  • Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-green-400 transition">
                  • About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-green-400 transition">
                  • Projects
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/70 hover:text-green-400 transition">
                  • Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-green-400 transition">
                  • Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-3 text-sm items-center">

              <a
                href="https://www.instagram.com/fcp_welfare_foundation/"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-green-400 transition"
              >
                📸 Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/fcp-welfare-foundation/"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-green-400 transition"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@FCPWelfareFoundation"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-green-400 transition"
              >
                ▶️ YouTube
              </a>

              <a
                href="mailto:Info@friendsclub.org.pk"
                className="text-white/70 hover:text-green-400 transition"
              >
                ✉️ Info@friendsclub.org.pk
              </a>

              <span className="text-white/40">
                📘 Facebook — Coming Soon
              </span>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          © Friends Club Pakistan Welfare Foundation. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;