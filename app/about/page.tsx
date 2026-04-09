import PageLayout from "@/components/PageLayout";
import SectionLabel from "@/components/SectionLabel";

const practiceFields = [
  { label: "Discipline", value: "Forensic Systems Engineering" },
  { label: "Primary Protocol", value: "SOP-001 — Validation & Forensic Standards" },
  { label: "Evidence Standard", value: "Daubert-aligned" },
  { label: "Academic Pathway", value: "MSc Complex Systems Engineering (TU Delft)" },
  { label: "Sector Focus", value: "Infrastructure, Capital Markets, AI Governance, Public Institutions" },
  { label: "Jurisdictions", value: "UK, EU, SEA" },
  { label: "Status", value: "Active — accepting decision-critical engagements" },
];

const notThisList = [
  "Data quality management",
  "Metadata stewardship or DAMA DMBoK",
  "Operational analytics or modelling",
  "Predictive advisory or recommendations",
  "AI development or engineering",
];

const isThisList = [
  "Systemic exposure mapping",
  "Institutional drift classification",
  "Cross-sector risk propagation analysis",
  "Irreversible liability identification",
  "Forensic defensibility of decisions",
];

const systemicFailures = [
  {
    id: "F1",
    title: "Drift without detection",
    body: "Institutions were making decisions based on assumptions that had quietly shifted. No record existed of when the drift occurred or who had authorised it. The decision looked sound on the surface because no one had the framework to test it.",
  },
  {
    id: "F2",
    title: "Evidence without provenance",
    body: "Data, reports, and automated outputs were entering decision records without a chain-of-custody. They could be cited, but they could not be defended. Under challenge, the evidentiary foundation collapsed.",
  },
  {
    id: "F3",
    title: "Decisions without boundaries",
    body: "High-stakes decisions were being made without identifying the failure boundary — the exact point at which the decision becomes indefensible, irreversible, or structurally unsound. The exposure was invisible until it materialised.",
  },
];

const sopIntegrates = [
  "Systems analysis",
  "Forensic reasoning",
  "Daubert-aligned evidentiary standards",
  "Drift classification",
  "Failure boundary mapping",
  "Chain-of-custody documentation",
];

const whyThisExists = [
  { condition: "Automated outputs", risk: "No chain-of-custody" },
  { condition: "Cross-sector data flows", risk: "Propagation without audit" },
  { condition: "High-velocity decisions", risk: "Structure absent under pressure" },
  { condition: "Opaque AI systems", risk: "Evidence gaps undetected" },
  { condition: "Distributed accountability", risk: "Authority unverifiable" },
];

const engagementTypes = [
  { id: "E1", label: "Forensic Case File Development", desc: "Full five-field intake, evidence grading, constraint matrix, and band classification. Output is a signed, chain-of-custody decision packet." },
  { id: "E2", label: "Failure Boundary Review", desc: "Structured assessment of where a decision or system becomes irreversible. Identifies the exact conditions under which recovery is no longer possible." },
  { id: "E3", label: "AI Governance Interrogation", desc: "Forensic cross-examination of AI-generated outputs against SOP-001. Identifies drift risks, evidence gaps, and liability pathways before outputs enter institutional records." },
  { id: "E4", label: "Drift & Exposure Classification", desc: "Band A/B/C classification of institutional exposure. Determines which decisions require mandatory human review and which trigger escalation." },
];

const academicMap = [
  { area: "Stability Analysis", relevance: "Failure boundary identification" },
  { area: "Network Theory", relevance: "Cross-sector propagation mapping" },
  { area: "Control Systems", relevance: "Drift classification and correction" },
  { area: "Risk Propagation", relevance: "Band B/C exposure modelling" },
  { area: "Systemic Behaviour", relevance: "Institutional decision architecture" },
];

