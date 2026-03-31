"use client";

import { useState } from "react";
// import { DarkModeToggler } from "@/components/ui/DarkModeToggler";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* <DarkModeToggler/> */}

      {/* Desktop nav */}
      <nav
        id="desktop-nav"
        className="hidden lg:flex justify-around items-center h-[17vh]"
      >
        <span className="text-3xl font-medium cursor-default">
          Jeffrey Chee
        </span>
        <ul className="flex gap-8 list-none text-2xl">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-foreground no-underline transition-opacity duration-300 hover:opacity-70 hover:underline underline-offset-[1rem] decoration-foreground/40"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger nav */}
      <nav
        id="hamburger-nav"
        className="flex min-h-[104px] items-end justify-between px-5 pb-4 pt-14 lg:hidden"
      >
        <span className="cursor-default text-[1.85rem] font-medium leading-none sm:text-2xl">
          Jeffrey Chee
        </span>
        <div className="relative">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-8 w-10 cursor-pointer flex-col justify-between p-1"
          >
            <span
              className="block w-full h-[3px] bg-foreground rounded-sm transition-all duration-300"
              style={
                menuOpen
                  ? { transform: "rotate(45deg) translate(10px, 5px)" }
                  : undefined
              }
            />
            <span
              className="block w-full h-[3px] bg-foreground rounded-sm transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : undefined}
            />
            <span
              className="block w-full h-[3px] bg-foreground rounded-sm transition-all duration-300"
              style={
                menuOpen
                  ? { transform: "rotate(-45deg) translate(10px, -5px)" }
                  : undefined
              }
            />
          </button>

          {menuOpen && (
            <ul className="absolute top-full right-0 z-50 mt-2 w-max list-none rounded-xl border border-foreground/15 bg-background p-3 shadow-md">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-center text-xl text-foreground no-underline transition-opacity duration-300 hover:opacity-70"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
