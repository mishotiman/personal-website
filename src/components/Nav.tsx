"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#interests", label: "Interests" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contributions", label: "Contributions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-neutral-800 sticky top-0 bg-neutral-950/80 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center text-sm">
        <Link href="/" className="font-semibold text-neutral-100">
          Misho
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-5 ml-auto text-neutral-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-100 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-neutral-300 hover:text-neutral-100 transition"
          aria-label="Toggle menu"
        >
          {open ? (
            // X icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4 text-neutral-400">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-neutral-100 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}