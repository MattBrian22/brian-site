"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#problem", label: "The problem" },
  { href: "#procedure", label: "The procedure" },
  { href: "#not", label: "What it is not" },
  { href: "#status", label: "Status" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const linkStyle = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "0.62rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#6b6b6b",
  textDecoration: "none",
} as const;

export default function Navbar() {
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
            whiteSpace: "nowrap",
          }}
        >
          Matthew Brian Tahir
        </Link>

        <nav
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="hidden md:flex"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </Link>
          ))}
        </nav>

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
              }}
            />
          ))}
        </button>
      </div>

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
                ...linkStyle,
                display: "block",
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