export default function AboutPage() {
  return (
    <PageLayout>

      {/* ── Header ── */}
      <div style={{ borderBottom: "1px solid #d4d0c8", paddingBottom: "4rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>
          Practitioner Profile
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#0a0a0a", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
          Matthew Brian Tahir
        </h1>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b" }}>
          Decision Systems Engineer · Forensic Systems Engineering
        </p>
      </div>

      {/* ── Bio + fields ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start", marginBottom: "6rem" }}>
        <div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#2a2a2a", marginBottom: "1.75rem", borderLeft: "2px solid #0a0a0a", paddingLeft: "1.5rem", fontStyle: "italic" }}>
            I am a Decision Systems Engineer working at the intersection of forensic reasoning, systems analysis, and institutional governance.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem" }}>
            My work focuses on identifying failure boundaries, classifying institutional drift, and producing structured case files that support defensible decision-making in complex, high-uncertainty environments.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem" }}>
            I do not provide recommendations or speculative analysis. I produce forensic findings — structured assessments of whether a decision is built on evidence sufficient to withstand challenge. The output is a decision packet, not an opinion.
          </p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a" }}>
            I am preparing for the MSc in Complex Systems Engineering, which provides the mathematical and methodological foundations — stability analysis, network theory, risk propagation — that underpin this practice.
          </p>
        </div>
        <div>
          {practiceFields.map((row) => (
            <div key={row.label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "1.5rem", padding: "1.25rem 0", borderBottom: "1px solid #d4d0c8", alignItems: "start" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b" }}>{row.label}</p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#0a0a0a" }}>{row.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── § 1 — What This Practice Is ── */}
      <section style={{ borderTop: "1px solid #d4d0c8", paddingTop: "4rem", marginBottom: "5rem" }}>
        <SectionLabel index="§ 1">What This Practice Is</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.25rem" }}>
              Not a decision-modelling practice
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.6rem", color: "#0a0a0a", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              A Forensic Systems Engineering unit
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4a4a", marginBottom: "1.25rem" }}>
              This practice examines how institutional decisions are made, what evidence they rely on, and where the system is structurally vulnerable to drift, failure, or irreversible liability.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4a4a" }}>
              Every engagement produces a forensic case file — not an advisory document, not a report, not a recommendation. A chain-of-custody record that can be challenged, audited, and defended.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.25rem", borderBottom: "1px solid #d4d0c8", paddingBottom: "0.75rem" }}>
                This is not
              </p>
              {notThisList.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#c0392b", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", marginTop: "2px", flexShrink: 0 }}>✕</span>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#6b6b6b" }}>{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.25rem", borderBottom: "1px solid #d4d0c8", paddingBottom: "0.75rem" }}>
                This operates at
              </p>
              {isThisList.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#0a0a0a", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", marginTop: "2px", flexShrink: 0 }}>—</span>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#2a2a2a" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── § 2 — Background: Origins of the Practice ── */}
      <section style={{ borderTop: "1px solid #d4d0c8", paddingTop: "4rem", marginBottom: "5rem" }}>
        <SectionLabel index="§ 2">Background</SectionLabel>

        {/* Origin paragraph */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "6rem", alignItems: "start", marginBottom: "4rem" }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.6rem", color: "#0a0a0a", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Origins of the Practice
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem", borderLeft: "2px solid #0a0a0a", paddingLeft: "1.5rem", fontStyle: "italic" }}>
              This practice emerged from repeated exposure to environments where decisions were being made faster than they could be validated.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem" }}>
              Across sectors — infrastructure, capital markets, public institutions, and AI-driven systems — the same structural pattern appeared: decisions were fragile because the evidence behind them was untested, undocumented, or misinterpreted.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#4a4a4a" }}>
              Traditional analytics could not solve this. Governance frameworks could not keep pace. Advisory models produced opinions, not defensible records. The gap was not technical — it was forensic.
            </p>
          </div>

          {/* Pull quote */}
          <div style={{ borderTop: "2px solid #0a0a0a", paddingTop: "1.5rem" }}>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.15rem", lineHeight: 1.5, color: "#0a0a0a", marginBottom: "1.25rem" }}>
              "The gap was not technical — it was forensic."
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b" }}>
              Founding observation · VFS Practice
            </p>
          </div>
        </div>

        {/* Three systemic failures */}
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "2rem" }}>
            Three recurring systemic failures
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {systemicFailures.map((f, i) => (
              <div key={f.id} style={{ padding: "2.5rem", borderTop: "1px solid #d4d0c8", borderRight: i < 2 ? "1px solid #d4d0c8" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", backgroundColor: "#0a0a0a", color: "#f5f4f0", padding: "0.2rem 0.5rem", letterSpacing: "0.08em" }}>{f.id}</span>
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", color: "#0a0a0a", marginBottom: "1rem", lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#6b6b6b" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOP-001 development */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start", marginBottom: "4rem" }}>
          <div>
            <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.4rem", color: "#0a0a0a", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Development of SOP-001
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem" }}>
              SOP-001 — the Validation & Forensic Standards protocol — was developed to create a repeatable, defensible method for examining decisions under uncertainty.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#4a4a4a" }}>
              The protocol was refined through dozens of case files across multiple sectors, each revealing the same structural requirement: an evidence-first method for validating decisions before they enter institutional memory.
            </p>
          </div>
          <div style={{ backgroundColor: "#0a0a0a", padding: "2.5rem" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.75rem" }}>
              SOP-001 Integrates
            </p>
            {sopIntegrates.map((item, i) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: i > 0 ? "0.85rem" : "0", paddingBottom: "0.85rem", borderBottom: i < sopIntegrates.length - 1 ? "1px solid #2a2a2a" : "none" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", color: "#6b6b6b", flexShrink: 0 }}>0{i + 1}</span>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#f5f4f0" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why this work exists */}
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.4rem", color: "#0a0a0a", lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Why This Work Exists
          </h3>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#6b6b6b", marginBottom: "2rem", maxWidth: "580px" }}>
            Modern institutions increasingly operate in conditions where traditional governance is too slow and traditional analytics too narrow. Each condition creates a specific structural risk.
          </p>
          <div style={{ border: "1px solid #d4d0c8" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #d4d0c8" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", padding: "1rem 1.5rem", borderRight: "1px solid #d4d0c8" }}>Condition</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", padding: "1rem 1.5rem" }}>Structural Risk</p>
            </div>
            {whyThisExists.map((row, i) => (
              <div key={row.condition} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < whyThisExists.length - 1 ? "1px solid #d4d0c8" : "none" }}>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#0a0a0a", padding: "1.1rem 1.5rem", borderRight: "1px solid #d4d0c8" }}>{row.condition}</p>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.08em", color: "#c0392b", padding: "1.1rem 1.5rem" }}>{row.risk}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.85, color: "#6b6b6b", marginTop: "1.5rem", maxWidth: "620px" }}>
            Forensic Systems Engineering is not a replacement for governance or analytics. It is the layer that ensures both remain trustworthy — that decisions remain defensible, evidence-based, structurally sound, and free from silent drift.
          </p>
        </div>
      </section>

      {/* ── § 3 — AI Governance ── */}
      <section style={{ borderTop: "1px solid #d4d0c8", paddingTop: "4rem", marginBottom: "5rem" }}>
        <SectionLabel index="§ 3">Primary Application — AI Governance</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem" }}>
              AI tools can generate outputs with stated confidence intervals — "94% success probability," "low systemic risk" — but they cannot provide the forensic chain-of-custody required to defend those outputs under institutional challenge.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a", marginBottom: "1.25rem" }}>
              This practice interrogates AI-generated claims using SOP-001 to establish whether the evidence behind an automated output is admissible, whether the failure boundary has been correctly identified, and whether the output can enter a decision record without creating irreversible institutional liability.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#4a4a4a" }}>
              AI governance at this level is not about auditing models. It is about ensuring that what the model produces does not silently become what the institution decided.
            </p>
          </div>
          <div style={{ backgroundColor: "#0a0a0a", padding: "2.5rem" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>SOP-001 Interrogates</p>
            {["Drift Risks", "Failure Boundaries", "Evidence Gaps", "Irreversible Liability Pathways"].map((item) => (
              <div key={item} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", alignItems: "center" }}>
                <span style={{ width: "6px", height: "6px", backgroundColor: "#f5f4f0", flexShrink: 0, display: "block" }} />
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#f5f4f0" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── § 4 — Engagement Model ── */}
      <section style={{ borderTop: "1px solid #d4d0c8", paddingTop: "4rem", marginBottom: "5rem" }}>
        <SectionLabel index="§ 4">Engagement Model</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
          {engagementTypes.map((e, i) => (
            <div key={e.id} style={{ padding: "2.5rem", borderBottom: "1px solid #d4d0c8", borderRight: i % 2 === 0 ? "1px solid #d4d0c8" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", backgroundColor: "#0a0a0a", color: "#f5f4f0", padding: "0.2rem 0.5rem", letterSpacing: "0.1em" }}>{e.id}</span>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", color: "#0a0a0a", marginBottom: "0.85rem", lineHeight: 1.3 }}>{e.label}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#6b6b6b" }}>{e.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: "2rem", borderBottom: "1px solid #d4d0c8" }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b6b6b" }}>
            Pricing — Scope-based. Determined by decision horizon, complexity, and band classification. No standard rates. Engagements are accepted selectively.
          </p>
        </div>
      </section>

      {/* ── § 5 — Academic Pathway ── */}
      <section style={{ borderTop: "1px solid #d4d0c8", paddingTop: "4rem" }}>
        <SectionLabel index="§ 5">Academic Pathway</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.5rem", color: "#0a0a0a", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              MSc Complex Systems Engineering
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4a4a", marginBottom: "1.25rem" }}>
              The MSc programme at TU Delft provides the mathematical and methodological foundations that underpin forensic systems practice: stability analysis, network theory, control systems, and systemic behaviour modelling.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4a4a" }}>
              The academic pathway is not a pivot. It is the formalisation of what the practice already requires — rigorous frameworks for reasoning about complex, interdependent systems under uncertainty.
            </p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "0.85rem 0", borderBottom: "2px solid #0a0a0a", marginBottom: "0" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b6b6b" }}>Academic Area</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b6b6b" }}>Practice Application</p>
            </div>
            {academicMap.map((row) => (
              <div key={row.area} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "1rem 0", borderBottom: "1px solid #d4d0c8" }}>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#0a0a0a" }}>{row.area}</p>
                <p style={{ fontSize: "0.8rem", color: "#6b6b6b" }}>{row.relevance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
