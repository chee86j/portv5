"use client";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="mx-4 py-8">
      <nav aria-label="Footer navigation">
        <ul className="mb-4 flex list-none flex-wrap justify-center gap-4 text-lg sm:gap-6 sm:text-xl">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-foreground no-underline transition-colors duration-300 hover:text-gray-500 hover:underline underline-offset-4 decoration-gray-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-center text-sm leading-relaxed text-[rgb(85,85,85)] dark:text-[rgb(193,193,193)]">
        Version 6.0 &mdash; Copyright &copy; {new Date().getFullYear()} Jeffrey
        Chee. All Rights Reserved.
      </p>
    </footer>
  );
}
