"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { Meteors } from "./ui/Meteors";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { motion as Motion, AnimatePresence } from "motion/react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    {
      name: "Events",
      link: "#events",
      dropdown: [
        { name: "Hackathons", link: "#hackathons" },
        { name: "Workshops", link: "#workshops" },
        { name: "Competitions", link: "#competitions" },
      ],
    },
    { name: "Initiatives", link: "#initiatives" },
    { name: "Team", link: "#team" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="relative w-full z-[1000]">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          {/* Center Menu with Events dropdown */}
          <div className="hidden flex-1 items-center justify-center text-sm font-medium lg:flex">
            <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
              {navItems.map((item, idx) => {
                const hasDropdown = Array.isArray(item.dropdown);
                return (
                  <div
                    key={`desktop-item-${idx}`}
                    className="relative px-1"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={item.link}
                      onMouseEnter={() => hasDropdown && setOpenDropdown(idx)}
                      className="block rounded-full px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      <span className="relative z-20 flex items-center gap-1">
                        {item.name}
                        {hasDropdown && (
                          <IconChevronDown size={16} className="mt-[1px]" />
                        )}
                      </span>
                    </a>

                    {/* Dropdown */}
                    {hasDropdown && (
                      <AnimatePresence>
                        {openDropdown === idx && (
                          <Motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="absolute left-1/2 z-[70] mt-2 -translate-x-1/2 min-w-[200px] rounded-xl border border-black/10 bg-white p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900 dark:ring-white/10"
                          >
                            {item.dropdown.map((sub, sIdx) => (
                              <a
                                key={`desktop-sub-${idx}-${sIdx}`}
                                href={sub.link}
                                className="block rounded-lg px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-white/5"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <NavbarButton variant="purple" href="#contact">
              Contact Team
            </NavbarButton>
            
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-2">
              {navItems.map((item, idx) => {
                const hasDropdown = Array.isArray(item.dropdown);
                const isOpen = openDropdown === idx;
                return (
                  <div key={`mobile-item-${idx}`} className="w-full">
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-neutral-800 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
                      onClick={() =>
                        hasDropdown
                          ? setOpenDropdown(isOpen ? null : idx)
                          : setIsMobileMenuOpen(false)
                      }
                    >
                      <a href={item.link} className="flex-1">
                        {item.name}
                      </a>
                      {hasDropdown && (
                        <IconChevronDown
                          size={30}
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </button>
                    {/* Mobile dropdown */}
                    {hasDropdown && (
                      <AnimatePresence>
                        {isOpen && (
                          <Motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-2 mt-1 flex flex-col overflow-hidden rounded-md border border-white/10 bg-neutral-950/60 p-1"
                          >
                            {item.dropdown.map((sub, sIdx) => (
                              <a
                                key={`mobile-sub-${idx}-${sIdx}`}
                                href={sub.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </Motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}

              <div className="mt-3 flex w-full flex-col gap-2">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="purple"
                  className="w-full"
                  href="#contact"
                >
                  Contact Team
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
