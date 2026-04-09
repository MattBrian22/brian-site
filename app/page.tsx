import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const principles = [
  {
    id: "01",
    title: "Decisions must be defensible",
    body: "Every decision this system touches must be reproducible, traceable, and withstand external challenge. Defensibility is not optional—it is the minimum standard.",
  },
  {
    id: "02",
    title: "Evidence over opinion",
    body: "Assertions without structured evidence are noise. The system accepts data, documentation, and verifiable inference. Nothing else qualifies.",
  },
  {
    id: "03",
    title: "The veto protects the system",
    body: "When evidence is incomplete, contradictory, or unverifiable, the correct output is not a decision—it is a stop. The veto is a feature, not a failure.",
  },
  {
    id: "04",
    title: "Structure precedes scale",
    body: "A decision made without a framework cannot be validated at volume. Governance must be established before velocity is introduced.",
  },
  {
    id: "05",
    title: "Chain of custody is non-negotiable",
    body: "Who held the decision, when, and under what authority must be recorded. A decision without provenance is not a decision—it is a guess.",
  },
];

export default function Home() {
  return (
    <div className="container">
      {/* Hero */}
      <section
        style={{
          padding: "8rem 0 6rem",
          borderBottom: "1px solid #d4d0c8",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#6b6b6b",
              marginBottom: "2rem",
            }}
          >
            Decision Systems Engineer — VFS Protocol
          </p>

          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "#0a0a0a",
              marginBottom: "2rem",
              maxWidth: "900px",
              letterSpacing: "-0.02em",
            }}
          >
            I design and validate decisions under uncertainty.
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#6b6b6b",
              maxWidth: "620px",
              marginBottom: "3rem",
            }}
          >
            The VFS Method — Validation & Forensic Standards — is a structured
            protocol for producing defensible decisions in high-stakes
            environments. It eliminates opinion as the primary input. It
            replaces intuition with evidence. It documents everything.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/vfs-method" className="button button-primary">
              Read the Method
            </Link>
            <Link href="/case-files" className="button button-secondary">
              Case Files
            </Link>
          </div>
        </div>

        {/* Stat strip */}
        <div
          className="stat-strip"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            borderTop: "1px solid #d4d0c8",
            paddingTop: "3rem",
          }}
        >
          {[
            { value: "47+", label: "Decisions Validated" },
            { value: "£2.3B", label: "Assets Analysed" },
            { value: "0", label: "Unvetoed Failures" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                borderRight: i < 2 ? "1px solid #d4d0c8" : "none",
                paddingRight: i < 2 ? "2rem" : "0",
                paddingLeft: i > 0 ? "2rem" : "0",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "2.2rem",
                  color: "#0a0a0a",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b6b6b",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: "6rem 0" }}>
        <SectionLabel index="§ 1">Core Principles</SectionLabel>

        <div
          className="principles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "0",
          }}
        >
          {principles.map((p, i) => (
            <div
              key={p.id}
              style={{
                padding: "2.5rem",
                borderBottom: "1px solid #d4d0c8",
                borderRight: i % 2 === 0 ? "1px solid #d4d0c8" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  color: "#6b6b6b",
                  marginBottom: "1rem",
                }}
              >
                {p.id}
              </p>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "1.2rem",
                  color: "#0a0a0a",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: "#6b6b6b",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VFS Intro */}
      <section
        style={{
          padding: "5rem 0",
          borderTop: "1px solid #d4d0c8",
          display: "grid",
          gap: "3rem",
        }}
      >
        <div>
          <SectionLabel index="§ 2">The Method</SectionLabel>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.8rem",
              color: "#0a0a0a",
              lineHeight: 1.2,
            }}
          >
            Validation &<br />Forensic Standards
          </h2>
        </div>
        <div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "#4a4a4a",
              marginBottom: "2rem",
              borderLeft: "2px solid #0a0a0a",
              paddingLeft: "1.5rem",
            }}
          >
            VFS treats every decision as a live document. It passes through a
            5-field intake, a structured validation process, and an
            evidence-grading standard derived from Daubert precedent. The
            output is not a recommendation — it is a decision packet that can
            be challenged, audited, and defended.
          </p>
          <Link
            href="/vfs-method"
            className="button"
            style={{ borderBottom: "1px solid #0a0a0a" }}
          >
            Full methodology →
          </Link>
        </div>
      </section>
    </div>
  );
}