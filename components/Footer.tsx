import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #d4d0c8",
        marginTop: "8rem",
        padding: "3rem 2rem",
        backgroundColor: "#f5f4f0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Brian
            </p>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6b6b6b",
              }}
            >
              Decision Systems Engineer
            </p>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              ["VFS Method", "/vfs-method"],
              ["Case Files", "/case-files"],
              ["Systems", "/systems"],
              ["Doctrine", "/doctrine"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b6b6b",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          style={{
            borderTop: "1px solid #d4d0c8",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b6b6b",
            }}
          >
            © {new Date().getFullYear()} Brian. All decisions are documented.
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b6b6b",
            }}
          >
            VFS Method · v2.4
          </p>
        </div>
      </div>
    </footer>
  );
}
