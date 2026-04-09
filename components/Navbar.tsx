"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/vfs-method", label: "VFS Method" },
  { href: "/case-files", label: "Case Files" },
  { href: "/systems", label: "Systems" },
  { href: "/doctrine", label: "Doctrine" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: "1px solid #d4d0c8",
        backgroundColor: "#f5f4f0",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Matthew Brian Tahir
          <span
            style={{
              color: "#6b6b6b",
              fontWeight: 400,
              marginLeft: "0.5rem",
              whiteSpace: "nowrap" // Prevents the slash from jumping to a new line
            }}
          >
            / DSE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // style={{
              //   fontFamily: "'IBM Plex Mono', monospace",
              //   fontSize: "0.62rem",
              //   letterSpacing: "0.2em",
              //   textTransform: "uppercase",
              //   color: pathname === link.href ? "#0a0a0a" : "#6b6b6b",
              //   textDecoration: "none",
              //   transition: "color 0.2s",
              //   borderBottom:
              //     pathname === link.href ? "1px solid #0a0a0a" : "none",
              //   paddingBottom: "2px",
              // }}
            >
              {/* {link.label} */}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                backgroundColor: "#0a0a0a",
                transition: "0.2s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #d4d0c8",
            backgroundColor: "#f5f4f0",
            padding: "1.5rem 2rem",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: pathname === link.href ? "#0a0a0a" : "#6b6b6b",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid #d4d0c8",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
