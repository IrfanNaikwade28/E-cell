import React from "react";
import Logo from "../assets/logo/logo.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="E-Cell Logo" className="size-20 opacity-90" />
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-3 text-base text-neutral-400">
              <li>
                <a className="hover:text-white/90 transition-colors" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white/90 transition-colors" href="#events">
                  Events
                </a>
              </li>
              <li>
                <a className="hover:text-white/90 transition-colors" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="hover:text-white/90 transition-colors" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} E-Cell. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-80"
              >
                <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.244-.017-2.255-3.338.726-4.042-1.607-4.042-1.607-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.291 0 .321.216.697.825.579C20.565 21.796 24 17.298 24 12 24 5.371 18.629 0 12 0z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-80"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V24h-4V8.5z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-80"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
