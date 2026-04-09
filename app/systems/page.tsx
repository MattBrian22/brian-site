import PageLayout from "@/components/PageLayout";
import SectionLabel from "@/components/SectionLabel";

const systems = [
  {
    id: "SYS-01",
    name: "VFS Decision Console",
    type: "Decision Tool",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    status: "Live",
    description: "The primary intake and validation interface for the VFS Method. Accepts 5-field decision submissions, runs automated evidence grading, generates constraint matrices, and produces signed decision packets. Full audit trail with timestamped state history.",
    capabilities: ["5-field intake processing", "Evidence grade assignment", "Constraint matrix builder", "Veto logic engine", "PDF decision packet generation", "Full audit log"],
  },
  {
    id: "SYS-02",
    name: "Scenario Stress-Test Engine",
    type: "Analytical Framework",
    stack: ["Python", "FastAPI", "React", "Redis"],
    status: "Internal",
    description: "A quantitative scenario modelling tool that runs three-case adversarial analysis against submitted decision parameters. Accepts structured input, applies configurable stress variables, and returns scenario divergence reports with flagged thresholds.",
    capabilities: ["Three-scenario modelling", "Configurable stress parameters", "NPV and payback divergence", "Threshold breach detection", "Exportable scenario reports"],
  },
  {
    id: "SYS-03",
    name: "Governance Audit Trail",
    type: "Infrastructure",
    stack: ["Node.js", "PostgreSQL", "Next.js"],
    status: "Client Deployment",
    description: "An append-only decision ledger for enterprise clients. Every decision event — submission, review, modification, approval, or veto — is recorded with timestamp, actor ID, and state snapshot. Designed for regulatory environments requiring full chain-of-custody documentation.",
    capabilities: ["Append-only event log", "Actor identity verification", "State snapshot at each event", "Exportable audit reports", "Role-based access control"],
  },
  {
    id: "SYS-04",
    name: "Constraint Verification Database",
    type: "Reference System",
    stack: ["PostgreSQL", "REST API", "Next.js"],
    status: "Internal",
    description: "A structured repository of verified regulatory, legal, and operational constraints across four jurisdictions. Used to populate constraint matrices during intake. Each entry is sourced, dated, and graded. Constraints expire and require re-verification on a defined cycle.",
    capabilities: ["Multi-jurisdiction constraint library", "Source-linked entries", "Expiry and re-verification cycle", "API access for intake systems", "Constraint conflict detection"],
  },
];

export default function SystemsPage() {
  return (
    <PageLayout>
      <div style={{ borderBottom: "1px solid #d4d0c8", paddingBottom: "4rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>
          Execution Capability · Systems Register
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#0a0a0a", lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
          Systems
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#6b6b6b", maxWidth: "580px" }}>
          Execution capability is not theoretical. These are the systems built to operationalise the VFS Method. Each is designed to a specific function, built to production standard, and maintained with versioned documentation.
        </p>
      </div>

      {/* Type overview */}
      <section style={{ marginBottom: "5rem" }}>
        <SectionLabel index="§ 1">System Types</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", borderTop: "1px solid #d4d0c8" }}>
          {[
            { type: "Decision Tools", desc: "Systems that accept structured inputs, apply validation logic, and produce defensible outputs. The operational layer of VFS." },
            { type: "Analytical Frameworks", desc: "Quantitative engines for scenario modelling, stress testing, and constraint verification. Designed for structured, reproducible analysis." },
            { type: "Infrastructure", desc: "Foundational systems that ensure audit integrity, access control, and chain-of-custody compliance. Built for regulated environments." },
          ].map((t, i) => (
            <div key={t.type} style={{ padding: "2.5rem", borderBottom: "1px solid #d4d0c8", borderRight: i < 2 ? "1px solid #d4d0c8" : "none" }}>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", color: "#0a0a0a", marginBottom: "1rem" }}>{t.type}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#6b6b6b" }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System records */}
      <section>
        <SectionLabel index="§ 2">System Register</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {systems.map((sys) => (
            <div key={sys.id} style={{ borderBottom: "1px solid #d4d0c8", padding: "3rem 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b" }}>{sys.id}</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #d4d0c8", color: "#6b6b6b", padding: "0.15rem 0.65rem" }}>{sys.type}</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", backgroundColor: sys.status === "Live" ? "#0a0a0a" : "#d4d0c8", color: sys.status === "Live" ? "#f5f4f0" : "#6b6b6b", padding: "0.15rem 0.65rem" }}>{sys.status}</span>
                  </div>
                  <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.5rem", color: "#0a0a0a" }}>{sys.name}</h2>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {sys.stack.map((s) => (
                    <span key={s} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid #d4d0c8", color: "#6b6b6b", padding: "0.2rem 0.6rem" }}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4a4a" }}>{sys.description}</p>
                <div>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1rem" }}>Capabilities</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {sys.capabilities.map((cap) => (
                      <li key={cap} style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#4a4a4a", display: "flex", gap: "0.75rem", marginBottom: "0.4rem" }}>
                        <span style={{ color: "#0a0a0a" }}>—</span>{cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
